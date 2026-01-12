/*
Note: For More details on OLW Carousel visit - https://owlcarousel2.github.io/OwlCarousel2/
*/

const customResponsiveClass_Gallery = {
  0: {
    items: 2,
  },
  445: {
    items: 3,
  },
  768: {
    items: 4,
  },
  1024: {
    items: 5,
  },
};
const customResponsiveClass_Review = {
  0: {
    items: 1,
  },
  375: {
    items: 2,
  },
  768: {
    items: 2,
  },
  1024: {
    items: 3,
  },
  1440: {
    items: 4,
  },
};

function autoPlayGallery() {
  // ! Code for Gallery of Spiritual Insights
  var owl = $(".owl-carousel1");
  owl.owlCarousel({
    items: 5,
    loop: true,
    margin: 10,
    nav: false,
    // autoWidth: true,
    autoplay: true,
    autoplayTimeout: 1250,
    autoplayHoverPause: true,
    responsiveClass: true,
    responsive: {
      ...customResponsiveClass_Gallery,
    },
  });
}
function autoPlayReview() {
  // ! code for Review
  var owl2 = $(".owl-carousel2");
  owl2.owlCarousel({
    items: 4,
    loop: true,
    margin: 20,
    nav: false,
    // autoWidth: true,
    autoplay: true,
    autoplayTimeout: 4550,
    autoplayHoverPause: true,
    responsiveClass: true,
    responsive: {
      ...customResponsiveClass_Review,
    },
  });
}

export default { autoPlayGallery, autoPlayReview };
