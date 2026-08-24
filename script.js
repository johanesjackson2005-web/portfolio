const body = document.body;
const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");
const themeText = document.getElementById("themeText");
const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");
const backTop = document.getElementById("backTop");

function setTheme(dark) {
  body.classList.toggle("dark", dark);
  themeIcon.textContent = dark ? "☀" : "☾";
  themeText.textContent = dark ? "Light" : "Dark";
  localStorage.setItem("portfolio-theme", dark ? "dark" : "light");
}

const savedTheme = localStorage.getItem("portfolio-theme");
setTheme(savedTheme === "dark");

themeToggle.addEventListener("click", () => {
  setTheme(!body.classList.contains("dark"));
});

menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("open");
  menuBtn.textContent = navMenu.classList.contains("open") ? "×" : "☰";
});

document.querySelectorAll("#navMenu a").forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("open");
    menuBtn.textContent = "☰";
  });
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

window.addEventListener("scroll", () => {
  backTop.classList.toggle("show", window.scrollY > 500);
});

backTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
