var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.rect(20, 40, 100, 50);
ctx.fillstyle = "#FF0000";
ctx.fill();
ctxclosePath();

ctx.beginPath();
ctx.arc(240, 160, 20, 0, Math.P1*2, false);
ctx.fillstyle = "green";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.ctx.rect(160, 10, 100, 40);
ctx.strokeStyle = "rgba(0, 0, 255, 0.5)";
ctx.stroke();
ctx.closePath();