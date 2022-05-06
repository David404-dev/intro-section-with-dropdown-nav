const burgerIcon = document.querySelector(".burger-icon");
const closeIcon = document.querySelector(".close-icon");
const dropDown = document.querySelector(".dropdown");
const dropDownMenu = document.querySelector(".dropdown-menu");
const blackOut = document.querySelector(".blackout");
const featureLinks = document.querySelector(".feature-links");
const companyLinks = document.querySelector(".company-links");
const featureTitle = document.querySelector(".feature-title");
const companyTitle = document.querySelector(".company-title");
const arrowUp = document.querySelector(".arrowUp");
const arrowDown = document.querySelector(".arrowDown");
const arrowDown2 = document.querySelector(".arrowDown2");
const arrowUp2 = document.querySelector(".arrowUp2");
// open dropdown menu
burgerIcon.addEventListener("click", () => {
  burgerIcon.style.display = "none";
  dropDown.style.display = "block";
  closeIcon.style.display = "block";
  blackOut.style.display = "block";
});

// close dropdown menu
closeIcon.addEventListener("click", () => {
  burgerIcon.style.display = "block";
  dropDown.style.display = "none";
  closeIcon.style.display = "none";
  blackOut.style.display = "none";
});

// if blackout is clicked, close dropdown
blackOut.addEventListener("click", () => {
  dropDown.style.display = "none";
  blackOut.style.display = "none";
  burgerIcon.style.display = "block";
});

// open feature links in dropdown menu
featureTitle.addEventListener("click", () => {
  featureLinks.classList.toggle("displayBlock");
  arrowDown.classList.toggle("displayNone");
  arrowUp.classList.toggle("displayInline");
});

// open company links in dropdown menu
companyTitle.addEventListener("click", () => {
  companyLinks.classList.toggle("displayBlock");
  arrowDown2.classList.toggle("displayNone");
  arrowUp2.classList.toggle("displayInline");
});
