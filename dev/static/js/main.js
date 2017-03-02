;
// Начинать писать отсюда!!!!

$(document).ready(function(){
  $('.bxslider').bxSlider({
  	minSlides: 1,
  	maxSlides: 3,
  	hideControlOnEnd: true,
  	infiniteLoop: false,
  	pager: false,
  	slideWidth: 360,
  	slideMargin: 30,
  	nextText: '',
  	prevText: '',
  	nextSelector: '.featured-slider_next',
  	prevSelector: '.featured-slider_prev'
  });
});

$(document).ready(function(){
  $('.clients-bxslider').bxSlider({
  	minSlides: 1,
  	maxSlides: 6,
  	hideControlOnEnd: true,
  	infiniteLoop: false,
  	pager: false,
  	slideWidth: 100,
  	slideMargin: 60,
  	nextText: '',
  	prevText: '',
  	nextSelector: '.clients-slider_next',
  	prevSelector: '.clients-slider_prev'
  });

  $(document).ready(function(){
  $('.porfolio-bxslider').bxSlider({
    minSlides: 1,
    maxSlides: 4,
    slideWidth: 400,
    slideMargin: 0,
    controls: false
  });
});
});