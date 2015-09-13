var c=document.getElementById("myCanvas");
var ctx=c.getContext("2d");

ctx.font="18px Verdana";
// Create gradient
var gradient=ctx.createLinearGradient(0,0,c.width,0);
gradient.addColorStop("0","magenta");
gradient.addColorStop("0.5","blue");
gradient.addColorStop("1.0","red");
// Fill with gradient
ctx.strokeStyle=gradient;
ctx.strokeText("www.caicai.me",10,50);