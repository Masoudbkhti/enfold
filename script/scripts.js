const header = document.getElementById("mymenu");
const sticky = header.offsetHeight;
const logoBlack = document.querySelector(".logo--black");
const logoWhite = document.querySelector(".logo--white");
const bars = document.querySelectorAll(".bar");
const socialIcon = document.querySelectorAll(".social-media__link ");
const bar1 = document.querySelector(".bar1");
const bar2 = document.querySelector(".bar2");
const bar3 = document.querySelector(".bar3");
var overlay = document.querySelector(".overlay");
const mq = window.matchMedia("(min-width: 990px)");
const side = document.querySelectorAll(".sidebar-item");
var section1 = document.querySelector(".section-DJENFOLD");
var open = false;
function openSideBar() {
  if (!open) {
    bar1.classList.add("change");
    bar2.style.opacity = "0";
    bar3.classList.add("change");
    overlay.style.display = "flex";
    open = true;
  } else {
    bar2.style.opacity = "1";
    bar1.classList.remove("change");
    bar3.classList.remove("change");
    overlay.style.display = "none";
    open = false;
  }
}
window.onscroll = function () {
  menuSticky();
};
function menuSticky() {
  if (mq.matches) {
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
      logoBlack.style.display = "flex";
      logoWhite.style.display = "none";
      bars.forEach((bar) => {
        bar.classList.add("bars--sticky");
      });
      socialIcon.forEach((icon) => {
        icon.classList.add("social-media__link--sticky");
      });
    } else {
      header.classList.remove("sticky");
      logoBlack.style.display = "none";
      logoWhite.style.display = "flex";
      bars.forEach((bar) => {
        bar.classList.remove("bars--sticky");
      });
      socialIcon.forEach((icon) => {
        icon.classList.remove("social-media__link--sticky");
      });
    }
  }
}
function closeMenu() {
  bar2.style.opacity = "1";
  bar1.classList.remove("change");
  bar3.classList.remove("change");
  overlay.style.display = "none";
  open = false;
  coordination = true;
}
function changeBackgroundImage() {
  var imges = [
    "url(../assets/images/banner-dj-wide.jpg)",
    "url(../assets/images/banner-band-wide.jpg)",
  ];
  var curentIndex = 0;
  setInterval(function () {
    section1.style.backgroundImage = imges[curentIndex];
    curentIndex++;
    if (curentIndex === imges.length) {
      curentIndex = 0;
    }
  }, 8000);
}
changeBackgroundImage();

//TOURDATES ACOORDION

const accordionHeaders = document.querySelectorAll(".list-header");
const accordionContents = document.querySelectorAll(".list-content");

function toggleAccordion() {
  const accordion = this.parentElement;
  const accordionContent = accordion.querySelector(".list-content");
  accordionContent.classList.toggle("active");
  this.classList.toggle("active");
  if (accordionContent.style.display === "block") {
    accordionContent.style.display = "none";
    this.textContent = this.textContent.replace("-", "+");
  } else {
    accordionContent.style.display = "block";
    this.textContent = this.textContent.replace("+", "-");
  }
}

accordionHeaders.forEach((header) => {
  header.addEventListener("click", toggleAccordion);
});

