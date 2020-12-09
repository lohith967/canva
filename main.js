canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");
var mouseEvent="empty";
var lastx, lasty;
color="black";
width=8;
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    mouseEvent="mouseDown";
}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
    mouseEvent="mouseUP";
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
    mouseEvent="mouseleave";
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
    currentx = e.clientX - canvas.offsetLeft;
    currenty = e.clientY - canvas.offsetTop;
    if(mouseEvent=="mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width;
        console.log("last position of x and y coordinates=");
        console.log("x= "+lastx+"y= "+lasty);
        ctx.moveTo(lastx,lasty);
        console.log("current position of x and y coordinates=");
    console.log("x= "+currentx+"y= "+currenty);
ctx.lineTo(currentx,currenty);
ctx.stroke();
    }
    lastx=currentx;
    lasty=currenty;
}