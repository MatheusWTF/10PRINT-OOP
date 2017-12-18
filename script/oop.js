function Line(firstx, firsty, secondx, secondy){
  ctx.beginPath();
  ctx.moveTo(firstx, firsty);
  ctx.lineTo(secondx, secondy);
  ctx.stroke();
}

function Background(r='255', g='255', b='255'){
  ctx.rect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
  ctx.fill();
}