let canvasWidth = 400;
const canvasHeight = 400;
let fillColor = "black";

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  rectMode(CENTER);
}

function draw() {
  background(125);
  fill(fillColor);
    rect(200,200,40,40);
  
}
 
function keyPressed() {
  if (fillColor == "black") {
    fillColor = "white";
  } else {
    fillColor = "black";
  }
}
