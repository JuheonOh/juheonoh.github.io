const handleSlideMove = (slideNumber) => {
  $("ul.navbar-nav li a").removeClass("active");

  if ($(".navbar-collapse").hasClass("show")) {
    $(".navbar-toggler").click();
  }

  swiper.slideTo(slideNumber);
};

const navColorChange = (currentSlide) => {
  if (currentSlide == 0) {
    $("#nav").removeClass("navbar-scroll");
    $("ul.navbar-nav li a").removeClass("active");
  } else {
    $("#nav").addClass("navbar-scroll");
    $("ul.navbar-nav li a").removeClass("active");
    $("ul.navbar-nav li a")
      .eq(currentSlide - 1)
      .addClass("active");
  }
};

const swiper = new Swiper(".swiper-container", {
  speed: 500,
  direction: "vertical",
  mousewheel: true,
  slidesPerView: "auto",
  on: {
    touchMove: function () {
      if (this.realIndex == 0) {
        this.allowSlidePrev = false;
      } else {
        this.allowSlidePrev = true;
      }
    },
    scroll: function () {
      if (this.realIndex == 0) {
        this.allowSlidePrev = false;
      } else {
        this.allowSlidePrev = true;
      }
    },
    slideChange: function () {
      currentSlide = this.activeIndex;
      navColorChange(currentSlide);
    },
  },
});
