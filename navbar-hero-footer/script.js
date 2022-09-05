const btn = document.getElementById("hamburger");
const header__meta = document.getElementById("header__meta");
const header__categories = document.getElementById("header__categories");
const header__nav = document.getElementById("header__nav");
const logo = document.getElementById("mobile-logo");
const header = document.getElementById("header");

const array = [logo, btn, header, header__categories, header__meta, header__nav];

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

btn.addEventListener("click", () => {
  array.forEach((el) => el.classList.toggle("open"));
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});
