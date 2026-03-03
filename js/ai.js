window.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('neural-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width = canvas.width = window.innerWidth;
  let height = canvas.height = window.innerHeight;

  const resizeCanvas = () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    initGrid();
  };
  window.addEventListener('resize', resizeCanvas);

  const bgColor = 'rgba(3, 7, 18, 1)'; // úplne tmavé
  const gridColor = 'rgba(15, 118, 255, 0.25)'; // modrý neon grid
  const pulseColor = '#22c55e';                 // zelené pulzy
  const accentColor = '#a855f7';                // fialové highlighty

  // GRID
  const gridLines = [];
  const beams = [];

  function initGrid() {
    gridLines.length = 0;
    beams.length = 0;

    const spacingX = 80;
    const spacingY = 80;

    // vertikálne línie
    for (let x = -spacingX; x <= width + spacingX; x += spacingX) {
      gridLines.push({
        type: 'v',
        x,
        phase: Math.random() * Math.PI * 2
      });
    }

    // horizontálne línie
    for (let y = -spacingY; y <= height + spacingY; y += spacingY) {
      gridLines.push({
        type: 'h',
        y,
        phase: Math.random() * Math.PI * 2
      });
    }

    // „data beams“ – vertikálne svetelné stĺpce
    const beamCount = 10;
    for (let i = 0; i < beamCount; i++) {
      beams.push({
        x: Math.random() * width,
        width: 4 + Math.random() * 10,
        speed: 80 + Math.random() * 120,
        offset: Math.random() * height,
      });
    }
  }

  initGrid();

  const mouse = { x: null, y: null };
  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  function drawGrid(time) {
    ctx.lineWidth = 1;

    for (const line of gridLines) {
      const glowPhase = (Math.sin(time * 0.0015 + line.phase) + 1) / 2; // 0–1
      const alpha = 0.15 + glowPhase * 0.2;
      ctx.strokeStyle = `rgba(37, 99, 235, ${alpha})`;

      ctx.beginPath();
      if (line.type === 'v') {
        ctx.moveTo(line.x, 0);
        ctx.lineTo(line.x, height);
      } else {
        ctx.moveTo(0, line.y);
        ctx.lineTo(width, line.y);
      }
      ctx.stroke();
    }
  }

  function drawBeams(time, delta) {
    for (const beam of beams) {
      beam.offset += beam.speed * delta;
      if (beam.offset > height + 200) {
        beam.offset = -200;
        beam.x = Math.random() * width;
        beam.width = 4 + Math.random() * 10;
        beam.speed = 80 + Math.random() * 120;
      }

      const x = beam.x;
      const w = beam.width;

      const gradient = ctx.createLinearGradient(x - w, 0, x + w, 0);
      gradient.addColorStop(0, 'rgba(59,130,246,0)');
      gradient.addColorStop(0.5, 'rgba(56,189,248,0.7)');
      gradient.addColorStop(1, 'rgba(59,130,246,0)');

      ctx.fillStyle = gradient;
      ctx.fillRect(x - w, 0, w * 2, height);

      // pulzujúci segment (ako keby paket dát)
      const segmentHeight = 160;
      const top = beam.offset - segmentHeight / 2;
      const bottom = beam.offset + segmentHeight / 2;

      const segGrad = ctx.createLinearGradient(0, top, 0, bottom);
      segGrad.addColorStop(0, 'rgba(16,185,129,0)');
      segGrad.addColorStop(0.5, 'rgba(34,197,94,0.8)');
      segGrad.addColorStop(1, 'rgba(16,185,129,0)');

      ctx.fillStyle = segGrad;
      ctx.fillRect(x - w * 1.5, top, w * 3, segmentHeight);
    }
  }

  function drawNodes(time) {
    const nodeCount = 40;
    ctx.lineWidth = 1.5;

    for (let i = 0; i < nodeCount; i++) {
      const t = i / nodeCount;
      const x = (Math.sin(time * 0.0005 + t * Math.PI * 4) + 1) / 2 * width;
      const y = (Math.cos(time * 0.0007 + t * Math.PI * 6) + 1) / 2 * height;

      const radius = 2 + Math.sin(time * 0.002 + t * Math.PI * 2) * 1.5;

      // žiara okolo uzla
      const g = ctx.createRadialGradient(x, y, 0, x, y, 16);
      g.addColorStop(0, 'rgba(248,250,252,0.9)');
      g.addColorStop(0.4, 'rgba(56,189,248,0.7)');
      g.addColorStop(1, 'rgba(3,7,18,0)');
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(x, y, 16, 0, Math.PI * 2);
      ctx.fill();

      // jadro
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fillStyle = pulseColor;
      ctx.shadowColor = accentColor;
      ctx.shadowBlur = 12;
      ctx.fill();
      ctx.shadowBlur = 0;

      // náhodné spojenia medzi blízkymi uzlami – len pár pre „AI sieť“
      if (Math.random() < 0.06) {
        const x2 = (Math.sin(time * 0.0005 + (t + 0.08) * Math.PI * 4) + 1) / 2 * width;
        const y2 = (Math.cos(time * 0.0007 + (t + 0.12) * Math.PI * 6) + 1) / 2 * height;

        const alpha = 0.2 + 0.3 * Math.random();
        ctx.strokeStyle = `rgba(168,85,247,${alpha})`;
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x2, y2);
        ctx.stroke();
      }
    }
  }

  function drawMouseHighlight() {
    if (!mouse.x || !mouse.y) return;

    const g = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 200);
    g.addColorStop(0, 'rgba(248,250,252,0.12)');
    g.addColorStop(0.5, 'rgba(59,130,246,0.18)');
    g.addColorStop(1, 'rgba(3,7,18,0)');
    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.arc(mouse.x, mouse.y, 200, 0, Math.PI * 2);
    ctx.fill();
  }

  let lastTime = performance.now();

  function animate(time) {
    const delta = (time - lastTime) / 1000;
    lastTime = time;

    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, width, height);

    drawGrid(time);
    drawBeams(time, delta);
    drawNodes(time);
    drawMouseHighlight();

    requestAnimationFrame(animate);
  }

  animate(performance.now());
});
