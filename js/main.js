$(document).ready(function(){
  // TOP NAV SEARCH FORM
  $(".search__btn").click(function() {
    $(".search").addClass("search_open");
  });
  $(".search__submit-btn").click(function() {
    $(".search").removeClass("search_open");
  });
  // HERO SECTIION SLIDER
  $('.hero__slider').slick({
    dots: true,
    arrows: false,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          fade: false,
          dots: false
        }
      }
    ]
  });
  // NEW CARPETS SECTION SLIDER
  $('.new__list').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  });
  // SHOPS SECTION SLIDER
  $('.shops__slider').slick({
    dots: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          fade: false,
          dots: false
        }
      }
    ]
  });

});
