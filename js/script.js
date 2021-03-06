$(function () {
  const updateProgress = function () {
    let progressPath = $('#scrollTop').get(0);
    let pathLength = progressPath.getTotalLength();
    /* 308 */ let scroll = $(window).scrollTop();
    let height = $(document).height() - $(window).height();
    let progress = pathLength - (scroll * pathLength) / height;
    $('#scrollTop').css('strokeDashoffset', progress);
  };
  const toggleClass = function () {
    $('.rn-progress-parent').toggleClass('rn-backto-top-active ', this.scrollY > 0);
  };
  $(window).scroll(function () {
    toggleClass();
    updateProgress();
  });
  $('.hamburger__menu').on('click', function (e) {
    e.preventDefault();
    $('.menu__phone').addClass('open');
  });
  $('.menu__phone__dropdown > a').click(function (e) {
    e.preventDefault();
    $(this).siblings('.menu__phone__submenu').toggleClass('active').slideToggle('400');
    $(this).toggleClass('open');
  });
  $('.menu__phone__close').on('click', function (e) {
    e.preventDefault();
    $('.menu__phone').removeClass('open');
    $('.menu__phone .menu__phone__dropdown > a')
      .removeClass('open')
      .siblings('.menu__phone__submenu')
      .removeClass('active')
      .slideUp('400');
  });
});
