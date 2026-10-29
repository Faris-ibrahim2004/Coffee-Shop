let navLinks = document.querySelectorAll(".nav-menu .nav-link");
let menuOpenButton = document.querySelector("#menu-open-btn");
let menuCloseButton = document.querySelector("#menu-close-btn");

menuOpenButton.addEventListener("click", () => {
  document.body.classList.toggle("show-mobile-menu");
});
// menuCloseButton.onclick = () => {
//   document.body.classList.toggle("show-mobile-menu");
// };
menuCloseButton.addEventListener("click", () => menuOpenButton.click());

navLinks.forEach((link) => {
  link.addEventListener("click", () => menuOpenButton.click());
});

// Initialize Swiper
const swiper = new Swiper(".slider-wrapper", {
  loop: true,
  grabCursor: true,
  spaceBetween: 25,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // Responsive Breakpoints
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
// let navMenu = document.querySelector(".nav-menu");
// menuOpenButton.addEventListener("click", () => {
//   navMenu.classList.toggle("show-mobile-menu");
// });
