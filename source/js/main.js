import {treinersSliderSettings, reviewsSliderSettings, initSlider} from './utils/swiper-settings';

const mobileVersion = window.matchMedia('(max-width: 767px)');
const tabletVersion = window.matchMedia('(max-width: 1099px)');
const videoContainer = document.querySelector('.video');
const video = videoContainer.querySelector('iframe');
const videoButton = document.querySelector('.video__button-play');
const introDescription = document.querySelector('.intro__description');
const choicePrices = document.querySelectorAll('.choice-subscription__price');
const choiceButtons = document.querySelectorAll('.choice-month__button');

const trainersSliderBlock = document.querySelector('.fitness-trainers__trainers');
const reviewsSliderBlock = document.querySelector('.reviews__wrapper-reviews');


window.addEventListener('DOMContentLoaded', () => {
  hiddenParagraph();
  initSlider(trainersSliderBlock, treinersSliderSettings);
  initSlider(reviewsSliderBlock, reviewsSliderSettings);
  showImgs();
});

function showImgs() {
  showImg(document.querySelector('.intro__img'));
  showImg(document.querySelector('.promo__image'));
  showImg(document.querySelector('.discounts-offer__image'));
}

function showImg(element) {
  if (mobileVersion.matches) {
    element.querySelector('img').src = element.querySelector('img').dataset.srcMobile;
    element.querySelector('img').srcset = element.querySelector('img').dataset.srcsetMobile;
    element.querySelector('source').srcset = element.querySelector('source').dataset.srcsetMobile;
  } else if (tabletVersion.matches) {
    element.querySelector('img').src = element.querySelector('img').dataset.srcTablet;
    element.querySelector('img').srcset = element.querySelector('img').dataset.srcsetTablet;
    element.querySelector('source').srcset = element.querySelector('source').dataset.srcsetTablet;
  } else {
    element.querySelector('img').src = element.querySelector('img').dataset.srcDesktop;
    element.querySelector('img').srcset = element.querySelector('img').dataset.srcsetDesktop;
    element.querySelector('source').srcset = element.querySelector('source').dataset.srcsetDesktop;
  }
}

window.addEventListener('resize', () => {
  showImgs();
  hiddenParagraph();
});

// Тренажёрный зал (спрятать абзац)

function hiddenParagraph() {
  if (tabletVersion.matches) {
    introDescription.classList.add('is-hidden');
  } else {
    introDescription.classList.remove('is-hidden');
  }
}

// Видео

function playVideo() {
  videoContainer.classList.add('is-played');
  video.src += '?autoplay=1';
}

videoButton.addEventListener('click', playVideo);

// Табы

function deactivateElement(element) {
  element.classList.remove('is-active');
}

function showPrices(element) {
  choicePrices.forEach((choicePrice) => {
    choicePrice.querySelector('p').textContent = choicePrice.querySelector('p').dataset[element];
    choicePrice.querySelector('span').textContent = choicePrice.querySelector('p').dataset[element];
  });
}

function activateElement(element) {
  if (!element.classList.contains('is-active')) {
    choiceButtons.forEach((choiceButton) => deactivateElement(choiceButton));
    element.classList.add('is-active');
    let month = element.getAttribute('data-month');
    showPrices(month);
  } else {
    deactivateElement(element);
  }
}

choiceButtons.forEach((element) => element.addEventListener('click', () => activateElement(element)));


// // ---------------------------------

// window.addEventListener('DOMContentLoaded', () => {

//   // Utils
//   // ---------------------------------

//   iosVhFix();

//   // Modules
//   // ---------------------------------

//   // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
//   // в load следует добавить скрипты, не участвующие в работе первого экрана
//   // window.addEventListener('load', () => {
//   // });
// });

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
