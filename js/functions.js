$('.slideshow__slider').slick({
  arrows: false
})

$('.left').click(function(){
  $('.slideshow__slider').slick('slickPrev');
})

$('.right').click(function(){
  $('.slideshow__slider').slick('slickNext');
})