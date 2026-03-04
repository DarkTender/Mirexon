/**
 * Laughing "Anonymous" mask made from letters (ASCII/typographic) – animated Canvas2D background.
 * - No libraries
 * - Responsive + DPR aware
 * - Subtle glitch + breathing + laugh wobble
 *
 * Usage:
 * 1) <canvas id="bg"></canvas>
 * 2) <script src="anonym-laugh-ascii-bg.js"></script>
 *
 * Tip: set canvas CSS to fixed/inset:0 and pointer-events:none (see demo HTML below).
 */
 (() => {
  const canvas = document.getElementById("bg") || (() => {
    const c = document.createElement("canvas");
    c.id = "bg";
    document.body.prepend(c);
    return c;
  })();
  const ctx = canvas.getContext("2d", { alpha: false });

  // --- CSS (safe defaults) ---
  const style = document.createElement("style");
  style.textContent = `
    #bg{
      position: fixed;
      inset: 0;
      width: 100vw;
      height: 100vh;
      z-index: 0;
      pointer-events: none;
      display:block;
      background:#010106;
    }
    body{ margin:0; background:#010106; }
  `;
  document.head.appendChild(style);

  // --- DPR + resize ---
  let W = 0, H = 0, DPR = 1;
  function resize() {
    DPR = Math.max(1, Math.min(2.5, window.devicePixelRatio || 1));
    W = Math.floor(window.innerWidth);
    H = Math.floor(window.innerHeight);
    canvas.width = Math.floor(W * DPR);
    canvas.height = Math.floor(H * DPR);
    canvas.style.width = W + "px";
    canvas.style.height = H + "px";
    ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
  }
  window.addEventListener("resize", resize, { passive: true });
  resize();

  // --- helpers ---
  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
  const lerp = (a, b, t) => a + (b - a) * t;
  const rand = (a = 1, b = 0) => b + Math.random() * (a - b);

  // --- look & feel ---
  const COLORS = {
    bg0: "#010106",
    bg1: "#020612",
    neonG: "#00ff7a",
    neonC: "#00d7ff",
    neonP: "#7b4dff",
    toxicR: "#ff2a6d"
  };

  // "letters only" palette
  const CHARSETS = {
    light: ".,:;iIl!~+_-?][}{1)(|\\/*tfjrxnuvczXYUJCLQ0OZmwqpdbkhao*#MW&8%B@$",
    hex: "0123456789abcdef",
    laugh: "HAHAhehehAHAH"
  };

  // --- pointer (adds extra laugh wobble if you click/hold) ---
  const pointer = { x: W * 0.5, y: H * 0.5, down: false };
  function setPointer(e) {
    const t = e.touches ? e.touches[0] : e;
    pointer.x = t.clientX;
    pointer.y = t.clientY;
  }
  window.addEventListener("mousemove", setPointer, { passive: true });
  window.addEventListener("mousedown", () => { pointer.down = true; }, { passive: true });
  window.addEventListener("mouseup", () => { pointer.down = false; }, { passive: true });
  window.addEventListener("touchstart", (e) => { pointer.down = true; setPointer(e); }, { passive: true });
  window.addEventListener("touchmove", setPointer, { passive: true });
  window.addEventListener("touchend", () => { pointer.down = false; }, { passive: true });

  // --- build "mask" as a density field sampled by text ---
  // We'll render a procedural Guy Fawkes / Anonymous-ish silhouette:
  // face oval + eyes + brows + moustache + smile.
  function maskField(nx, ny, t) {
    // normalized coords around center
    // nx,ny in [-1..1], aspect corrected outside
    const breathe = 0.06 * Math.sin(t * 0.0012);
    const laugh = 0.12 * Math.sin(t * 0.010) * (0.55 + 0.45 * Math.sin(t * 0.0022));
    const laughBoost = pointer.down ? 1.35 : 1.0;

    // base face oval
    const face = 1.0 - Math.pow(nx / (0.78 + breathe), 2) - Math.pow((ny + 0.05) / (0.96 + breathe), 2);

    // cheeks a bit
    const cheeks =
      0.18 * (Math.exp(-18 * ((nx - 0.45) ** 2 + (ny + 0.05) ** 2)) +
              Math.exp(-18 * ((nx + 0.45) ** 2 + (ny + 0.05) ** 2)));

    // eyes sockets
    const eyeY = -0.22 + 0.03 * Math.sin(t * 0.002);
    const eye1 = Math.exp(-85 * ((nx + 0.28) ** 2 + (ny - eyeY) ** 2));
    const eye2 = Math.exp(-85 * ((nx - 0.28) ** 2 + (ny - eyeY) ** 2));
    const eyes = (eye1 + eye2);

    // eyebrows arcs
    const brow1 = Math.exp(-120 * ((nx + 0.30) ** 2 + (ny + 0.33) ** 2));
    const brow2 = Math.exp(-120 * ((nx - 0.30) ** 2 + (ny + 0.33) ** 2));
    const brows = 1.3 * (brow1 + brow2);

    // moustache band
    const mY = 0.18;
    const moust =
      1.35 * Math.exp(-28 * ((ny - mY) ** 2)) * Math.exp(-2.2 * (nx ** 2));

    // mouth smile curve (laugh wobble)
    const mouthY = 0.42;
    const curve = (mouthY + 0.10 * nx * nx) + laugh * 0.30 * laughBoost;
    const mouth = 1.4 * Math.exp(-140 * ((ny - curve) ** 2)) * Math.exp(-0.75 * (nx ** 2));

    // dimples
    const d1 = 0.45 * Math.exp(-85 * ((nx + 0.48) ** 2 + (ny - 0.36) ** 2));
    const d2 = 0.45 * Math.exp(-85 * ((nx - 0.48) ** 2 + (ny - 0.36) ** 2));

    // overall density: inside face, subtract eyes (holes), add features
    let d = 0;
    d += clamp(face, 0, 1) * 0.9;
    d += cheeks;
    d += brows * 0.9;
    d += moust * 0.85;
    d += mouth * 0.85;
    d += d1 + d2;

    // eyes as darker holes -> reduce density locally so chars become "empty"
    d -= 1.05 * eyes;

    return d;
  }

  // --- grid of characters ---
  let cell = 12; // px
  function chooseCell() {
    // adapt to screen size; keep it readable
    cell = clamp(Math.floor(Math.min(W, H) / 70), 9, 16);
  }
  chooseCell();
  window.addEventListener("resize", chooseCell, { passive: true });

  // --- background "matrix rain-ish" subtle letters ---
  const rainCols = () => Math.ceil(W / (cell));
  let rain = [];
  function resetRain() {
    rain = new Array(rainCols()).fill(0).map(() => ({
      y: rand(-H, H),
      v: rand(0.6, 2.4),
      phase: rand(0, Math.PI * 2)
    }));
  }
  resetRain();
  window.addEventListener("resize", resetRain, { passive: true });

  // --- glitch control ---
  let glitch = 0, glitchT = 0;
  function stepGlitch(dt) {
    const chance = pointer.down ? 0.08 : 0.028;
    if (glitchT <= 0 && Math.random() < chance) {
      glitchT = Math.floor(rand(8, 22));
      glitch = rand(pointer.down ? 0.55 : 0.25, 1.0);
    } else if (glitchT > 0) {
      glitchT--;
      glitch *= 0.90;
    } else {
      glitch *= 0.98;
    }
  }

  // --- draw ---
  function drawBase(t) {
    const g = ctx.createLinearGradient(0, 0, 0, H);
    g.addColorStop(0, COLORS.bg0);
    g.addColorStop(0.55, COLORS.bg1);
    g.addColorStop(1, "#000000");
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, W, H);

    // heavy vignette
    ctx.save();
    ctx.globalCompositeOperation = "multiply";
    const vg = ctx.createRadialGradient(W * 0.5, H * 0.52, Math.min(W, H) * 0.12, W * 0.5, H * 0.52, Math.max(W, H) * 0.85);
    vg.addColorStop(0, "rgba(0,0,0,0)");
    vg.addColorStop(1, "rgba(0,0,0,0.92)");
    ctx.fillStyle = vg;
    ctx.fillRect(0, 0, W, H);
    ctx.restore();
  }

  function drawRain(t) {
    ctx.save();
    ctx.font = `${cell}px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`;
    ctx.textBaseline = "top";
    ctx.globalCompositeOperation = "lighter";

    // faint fade
    ctx.fillStyle = "rgba(0,0,0,0.10)";
    ctx.fillRect(0, 0, W, H);

    const n = rain.length;
    for (let i = 0; i < n; i++) {
      const x = i * cell;
      const r = rain[i];
      r.y += r.v * (0.8 + 0.2 * Math.sin(r.phase + t * 0.002));
      if (r.y > H + 120) r.y = -rand(60, 600);

      // short trail
      const trail = 10;
      for (let k = 0; k < trail; k++) {
        const yy = r.y - k * cell;
        if (yy < -cell || yy > H + cell) continue;
        const a = 1 - k / trail;
        ctx.fillStyle = `rgba(0,255,122,${0.02 + 0.10 * a})`;
        const ch = (Math.random() < 0.25) ? CHARSETS.hex[(i + k) % 16] : CHARSETS.light[(i * 13 + k * 7) % CHARSETS.light.length];
        ctx.fillText(ch, x, yy);
      }
    }

    ctx.restore();
  }

  function drawLaughMask(t) {
    ctx.save();
    ctx.globalCompositeOperation = "screen";

    // center + size
    const cx = W * 0.5;
    const cy = H * 0.54;
    const scale = Math.min(W, H) * 0.44;

    // laugh wobble
    const wob = (pointer.down ? 1.6 : 1.0);
    const wobX = Math.sin(t * 0.010) * 6 * wob;
    const wobY = Math.cos(t * 0.012) * 4 * wob;

    // glitch offsets
    const gx = (Math.random() - 0.5) * 22 * glitch;
    const gy = (Math.random() - 0.5) * 10 * glitch;

    ctx.translate(cx + wobX + gx, cy + wobY + gy);

    // text settings
    ctx.font = `${cell}px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    // sample points in a grid, choose character by density
    const step = cell; // grid spacing
    const aspect = W / H;

    for (let y = -scale; y <= scale; y += step) {
      for (let x = -scale; x <= scale; x += step) {
        const nx = (x / scale) * 1.05;          // [-1..1]
        const ny = (y / scale) * 1.05;

        // aspect correction so face isn't stretched
        const ax = nx * aspect;

        let d = maskField(ax, ny, t);

        // crop to rounded rectangle-ish region (keeps it mask-like)
        const crop = 1.0 - (Math.abs(nx) ** 3.2 + Math.abs(ny) ** 3.4);
        d *= clamp(crop * 1.25, 0, 1);

        if (d <= 0.02) continue;

        // choose char from density
        const idx = Math.floor(clamp(d, 0, 1) * (CHARSETS.light.length - 1));
        const chBase = CHARSETS.light[idx];

        // in smile region inject "HA" vibe
        const laughZone = (ny > 0.20 && ny < 0.70 && Math.abs(nx) < 0.70);
        const ch = laughZone && d > 0.35 && Math.random() < 0.22
          ? CHARSETS.laugh[Math.floor((t * 0.02 + x * 0.01 + y * 0.01) % CHARSETS.laugh.length)]
          : chBase;

        // color by density + feature emphasis
        const a = clamp(0.10 + d * 0.75, 0, 0.95);
        const isHot = (d > 0.72);
        const col = isHot
          ? (Math.random() < 0.15 ? COLORS.toxicR : COLORS.neonC)
          : (Math.random() < 0.20 ? COLORS.neonP : COLORS.neonG);

        ctx.fillStyle = hexToRgba(col, a);

        // tiny jitter for organic feel
        const jx = (Math.random() - 0.5) * 0.45 * cell * glitch;
        const jy = (Math.random() - 0.5) * 0.35 * cell * glitch;

        ctx.fillText(ch, x + jx, y + jy);
      }
    }

    ctx.restore();
  }

  function drawCRT(t) {
    // scanlines + noise + subtle curvature vignette
    ctx.save();

    // scanlines
    ctx.globalCompositeOperation = "multiply";
    ctx.globalAlpha = 0.28;
    const lineH = 2;
    const off = (t * 0.09) % (lineH * 2);
    for (let y = -off; y < H; y += lineH * 2) {
      ctx.fillStyle = "rgba(0,0,0,0.65)";
      ctx.fillRect(0, y, W, lineH);
    }

    // noise specks
    ctx.globalCompositeOperation = "screen";
    ctx.globalAlpha = 0.10;
    for (let i = 0; i < 260; i++) {
      const x = Math.random() * W;
      const y = Math.random() * H;
      ctx.fillStyle = `rgba(255,255,255,${Math.random() * 0.18})`;
      ctx.fillRect(x, y, 1, 1);
    }

    // vignette
    ctx.globalCompositeOperation = "multiply";
    ctx.globalAlpha = 0.55;
    const vg = ctx.createRadialGradient(W * 0.5, H * 0.52, Math.min(W, H) * 0.35, W * 0.5, H * 0.52, Math.max(W, H) * 0.85);
    vg.addColorStop(0, "rgba(0,0,0,0)");
    vg.addColorStop(1, "rgba(0,0,0,0.90)");
    ctx.fillStyle = vg;
    ctx.fillRect(0, 0, W, H);

    ctx.restore();
  }

  function applyTear() {
    if (glitch < 0.08) return;

    const slices = Math.floor(lerp(2, 18, glitch));
    for (let i = 0; i < slices; i++) {
      const y = rand(0, H);
      const h = rand(6, 28);
      const dx = rand(-30, 30) * glitch;
      ctx.drawImage(canvas, 0, y, W, h, dx, y, W, h);
    }
  }

  function hexToRgba(hex, a) {
    const m = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    if (!m) return `rgba(255,255,255,${a})`;
    const r = parseInt(m[1], 16);
    const g = parseInt(m[2], 16);
    const b = parseInt(m[3], 16);
    return `rgba(${r},${g},${b},${a})`;
  }

  // --- loop ---
  let last = performance.now();
  function frame(now) {
    const dt = clamp(now - last, 0, 40);
    last = now;

    stepGlitch(dt);

    drawBase(now);
    drawRain(now);
    drawLaughMask(now);
    applyTear();
    drawCRT(now);

    requestAnimationFrame(frame);
  }

  ctx.fillStyle = COLORS.bg0;
  ctx.fillRect(0, 0, W, H);
  requestAnimationFrame(frame);
})();