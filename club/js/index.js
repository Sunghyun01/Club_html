$(document).ready(function(){
	$('#cssmenu li.active').addClass('open').children('ul').show();
        $('#cssmenu li.has-sub>a').on('click', function(){
            $(this).removeAttr('href');
            var element = $(this).parent('li');
            if(element.hasClass('open')) {
                element.removeClass('open');
                element.find('li').removeClass('open');
                element.find('ul').slideUp(200);
            }else{
                element.addClass('open');
                element.children('ul').slideDown(200);
                element.siblings('li').children('ul').slideUp(200);
                element.siblings('li').removeClass('open');
                element.siblings('li').find('li').removeClass('open');
                element.siblings('li').find('ul').slideUp(200);
            }
        });
        $("#pic1").click(function(){
            $(".pop1").fadeIn();
        });
        $(".del").click(function(){
            $(".pop1").fadeOut();
        });
        $("#pic2").click(function(){
            $(".pop2").fadeIn();
        });
        $(".del").click(function(){
            $(".pop2").fadeOut();
        });
        $("#pic3").click(function(){
            $(".pop3").fadeIn();
        });
        $(".del").click(function(){
            $(".pop3").fadeOut();
        });
    /*메인*/
    $("#main_text").hide();
    $("#sub_text").hide();
    $("#main_text").hide(function (){
        $("#main_text").fadeIn(2000); 
    });
    $("#sub_text").hide(function (){
        $("#sub_text").fadeIn(5000); 
    });
    
});