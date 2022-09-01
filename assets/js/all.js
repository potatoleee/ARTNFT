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
  $('.masonryRow').imagesLoaded().progress(function () {
    $('.masonryRow').masonry(); // 渲染整體畫面
  });
  $('.masonryTab').on('shown.bs.tab', function () {
    var msnry = Masonry.data($('.masonryRow')[0]);
    $('.masonryRow').imagesLoaded(function () {
      msnry.layout(); // 渲染整體畫面
    });
  }); //篩選欄位 擴增icon start

  $('.fa-angle-up').on('click', function () {
    $(this).toggleClass('rotate-180');
  }); //篩選欄位 擴增icon end
});
var swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,
  slidesPerView: 1,
  spaceBetween: 0,
  centeredSlides: true,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar'
  },
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 640px
    992: {
      slidesPerView: 3,
      spaceBetween: 0
    }
  }
});
//# sourceMappingURL=all.js.map
