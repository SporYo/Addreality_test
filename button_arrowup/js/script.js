$(document).ready(function(){
     
    $(function (){
        $(".btn").hide();
    
        $(window).scroll(function (){
            if ($(this).scrollTop() > 1000){
                $(".btn").fadeIn();
            } else{
                $(".btn").fadeOut();
            }
        });
    
        $("button").click(function (){
            $("body,html").animate({
                scrollTop:0
            }, 800);
        });
    });
 });