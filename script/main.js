//Setup
window.onload = function(){
  canvas = document.getElementById('tenprint');
  ctx = canvas.getContext('2d');
  canvas.width = window.self.innerWidth;
  canvas.height = window.self.innerHeight;
  setInterval(draw, 1000/3);

  tenprint = ['tenprint array'];
  makeTenprint();
}

//If page is Resized
window.onresize = function(){
  canvas.width = window.self.innerWidth;
  canvas.height = window.self.innerHeight;
  makeTenprint();
}

//Making the array of 10PRINT
function makeTenprint(){
  let x = 0, y = 0, spc = canvas.width/50;
  for (let i = 0; i < tenprint.length; i++){
    if(x >= canvas.width){
      x = 0;
      y += spc;
      if(y >= canvas.height){
        break;
    }
  }
  tenprint[i+1] = {
    left:[x, y, x + spc, y + spc], 
    right:[x, y + spc, x + spc, y]
  };
  x +=spc;
  };
};

//Drawing on Canvas
function draw(){
  Background();
  for(let i = 1; i < tenprint.length; i++){
    let right1 = tenprint[i].right[0];
    right2 = tenprint[i].right[1],
    right3 = tenprint[i].right[2],
    right4 = tenprint[i].right[3];

    let left1 = tenprint[i].left[0];
    left2 = tenprint[i].left[1],
    left3 = tenprint[i].left[2],
    left4 = tenprint[i].left[3];

    if(Math.random() > 0.5){
      Line(right1, right2, right3, right4);
    }else{
      Line(left1, left2, left3, left4);
    };
  };
}