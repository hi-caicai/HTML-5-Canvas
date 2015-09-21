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



var quaa = document.getElementById('myCanvas5');
var atx = quaa.getContext('2d');
atx.beginPath();
atx.moveTo(0,20); // 开始点
atx.quadraticCurveTo(100,100,200,20);//控制点，和结束点
atx.closePath();//关闭路径
atx.stroke();//绘制


var bezier = document.getElementById('myCanvas6');
var betx = bezier.getContext('2d');
betx.beginPath();
betx.moveTo(20,100);
betx.bezierCurveTo(80,100,100,20,200,80);//前两个位控制点，最后位结束点
betx.stroke();


var arc = document.getElementById('myCanvas7');
var artx = arc.getContext('2d');
artx.beginPath();
artx.beginPath();
artx.moveTo(20,20);//起始点
artx.lineTo(100,20);//创建水平线
artx.arcTo(150,20,150,70,50)//创建弧度
artx.lineTo(150,120);
artx.stroke();

// 这个感觉有错啊


var sca =document.getElementById('myCanvas8');
var sc = sca.getContext('2d');
sc.save();//保存这次的状态
sc.beginPath();//开始一条绘制路径//事实证明，这两句在这里等于没有用
sc.strokeRect(5,5,25,15);
sc.scale(2,2);
sc.strokeRect(5,5,25,15);
sc.closePath();//闭合路径//事实证明，这两句在这里等于没有用
sc.restore();//取出之前的状态
sc.strokeRect(20,20,45,45);//从新绘制
sc.scale(2,2);
sc.strokeRect(20,20,45,45);

var sca =document.getElementById('myCanvas9');
var sc = sca.getContext('2d');

sc.beginPath();//开始一条绘制路径//事实证明，这两句在这里等于没有用
sc.strokeRect(5,5,25,15);
sc.save();//保存这次的状态
sc.scale(2,2);
sc.strokeRect(5,5,25,15);
sc.closePath();//闭合路径//事实证明，这两句在这里等于没有用
sc.restore();//取出之前的状态
sc.scale(3,3);
sc.strokeRect(5,5,25,15);



