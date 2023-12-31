const baba = document.querySelectorAll(".header-mob__nav ul li h4");
baba.forEach((drop) => {
  drop.addEventListener("click", () => {
    drop.nextElementSibling.classList.toggle("open");
    drop.querySelector(".icon").classList.toggle("open");
  });
});

const toggleMenu = document.querySelector(".toggle__menu");
const mobileNav = document.querySelector(".header-mob__nav");
toggleMenu.addEventListener("click", () => {
  toggleMenu.classList.toggle("open");
  mobileNav.classList.toggle("open");
});

const header = document.querySelector(".header2");
window.addEventListener("scroll", () => {
  console.log(window.pageYOffset);
  if (window.pageYOffset >= 50) {
    header.classList.add("fix");
  } else {
    header.classList.remove("fix");
  }
});

const tabNav = document.querySelectorAll(".tab-nav-link");
const tabContent = document.querySelectorAll(".about__text__content");
tabNav.forEach((nav) => {
  nav.addEventListener("click", () => {
    removeActiveNav();
    nav.classList.add("active");
    const activeContent = document.querySelector(`#${nav.id}-content`);
    removeActiveContent();
    activeContent.classList.add("active");
  });
});

function removeActiveNav() {
  tabNav.forEach((nav) => {
    nav.classList.remove("active");
  });
}

function removeActiveContent() {
  tabContent.forEach((nav) => {
    nav.classList.remove("active");
  });
}

// When the user clicks on the button, scroll to the top of the document
var mybutton = document.getElementById("myBtn");

window.onscroll = function() {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}