$(document).ready(function(){$(".search__btn").click(function(){$(".search").addClass("search_open")}),$(".search__submit-btn").click(function(){$(".search").removeClass("search_open")}),$(".hero__slider").slick({dots:!0,arrows:!1,speed:500,fade:!0,cssEase:"linear",autoplay:!0,autoplaySpeed:4e3,responsive:[{breakpoint:576,settings:{fade:!1,dots:!1}}]}),$(".new__list").slick({dots:!1,infinite:!0,speed:300,slidesToShow:4,slidesToScroll:4,autoplaySpeed:4e3,responsive:[{breakpoint:992,settings:{slidesToShow:3,slidesToScroll:3}},{breakpoint:700,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:576,settings:{slidesToShow:1,slidesToScroll:1}}]}),$(".shops__slider").slick({dots:!0,speed:500,fade:!0,cssEase:"linear",autoplay:!0,autoplaySpeed:2e3,responsive:[{breakpoint:576,settings:{fade:!1,dots:!1}}]})});