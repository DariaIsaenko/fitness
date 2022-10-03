const treinersSliderSettings = {
  speed: 1000,
  loop: true,
  observer: true,
  navigation: {
    nextEl: '.fitness-trainers__button--next',
    prevEl: '.fitness-trainers__button--prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 'auto',
      initialSlide: 2,
    },
    768: {
      slidesPerView: 'auto',
      initialSlide: 2,
    },
    1200: {
      slidesPerView: 'auto',
      initialSlide: 0,
    },
  },
};

const reviewsSliderSettings = {
  speed: 1000,
  initialSlide: 0,
  slidesPerView: 'auto',
  spaceBetween: 30,
  navigation: {
    nextEl: '.review__button--next',
    prevEl: '.review__button--prev',
  },
};

const initSlider = (el, settings) => {
  // eslint-disable-next-line no-undef
  return new Swiper(el, settings);
};

export {
  treinersSliderSettings,
  reviewsSliderSettings,
  initSlider
};
