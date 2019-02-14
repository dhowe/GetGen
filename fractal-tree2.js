var angle = 30;
var bsize = .67;
var seed = 0;

function setup() {
  createCanvas(400, 400);
  seed = random(999999);
}

function draw() {
  randomSeed(seed);
  background(245);
  translate(width / 2, height + 50);
  branch(120);
}

function branch(len) {

  stroke(0);
  strokeWeight(len / 10);
  line(0, 0, 0, -len);
  translate(0, -len);

  if (len > 4) {
    push();
    rotate(radians(random(20, 40)));
    branch(len * random(.6, .77));
    pop();

    if (random() < .3) {
      push();
      rotate(radians(random(-20, 10)));
      branch(len *random(.6, .77));
      pop();
    }

    push();
    rotate(radians(-random(20, 40)));
    branch(len * random(.6, .77));
    pop();

  } else {

    noStroke();
    fill(50, random(140, 240), 50, 100);
    ellipse(0, 0, random(2, 5), random(10, 20));
  }
}

function mouseClicked() {
  seed = random(999999);
}
