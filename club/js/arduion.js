$(document).ready(function (){
    var num=1;
    function right(){
        $(".slide li").eq(num).animate({left:"-1280px"},0);
        $(".slide li").eq(num-1).animate({left:"1280px"},500);
        $(".slide li").eq(num).animate({left:"0px"},500);
        num++;
        if(num>=4){
            num=0;
        }
    }
    setInterval(right,2000);
})