$(function() {

    $('#nav__buger').on('click',function(e){
      $('#nav__buger').addClass('open');
      $('#nav__close').addClass('open');
      $('.nav__content__mobile__menu').addClass('open');
    })

    $('#nav__close').on('click',function(){
      $('#nav__close').removeClass('open');
      $('#nav__buger').removeClass('open');
      $('.nav__content__mobile__menu').removeClass('open');
    })

    $('.row').imagesLoaded().progress( function() {
      $('.row').masonry(); // 渲染整體畫面
    });
  
});

const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,
  slidesPerView: 1,
    spaceBetween: 0,
	  centeredSlides: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  
  // Responsive breakpoints
  breakpoints: {
    
    // when window width is >= 640px
    992: {
      slidesPerView: 3,
      spaceBetween: 0,
    }
  }
});