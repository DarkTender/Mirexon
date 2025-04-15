
document.addEventListener("DOMContentLoaded", function () {
  const canvas = document.getElementById("bgCanvas");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const nodes = [];
  const totalNodes = 80;
  const maxDist = 160;

  class Node {
    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.vx = Math.random() * 0.8 - 0.4;
      this.vy = Math.random() * 0.8 - 0.4;
      this.radius = Math.random() * 1.5 + 1;
    }

    move() {
      this.x += this.vx;
      this.y += this.vy;

      if (this.x <= 0 || this.x >= canvas.width) this.vx *= -1;
      if (this.y <= 0 || this.y >= canvas.height) this.vy *= -1;
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
      ctx.fillStyle = "rgba(0, 255, 200, 0.9)";
      ctx.fill();
    }
  }

  function connectNodes() {
    for (let i = 0; i < totalNodes; i++) {
      for (let j = i + 1; j < totalNodes; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < maxDist) {
          ctx.beginPath();
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(nodes[j].x, nodes[j].y);
          ctx.strokeStyle = `rgba(0, 255, 255, ${1 - dist / maxDist})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
    }
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < totalNodes; i++) {
      nodes[i].move();
      nodes[i].draw();
    }

    connectNodes();
    requestAnimationFrame(animate);
  }

  for (let i = 0; i < totalNodes; i++) {
    nodes.push(new Node());
  }

  animate();

  window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });
});
