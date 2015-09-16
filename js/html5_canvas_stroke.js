var c = document.getElementById('myCanvas');
var ctx = c.getContext('2d');
ctx.beginPath();
ctx.moveTo(20,20);
ctx.lineTo(20,70);
ctx.lineTo(70,80);
ctx.strokeStyle='green';
ctx.stroke();

ctx.beginPath();
ctx.moveTo(30,30);
ctx.lineTo(40,80);
ctx.lineTo(80,90);
ctx.strokeStyle = "red";
ctx.stroke();

var d = document.getElementById('myCanvas2');
var dtx = d.getContext('2d');
dtx.beginPath();
dtx.moveTo(20,120);
dtx.lineTo(20,100);
dtx.lineTo(70,100);
dtx.lineTo(120,30);
dtx.closePath();
dtx.stroke();
dtx.fillStyle="green";
dtx.fill();

var clip = document.getElementById('myCanvas3');
var cltx = clip.getContext('2d');

cltx.save();
cltx.beginPath();
cltx.rect(50,20,200,100);
cltx.stroke();
cltx.clip();

cltx.fillStyle='green';
cltx.fillRect(0,0,150,100)
cltx.closePath();
cltx.restore();

cltx.save();
cltx.beginPath();
cltx.rect(20,20,100,100);
cltx.stroke();
cltx.clip();
cltx.fillStyle='red';
cltx.rect(0,0,120,100)
cltx.fill();
cltx.stroke();
cltx.closePath();
cltx.restore();


var rc = document.getElementById('myCanvas4');
var arcx = rc.getContext('2d');
arcx.beginPath();
arcx.arc(100,75,50,0,2*Math.PI);
arcx.stroke();
arcx.filllStyle='#74B151';
arcx.fill();