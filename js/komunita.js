// ====== Jednoduchý front-end CHAT (lokálne, bez backendu) ======
const chatForm = document.getElementById("chatForm");
const chatInput = document.getElementById("chatInput");
const chatWindow = document.getElementById("chatWindow");

chatForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const text = chatInput.value.trim();
  if (!text) return;
  const bubble = document.createElement("div");
  bubble.className = "chat-bubble chat-me";
  bubble.innerHTML = text;
  chatWindow.firstElementChild.appendChild(bubble);
  chatInput.value = "";
  chatWindow.scrollTop = chatWindow.scrollHeight;
});

// ====== Jednoduché KOMENTÁRE (len v pamäti pre túto stránku) ======
const commentForm = document.getElementById("commentForm");
const commentInput = document.getElementById("commentInput");
const commentsList = document.getElementById("commentsList");

commentForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const text = commentInput.value.trim();
  if (!text) return;
  const wrapper = document.createElement("div");
  wrapper.className = "mb-2 border-bottom border-secondary pb-2 small";
  wrapper.innerHTML = "<strong>Anon</strong><br>" + text;
  commentsList.appendChild(wrapper);
  commentInput.value = "";
});

// ====== Jednoduchý SNAKE (Hadík) – inšpirácia JS canvas hrami [web:44][web:48] ======
const canvasGame = document.getElementById("snakeCanvas");
const ctxG = canvasGame.getContext("2d");
const gridSize = 16;
let snake,
  food,
  dx,
  dy,
  score,
  gameInterval,
  running = false;

function resetGame() {
  snake = [{ x: 8, y: 8 }];
  dx = 1;
  dy = 0;
  score = 0;
  document.getElementById("score").textContent = score;
  placeFood();
}

function placeFood() {
  food = {
    x: Math.floor(Math.random() * (canvasGame.width / gridSize)),
    y: Math.floor(Math.random() * (canvasGame.height / gridSize)),
  };
}

function drawGame() {
  ctxG.fillStyle = "#020617";
  ctxG.fillRect(0, 0, canvasGame.width, canvasGame.height);

  // food
  ctxG.fillStyle = "#22c55e";
  ctxG.fillRect(food.x * gridSize, food.y * gridSize, gridSize, gridSize);

  // snake
  ctxG.fillStyle = "#38bdf8";
  snake.forEach((seg) => {
    ctxG.fillRect(
      seg.x * gridSize,
      seg.y * gridSize,
      gridSize - 1,
      gridSize - 1
    );
  });
}

function updateGame() {
  const head = { x: snake[0].x + dx, y: snake[0].y + dy };

  // wrap-around okraje
  const cols = canvasGame.width / gridSize;
  const rows = canvasGame.height / gridSize;
  if (head.x < 0) head.x = cols - 1;
  if (head.x >= cols) head.x = 0;
  if (head.y < 0) head.y = rows - 1;
  if (head.y >= rows) head.y = 0;

  // kolízia s telom
  if (snake.some((seg) => seg.x === head.x && seg.y === head.y)) {
    alert("Game Over! Skóre: " + score);
    running = false;
    clearInterval(gameInterval);
    return;
  }

  snake.unshift(head);

  // jedlo
  if (head.x === food.x && head.y === food.y) {
    score++;
    document.getElementById("score").textContent = score;
    placeFood();
  } else {
    snake.pop();
  }

  drawGame();
}

document.getElementById("startGameBtn").addEventListener("click", () => {
  resetGame();
  drawGame();
  if (running) clearInterval(gameInterval);
  running = true;
  gameInterval = setInterval(updateGame, 120);
});

window.addEventListener("keydown", (e) => {
  if (!running) return;
  if (e.key === "ArrowUp" && dy !== 1) {
    dx = 0;
    dy = -1;
  }
  if (e.key === "ArrowDown" && dy !== -1) {
    dx = 0;
    dy = 1;
  }
  if (e.key === "ArrowLeft" && dx !== 1) {
    dx = -1;
    dy = 0;
  }
  if (e.key === "ArrowRight" && dx !== -1) {
    dx = 1;
    dy = 0;
  }
});

// ====== Neural canvas pozadie – môžeš skopírovať z indexu ======
const canvasBg = document.getElementById("neural-canvas");
const ctx = canvasBg.getContext("2d");
let w = (canvasBg.width = window.innerWidth);
let h = (canvasBg.height = window.innerHeight);

const resizeCanvas = () => {
  w = canvasBg.width = window.innerWidth;
  h = canvasBg.height = window.innerHeight;
};
window.addEventListener("resize", resizeCanvas);

const mouse = { x: null, y: null };
window.addEventListener("mousemove", (e) => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
});

const nodes = [];
const nodeCount = 380;
for (let i = 0; i < nodeCount; i++) {
  nodes.push({
    x: Math.random() * w,
    y: Math.random() * h,
    vx: (Math.random() - 0.5) * 1.5,
    vy: (Math.random() - 0.5) * 1.5,
  });
}

function animate() {
  ctx.fillStyle = "rgba(14,14,14,0.12)";
  ctx.fillRect(0, 0, w, h);

  nodes.forEach((n) => {
    n.x += n.vx;
    n.y += n.vy;
    if (n.x < 0 || n.x > w) n.vx *= -1;
    if (n.y < 0 || n.y > h) n.vy *= -1;

    ctx.beginPath();
    ctx.arc(n.x, n.y, 2, 0, Math.PI * 2);
    ctx.fillStyle = "#22c55e";
    ctx.shadowColor = "#22c55e";
    ctx.shadowBlur = 10;
    ctx.fill();
    ctx.shadowBlur = 0;
  });

  for (let i = 0; i < nodeCount; i++) {
    for (let j = i + 1; j < nodeCount; j++) {
      const dx = nodes[i].x - nodes[j].x;
      const dy = nodes[i].y - nodes[j].y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 110) {
        ctx.beginPath();
        ctx.strokeStyle = `rgba(34,197,94,${1 - dist / 110})`;
        ctx.lineWidth = 1;
        ctx.moveTo(nodes[i].x, nodes[i].y);
        ctx.lineTo(nodes[j].x, nodes[j].y);
        ctx.stroke();
      }
    }
  }

  if (mouse.x && mouse.y) {
    nodes.forEach((n) => {
      const dx = n.x - mouse.x;
      const dy = n.y - mouse.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 150) {
        ctx.beginPath();
        ctx.strokeStyle = `rgba(56,189,248,${1 - dist / 150})`;
        ctx.lineWidth = 1.4;
        ctx.moveTo(n.x, n.y);
        ctx.lineTo(mouse.x, mouse.y);
        ctx.stroke();
      }
    });
  }
  requestAnimationFrame(animate);
}
animate();
