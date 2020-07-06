$(document).ready(function(){
    $(window).scroll(function(){
      if($(window).scrollTop() > 300){
        $('.scroll i').css({
          "opacity":"1", "pointer-events":"auto"
        });
      }else{
        $('.scroll i').css({
          "opacity":"0", "pointer-events":"none"
        });
      }
    });
    $('.scroll i').click(function(){
      $('html').animate({scrollTop:0}, 800);
    });
  });