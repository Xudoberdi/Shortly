const sitenav = document.querySelector("nav");
const toggleBtn = document.querySelector(".toggle-btn");
const toggleBtnImg = document.querySelector(".toggle-btn img");
let img = true;
toggleBtn.addEventListener("click", () => {
  //   sitenav.setAttribute("class", "hidden").toggle();
  sitenav.classList.toggle("hidden");

  if (sitenav.classList.contains("hidden")) {
    toggleBtnImg.src = "../images/svg/close-icon.svg";
  } else {
    toggleBtnImg.src = "../images/svg/hamburger-icon.svg";
  }
  img = false;
});

const btn = document.querySelector(".btn");
const input = document.querySelector(".inputt");
const botton = document.querySelector(".botton");
const text = document.querySelector(".text1");
const blink = document.querySelectorAll("#xo");
const link = document.querySelectorAll(".blink");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  input.classList.toggle("input");

  if (input.classList.contains("input")) {
    text.setAttribute("class", "text");
    botton.setAttribute("class", "button");
  } else {
    text.setAttribute("class", "text1");
    botton.setAttribute("class", "botton");
  }
});

blink[0].addEventListener("click", (e) => {
  e.preventDefault();
  link[0].style.backgroundColor = "#3A3054";
  link[0].textContent = "Copied!";
});
blink[1].addEventListener("click", (e) => {
  e.preventDefault();
  link[1].style.backgroundColor = "#3A3054";
  link[1].textContent = "Copied!";
});
blink[2].addEventListener("click", (e) => {
  e.preventDefault();
  link[2].style.backgroundColor = "#3A3054";
  link[2].textContent = "Copied!";
});
