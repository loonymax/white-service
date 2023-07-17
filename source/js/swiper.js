const swiper = new Swiper('.swiper', {
  direction: 'horizontal',

  breakpoints: {
    375: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      initialSlide: 6,
      autoHeight: true,
    },
    768: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 30,
      initialSlide: 1,
    },
    1920: {
      slidesPerView: 4,
      slidesPerGroup: 4,
      spaceBetween: 23,
    },
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
