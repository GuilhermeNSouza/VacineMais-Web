$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 120) {
          $(".change-color-scroll").css("background" , "#1C3D32");
          $(".change-color-scroll").removeClass("bg-glassmorphim");
        }
  
        else{
            $(".change-color-scroll").css("background" , "transparent");
            $(".change-color-scroll").addClass("bg-glassmorphim"); 	
        }
    })
  })