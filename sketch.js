let canvasHeight = 400
let canvasWidth = 400

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  rectMode(CENTER);
  angleMode(DEGREES);
}

function draw() {
  background(125);

  push();
  fill("white")
  translate(200,200);
  rotate(45);
  rect(0,0,40,40);
  pop();
  fill("black");
  rect(200,200,20,20)
}
