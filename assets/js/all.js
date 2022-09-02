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
  $('#search__mobile--open').on('click', function () {
    $('.search__mobile__modal').addClass('open');
  });
  $('#search__mobile--close').on('click', function () {
    $('.search__mobile__modal').removeClass('open');
  });
  $(window).on('resize', function () {
    var msnry = Masonry.data($('.masonryRow')[0]);
    $('.masonryRow').imagesLoaded(function () {
      msnry.layout(); // 渲染整體畫面
    });
  }); //使拉伸畫面時瀑布流不會卡住

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
  // 市價三角形折疊 start

  $('.triangle-value').on('click', function (e) {
    $(this).toggleClass('open');
    $(this).parent().find('#icon-plus').toggleClass('open');
    $(this).parent().find('#icon-minus').toggleClass('open');
  }); //市價三角形折疊 end
}); // 首頁輪播start

var indexSwiper = new Swiper('.indexSwiper', {
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
}); // 首頁輪播end

var artSwiper = new Swiper('.artSwiper', {
  // Optional parameters
  loop: true,
  slidesPerView: 2,
  spaceBetween: 24,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 640px
    992: {
      slidesPerView: 4,
      spaceBetween: 24
    }
  }
}); // 首頁輪播end
// 藝術品介紹輪播 start
// var artSwiper = new Swiper(".artSwiper", {
//   slidesPerView: 4,
//   spaceBetween: 30,
//   breakpoints: {
//     // when window width is >= 320px
//     320: {
//       slidesPerView: 2,
//       spaceBetween: 20
//     },
//   }
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
// });
//# sourceMappingURL=all.js.map
