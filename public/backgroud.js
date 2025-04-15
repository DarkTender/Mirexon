const canvas = document.createElement('canvas');
document.body.appendChild(canvas);
const ctx = canvas.getContext('2d');

let width, height;
let points = [];

function resizeCanvas() {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

function createPoints(numPoints) {
  points = [];
  for (let i = 0; i < numPoints; i++) {
    points.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5
    });
  }
}
createPoints(100);

let mouse = { x: null, y: null };
canvas.addEventListener('mousemove', e => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
});

function drawLine(p1, p2, maxDist) {
  const dx = p1.x - p2.x;
  const dy = p1.y - p2.y;
  const dist = Math.sqrt(dx * dx + dy * dy);

  if (dist < maxDist) {
    const alpha = 1 - dist / maxDist;
    ctx.strokeStyle = `rgba(0, 255, 180, ${alpha})`;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(p1.x, p1.y);
    ctx.lineTo(p2.x, p2.y);
    ctx.stroke();
  }
}

function animate() {
  ctx.fillStyle = 'rgba(10, 10, 20, 0.5)';
  ctx.fillRect(0, 0, width, height);

  points.forEach(p => {
    p.x += p.vx;
    p.y += p.vy;

    if (p.x <= 0 || p.x >= width) p.vx *= -1;
    if (p.y <= 0 || p.y >= height) p.vy *= -1;

    ctx.fillStyle = '#00ffcc';
    ctx.beginPath();
    ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
    ctx.fill();

    points.forEach(other => drawLine(p, other, 120));
    if (mouse.x && mouse.y) drawLine(p, mouse, 150);
  });

  requestAnimationFrame(animate);
}
animate();
