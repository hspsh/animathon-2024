let mat = new ProjectionMatrix();

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  mat.edit = true;
}

function keyPressed() {
  // Toggle the value of mat.edit when the spacebar is pressed
  if (key === ' ') {
    mat.edit = !mat.edit;
  }
}

function draw() {
  // Set background to black
  background(0);
  
  // Apply the transform/visibility of ProjectionMatrix()
  mat.apply();

  fill(80);
  stroke(150);
  strokeWeight(2);
  rect(400, 200, 200, 200);
  rect(600, 200, 200, 200);
  rect(800, 200, 200, 200);
  rect(800, 400, 200, 200);
  rect(600, 600, 200, 200);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(0); // Ensure the background is redrawn to cover the entire canvas
}
