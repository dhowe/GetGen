var angle = 30;
var bsize = .67;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(245);
  translate(width / 2, height);
  branch(120);
}

function branch(len) {

  stroke(0);
  strokeWeight(len/10);
  line(0, 0, 0, -len);
  translate(0, -len);
  
  if (len > 8) {
    push();
    rotate(radians(angle));
    branch(len * .67);
    pop();

    push();
    rotate(radians(-angle));
    branch(len * .67);
    pop();
  }
  else {
    noStroke();
    fill(0,200,0, 128);
    ellipse(0,0,10,10);
  }
}
