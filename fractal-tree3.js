// shows animation via noise

var angle = 30;
var seed = 0;
var nk = 0;

function setup() {
  createCanvas(600, 400);
  seed = random(999999);
}

function draw() {
  randomSeed(seed);
  background(245);
  translate(width / 2, height + 50);
  branch(120);
  nk += 0.01;
}

function branch(len) {

  stroke(0, 200);
  strokeWeight(len / 10);
  line(0, 0, 0, -len);
  translate(0, -len);

  if (len > 4) {

    if (random() < .95) {
      push();
      rotate(radians(map(noise(nk), 0, 1, 20, 40)));
      branch(len * random(.6, .77));
      pop();
    }

    if (random() < .3) {
      push();
      rotate(radians(map(noise(nk+300), 0, 1, -10, 10)));
      branch(len * random(.6, .77));
      pop();
    }

    if (random() < .95) {
      push();
      rotate(radians(-map(noise(nk+100), 0, 1, 20, 40)));
      branch(len * random(.6, .77));
      pop();
    }

  } else {

    noStroke();
    fill(random(140, 240), 50, 50, 100);
    ellipse(0, 0, random(2, 5), random(10, 20));
  }
}

function mouseClicked() {
  seed = random(999999);
}
