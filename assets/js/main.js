import "./bootstrap/bootstrap.bundle.min.js";
import "./owl-carousel/JQuery.min.js";

// ! Sticky Navbar Solution
const navbar = document.querySelector(".navbar");
const marqueeSection = document.querySelector(".secondary_bg");

window.addEventListener("scroll", () => {
  if (!navbar || !marqueeSection) return;

  const marqueeBottom = marqueeSection.offsetHeight;

  if (window.scrollY >= marqueeBottom) {
    navbar.style.position = "fixed";
    navbar.style.top = "0";
    navbar.style.width = "100%";
    navbar.style.zIndex = "1030";
    document.body.classList.add("navbar-fixed");
  } else {
    navbar.style.position = "relative";
    navbar.style.width = "auto";
    document.body.classList.remove("navbar-fixed");
  }
});
// ? End Sticky Navbar Solution

// ! Owl Carousel
import "./owl-carousel/owl.carousel.min.js";
import owlCarousel from "./owl-carousel/autoPlay.js";
owlCarousel.autoPlayGallery();
owlCarousel.autoPlayReview();
// ? End Owl Cariusel

// ! Enable Bootstrap ToolTip
const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);
// ? Enable Bootstrap ToolTip
