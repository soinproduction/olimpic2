jQuery(function ($) {


// -----------------  Гамбургер  --------------------
$(".mobile-burger").click(function (event) {
  $(".mobile-menu").toggleClass("mobile-menu--active");
  $(".mobile-burger").toggleClass("mobile-burger--active");
  $("body").toggleClass("body--fixed");
});


$('select').niceSelect();








});





