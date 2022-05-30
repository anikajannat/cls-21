$(function () {
  "use strict";

  $(window).on("load", function () {
    $("#preloader").fadeOut(500);
  });

  $(window).on("scroll", function () {
    var scrollSize = $(window).scrollTop();

    if (scrollSize > 500) {
      $("#backToTop").fadeIn(1000);
    } else {
      $("#backToTop").fadeOut(1000);
    }

    if (scrollSize > 60) {
      $("#header").addClass("menu_fixed");
    } else {
      $("#header").removeClass("menu_fixed");
    }
  });

  $("#backToTop").on("click", function () {
    $("html, body").animate(
      {
        scrollTop: 500,
      },
      1000
    );
  });

  $(".achievement_counter").counterUp();

  $(".count_down").countdown("2022/06/30", function (event) {
    var $this = $(this).html(
      event.strftime(
        "" +
          "<div class='count_down_item'><span>%D</span><span>days</span></div>" +
          "<div class='count_down_item'><span>%H</span><span>hr</span></div>" +
          "<div class='count_down_item'><span>%M</span><span>min</span></div>" +
          "<div class='count_down_item'><span>%S</span><span>sec</span></div>"
      )
    );
  });

  $('.gallery_filter_menu li').on('click', function () {
    $(this).addClass('active')
    $(this).siblings().removeClass('active')

  })

  $('.gallery_filter').filterizr();



  $('.banner_slider').slick({
    prevArrow:'<img src="../images/cat.jpeg" class="fas fa-arrow-left banner_slider_arrow"></i>',
    nextArrow: '<img src="../images/cat.jpeg" class="fas fa-arrow-right banner_slider_arrow"></img>',
    dots: true,
    dotsClass:'banner_slider_dots'
  });


});
var typed = new Typed('.type', {
  strings: ['Web Designer','PHP','Graphics Designer'],
  typeSpeed:100,
  loop:true
});


new VenoBox({
   spinner: 'swing',
   spinColor:'red'
});