window.onload=function() {
var drawingCanvas = document.getElementById("drawing")

var ctx = drawingCanvas.getContext('2d')

drawingCanvas.addEventListener('mousemove', function onMouseover(e){
	var mx = e.clientX - 8;
	var my = e.clientY - 8;
	ctx.fillStyle = "#000";
	ctx.font = 'bold 22px verdana';
	ctx.fillText(".", mx, my,1000);
}, 0)

}
