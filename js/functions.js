$('.slideshow__slider').slick({
  arrows: false
})

$('.left').click(function(){
  $('.slideshow__slider').slick('slickPrev');
})

$('.right').click(function(){
  $('.slideshow__slider').slick('slickNext');
})


//Go to top btn start
// mybutton = document.getElementById("myBtn");

// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     mybutton.style.display = "block";
//   } else {
//     mybutton.style.display = "none";
//   }
// }

// function topFunction() {
//   document.body.scrollTop = 0; 
//   document.documentElement.scrollTop = 0; 
// }
//Go to top btn end
