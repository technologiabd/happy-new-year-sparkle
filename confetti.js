const canvas = document.getElementById("confetti");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext("2d");
let confetti = [];

for(let i=0; i<100; i++){
  confetti.push({
    x: Math.random()*canvas.width,
    y: Math.random()*canvas.height,
    r: Math.random()*6+4,
    d: Math.random()*100
  });
}

function draw(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  for(let i=0; i<confetti.length; i++){
    let c = confetti[i];
    ctx.beginPath();
    ctx.arc(c.x, c.y, c.r, 0, Math.PI*2, false);
    ctx.fillStyle = "#ffef3f";
    ctx.fill();
  }
  update();
}

function update(){
  for(let i=0; i<confetti.length; i++){
    let c = confetti[i];
    c.y += Math.cos(c.d) + 1 + c.r/2;
    c.x += Math.sin(c.d) * 2;
    if(c.y > canvas.height){ c.y = -10; c.x = Math.random()*canvas.width; }
  }
}

setInterval(draw, 20);
    
