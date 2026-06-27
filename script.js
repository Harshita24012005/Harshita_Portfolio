/////////////////////////////////////////////////////
// ⌨️ Typing Effect (safe)
/////////////////////////////////////////////////////

const text = "Java Backend Developer | Spring Boot | DSA Enthusiast";
let i = 0;

function typeEffect() {
  const typingEl = document.getElementById("typing");

  if (!typingEl) return;

  if (i < text.length) {
    typingEl.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeEffect, 60);
  }
}

typeEffect();


/////////////////////////////////////////////////////
// 🌙 Dark / Light Mode Toggle (SAFE)
/////////////////////////////////////////////////////

const btn = document.getElementById("themeToggle");

if (btn) {
  btn.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark");

    if (document.documentElement.classList.contains("dark")) {
      btn.innerHTML = "☀️";
    } else {
      btn.innerHTML = "🌙";
    }
  });
}


/////////////////////////////////////////////////////
// ✨ Safe Scroll Animation (ONLY for specific class)
/////////////////////////////////////////////////////

const sections = document.querySelectorAll(".fade-section");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("opacity-100", "translate-y-0");
    }
  });
}, {
  threshold: 0.1
});

sections.forEach((section) => {
  // SAFE initial state (only applied to selected sections)
  section.classList.add(
    "opacity-0",
    "translate-y-6",
    "transition-all",
    "duration-700"
  );

  observer.observe(section);
});