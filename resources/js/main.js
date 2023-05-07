const handleSlideMove = (slideNumber) => {
  $("ul.navbar-nav li a").removeClass("active");

  if ($(".navbar-collapse").hasClass("show")) {
    $(".navbar-toggler").click();
  }

  swiper.slideTo(slideNumber);
};

const navColorChange = (currentSlide) => {
  $("ul.navbar-nav li a").removeClass("active");

  if (currentSlide == 0) {
    $("#nav").removeClass("navbar-scroll");
  } else {
    $("#nav").addClass("navbar-scroll");
    $("ul.navbar-nav li")
      .eq(currentSlide - 1)
      .children("a")
      .addClass("active");
  }
};

const swiper = new Swiper(".swiper-container", {
  speed: 800,
  direction: "vertical",
  mousewheel: true,
  keyboard: true,
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
