const canvas = document.getElementById("c");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

const particles = [];

function randomColor() {
  const colors = [
    "#ff88ff",
    "#cc66ff",
    "#ff44cc",
    "#aa88ff",
    "#ffffff",
    "#ffccff",
    "#dd99ff",
  ];
  return colors[Math.floor(Math.random() * colors.length)];
}

function launch() {
  const x = Math.random() * canvas.width;
  const y = Math.random() * canvas.height * 0.7;
  const count = 80 + Math.floor(Math.random() * 60);
  for (let i = 0; i < count; i++) {
    const angle = ((Math.PI * 2) / count) * i;
    const speed = 2 + Math.random() * 4;
    particles.push({
      x,
      y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      alpha: 1,
      color: randomColor(),
      size: 2 + Math.random() * 2,
      decay: 0.012 + Math.random() * 0.01,
    });
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = particles.length - 1; i >= 0; i--) {
    const p = particles[i];
    p.x += p.vx;
    p.y += p.vy;
    p.vy += 0.05;
    p.alpha -= p.decay;
    if (p.alpha <= 0) {
      particles.splice(i, 1);
      continue;
    }
    ctx.globalAlpha = p.alpha;
    ctx.fillStyle = p.color;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.globalAlpha = 1;
  requestAnimationFrame(animate);
}

animate();
launch();
setInterval(launch, 1200);
