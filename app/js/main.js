$(function(){

  $('.js-range-slider').ionRangeSlider({
    type: "double",
    min: 0,
    max: 1000,
    from: 0,
    to: 600,
    prefix: "$"
  });
  

  $(".rate-star").rateYo({
  rating: 5,
  starWidth: "12px",
  readOnly: true
  });
  

  $('.icon-th-list').on('click', function(){
    $('.product__item').addClass('list');
    $('.icon-th-list').addClass('active');
    $('.icon-th-large').removeClass('active')
  });
  

  $('.icon-th-large').on('click', function(){
    $('.product__item').removeClass('list');
    $('.icon-th-large').addClass('active');
    $('.icon-th-list').removeClass('active')
  });
  

  $('.menu__btn').on('click', function(){
    $('.menu__list').slideToggle();
  });


  $('.header__btn-menu').on('click', function(){
    $('.header__box').toggleClass('active');
  });

  
  $('.product-slider__inner').slick({
      dots: true,
      slidesToShow: 4,
      slidesToScroll: 4,
      arrows: false
  });

       
  var mixer = mixitup('.products__inner-box');

});
