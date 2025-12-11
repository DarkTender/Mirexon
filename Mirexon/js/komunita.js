window.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('neural-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width = canvas.width = window.innerWidth;
  let height = canvas.height = window.innerHeight;

  const resizeCanvas = () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  };
  window.addEventListener('resize', resizeCanvas);

  const bgColor = 'rgba(15, 23, 42, 0.96)'; // tmavé pozadie
  const bubbleColors = [
    'rgba(56,189,248,0.5)',   // modrá
    'rgba(34,197,94,0.5)',    // zelená
    'rgba(250,204,21,0.5)',   // žltá
    'rgba(236,72,153,0.45)'   // ružová
  ];

  const bubbles = [];
  const bubbleCount = 25;

  for (let i = 0; i < bubbleCount; i++) {
    bubbles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      r: 50 + Math.random() * 80,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      colorIndex: Math.floor(Math.random() * bubbleColors.length),
      wobblePhase: Math.random() * Math.PI * 2,
      wobbleSpeed: 0.002 + Math.random() * 0.003
    });
  }

  const mouse = { x: null, y: null };
  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  function drawBubbles(time) {
    for (const b of bubbles) {
      // pohyb
      b.x += b.vx;
      b.y += b.vy;

      if (b.x < -b.r) b.x = width + b.r;
      if (b.x > width + b.r) b.x = -b.r;
      if (b.y < -b.r) b.y = height + b.r;
      if (b.y > height + b.r) b.y = -b.r;

      // wobble – dýchanie bublín
      const wobble = Math.sin(time * b.wobbleSpeed + b.wobblePhase) * 10;

      // interakcia s myšou – jemný „odtlak“
      if (mouse.x !== null && mouse.y !== null) {
        const dx = b.x - mouse.x;
        const dy = b.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const influenceRadius = 200;
        if (dist < influenceRadius && dist > 0) {
          const force = (1 - dist / influenceRadius) * 0.6;
          b.x += (dx / dist) * force * 4;
          b.y += (dy / dist) * force * 4;
        }
      }

      const gradient = ctx.createRadialGradient(
        b.x - b.r * 0.2, b.y - b.r * 0.2, b.r * 0.1,
        b.x, b.y, b.r + wobble
      );
      gradient.addColorStop(0, 'rgba(248,250,252,0.65)');
      gradient.addColorStop(0.4, bubbleColors[b.colorIndex]);
      gradient.addColorStop(1, 'rgba(15,23,42,0)');

      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(b.x, b.y, b.r + wobble, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  function drawConnections() {
    ctx.lineWidth = 1;
    for (let i = 0; i < bubbles.length; i++) {
      for (let j = i + 1; j < bubbles.length; j++) {
        const a = bubbles[i];
        const b = bubbles[j];
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const maxDist = 260;
        if (dist < maxDist) {
          const alpha = 1 - dist / maxDist;
          ctx.strokeStyle = `rgba(148,163,184,${alpha * 0.5})`;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
    }
  }

  function drawMouseHighlight() {
    if (mouse.x === null || mouse.y === null) return;

    const gradient = ctx.createRadialGradient(
      mouse.x, mouse.y, 0,
      mouse.x, mouse.y, 160
    );
    gradient.addColorStop(0, 'rgba(244,244,245,0.25)');
    gradient.addColorStop(1, 'rgba(15,23,42,0)');

    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(mouse.x, mouse.y, 160, 0, Math.PI * 2);
    ctx.fill();
  }

  function animate(time) {
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, width, height);

    drawBubbles(time);
    drawConnections();
    drawMouseHighlight();

    requestAnimationFrame(animate);
  }

  animate(0);
});
