import {treinersSliderSettings, reviewsSliderSettings, initSlider} from './utils/swiper-settings';

const mobileVersion = window.matchMedia('(max-width: 767px)');
const tabletVersion = window.matchMedia('(max-width: 1099px)');
const videoContainer = document.querySelector('.video');
const video = videoContainer.querySelector('iframe');
const videoButton = document.querySelector('.video__button-play');
const introDescription = document.querySelector('.intro__description');
const choicePrices = document.querySelectorAll('.choice-subscription__price');
const choiceButtons = document.querySelectorAll('.choice-month__button');
const pricesBlocks = document.querySelectorAll('.choice-subscription__prices');

const trainersSliderBlock = document.querySelector('.fitness-trainers__trainers');
const reviewsSliderBlock = document.querySelector('.reviews__wrapper-reviews');

window.addEventListener('DOMContentLoaded', () => {
  pricesBlocks.forEach((pricesBlock) => pricesBlock.classList.remove('is-nojs'));
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
