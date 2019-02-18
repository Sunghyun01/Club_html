$(document).ready(function(){
  var slide=$(".slide>li");
  var i=1;
  setInterval(function(){
      slide.eq(i).css("left","1000px");
      slide.eq(i-1).animate({"left":"-1000px"},500);
      slide.eq(i).animate({"left":"0"},500)
      if(i<3)
          i++;
      else
          i=0;
  },1500);
})
