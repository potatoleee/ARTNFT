"use strict";

$(function () {
  $('#nav__buger').on('click', function (e) {
    $('#nav__buger').addClass('open');
    $('#nav__close').addClass('open');
    $('.nav__content__mobile__menu').addClass('open');
  });
  $('#nav__close').on('click', function () {
    $('#nav__close').removeClass('open');
    $('#nav__buger').removeClass('open');
    $('.nav__content__mobile__menu').removeClass('open');
  });
});
var swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,
  slidesPerView: 3,
  spaceBetween: 24,
  centeredSlides: true,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination'
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar'
  }
});
//# sourceMappingURL=all.js.map
