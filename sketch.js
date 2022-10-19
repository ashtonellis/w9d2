let canvasWidth = 400;
const canvasHeight = 400;
let x = 0;

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  rectMode(CENTER);
}

function draw() {
  background(125);
  if (x > 100 || x < 200) {
    rect(x,x,50,50);
  }
  x++;
  // rect(x*2,x*2,25,25);
}
