const musicBtn = document.getElementById("musicBtn");
const music = document.getElementById("bgMusic");
const openBtn = document.getElementById("openBtn");
const wishBtn = document.getElementById("wishBtn");
const modal = document.getElementById("wishModal");
const closeModal = document.getElementById("closeModal");
const wishDone = document.getElementById("wishDone");
const wishResult = document.getElementById("wishResult");

musicBtn.addEventListener("click", async () => {
  try {
    if (music.paused) {
      await music.play();
      musicBtn.innerHTML = "♫ <span>playing</span>";
    } else {
      music.pause();
      musicBtn.innerHTML = "♫ <span>music</span>";
    }
  } catch {
    musicBtn.innerHTML = "♫ <span>add music.mp3</span>";
  }
});

openBtn.addEventListener("click", () => {
  document.getElementById("letter").scrollIntoView({ behavior: "smooth" });
  confetti(35);
});

wishBtn.addEventListener("click", () => {
  modal.classList.add("show");
  modal.setAttribute("aria-hidden", "false");
});

function hideModal() {
  modal.classList.remove("show");
  modal.setAttribute("aria-hidden", "true");
}

closeModal.addEventListener("click", hideModal);
modal.addEventListener("click", (e) => { if (e.target === modal) hideModal(); });

wishDone.addEventListener("click", () => {
  wishResult.style.display = "block";
  wishDone.textContent = "Wish sent to the universe ✨";
  confetti(70);
});

function confetti(amount) {
  const symbols = ["♡","✦","✿","୨୧"];
  for (let i = 0; i < amount; i++) {
    const el = document.createElement("div");
    el.className = "confetti";
    el.textContent = symbols[Math.floor(Math.random()*symbols.length)];
    el.style.left = Math.random()*100 + "vw";
    el.style.top = (-10 - Math.random()*20) + "vh";
    el.style.fontSize = (10 + Math.random()*16) + "px";
    el.style.color = ["#d87598","#efabc2","#c85f88","#f3c3d2"][Math.floor(Math.random()*4)];
    el.style.animationDelay = Math.random()*.45 + "s";
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 2200);
  }
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, {threshold: .12});

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
