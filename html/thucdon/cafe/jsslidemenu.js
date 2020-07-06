$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: true,
    focusOnSelect: true
  });
 
 //  $('a[data-slide]').click(function(e) {
 //    e.preventDefault();
 //    var slideno = $(this).data('slide');
 //    $('.slider-nav').slick('slickGoTo', slideno - 1);
 //  });
 
 
 jQuery(document).ready(function($){ 	
     if($(".btn-top").length > 0){
         $(window).scroll(function () {
             var e = $(window).scrollTop();
             if (e > 300) {
                 $(".btn-top").show()
             } else {
                 $(".btn-top").hide()
             }
         });
         $(".btn-top").click(function () {
             $('body,html').animate({
                 scrollTop: 0
             })
         })
     }		
 });