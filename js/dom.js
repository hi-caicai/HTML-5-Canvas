//var c = document.getElementById('myCanvas');
//var ctx = c.getContext('2d');
//ctx.fillStyle = '#FFB2A4';
//ctx.fillRect(20,20,1000,1000);

var c = document.getElementById('myGradient');
var ctx = c.getContext('2d');
var my_gradient=ctx.createLinearGradient(0,0,0,170);
my_gradient.addColorStop(0.2,"#344647");
my_gradient.addColorStop(0.4,"#65ACB1");
my_gradient.addColorStop(0.6,"#69F6FF");
my_gradient.addColorStop(0.8,"#40F3FF");
my_gradient.addColorStop(1,"#0CF0FF");
ctx.fillStyle=my_gradient;
ctx.fillRect(20,20,1500,1000);

