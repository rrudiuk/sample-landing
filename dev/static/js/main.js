;
// Начинать писать отсюда!!!!

$(document).ready(function(){
  
  $('.header-nav_toggle').click(function() {
    $('.main-nav').toggleClass('active');
  });

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

  $('.latest-blog_slider').bxSlider({
    minSlides: 1,
    maxSlides: 3,
    hideControlOnEnd: true,
    infiniteLoop: false,
    pager: false,
    slideWidth: 270,
    slideMargin: 160,
    nextText: '',
    prevText: '',
    nextSelector: '.latest-blog_next',
    prevSelector: '.latest-blog_prev'
  });

  $('.porfolio-bxslider').bxSlider({
    minSlides: 1,
    maxSlides: 4,
    slideWidth: 400,
    slideMargin: 0,
    controls: false
  });
  //var mixer = mixitup('.porfolio-bxslider');
  /*$('.porfolio-menu_item').click(function() {
    $('.porfolio-bxslider').css({
      //transform: 'translate3d(0px, 0px, 0px)',
      transform: 'translateX(0px)',
      left: '0'
    });
  });  */

  $('.portfolio-menu_item').click(function() {
    var a = $(this).attr('data-filter');
    console.log(a);
    $('.mix').hide();
    if ($('li').hasClass(a)) {
      $(this).show()
    };
    //$('.mix').hasClass(a).css('display', 'block');

    //$(a).css('display', 'block');
  });
});