const hamburger = document.querySelector("#hamburger");
const moon = document.querySelector(".moon");
const menu = document.querySelector("#menu");
const hLinks = document.querySelectorAll("#hLink");
hamburger.addEventListener("click", () => {
  menu.classList.toggle("hidden");
  hamburger.classList.toggle("bg-white");
});

hLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.toggle("Hidden");
    hamburger.classList.toggle("bg-white");
  });
});

moon.addEventListener("click", () => {
  body.classList.toggle("dark");
});
