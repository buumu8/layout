const btn = document.getElementById("hamburger");
const header__meta = document.getElementById("header__meta");
const header__categories = document.getElementById("header__categories");
const header__nav = document.getElementById("header__nav");
const logo = document.getElementById("mobile-logo");

const array = [logo, btn, header__categories, header__meta, header__nav];
btn.addEventListener("click", () => {
  array.forEach((el) => el.classList.toggle("open"));
});
