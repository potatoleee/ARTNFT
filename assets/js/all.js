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
//# sourceMappingURL=all.js.map
