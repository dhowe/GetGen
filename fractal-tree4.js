// with organic lines

function setup() {

  createCanvas(700, 500);
  background(245);
  translate(width / 2, height + 50);
  branch(150);
}

function branch(len) {

  if (len > 2) {
    stroke(0);
    oline(0, 0, 0, -len, len / random(9, 11)); // an organic line
    translate(0, -len); // move to the end of it

    push();
    rotate(radians(random(20, 40))); // rotate clockwise
    branch(len * random(0.5, 0.8)); // draw shorter *branch*
    pop();

    if (random() < 0.2) { // once in a while
      push();
      rotate(radians(random(3, 13))); // rotate clockwise
      branch(len * random(0.5, 0.8)); // draw shorter *branch*
      pop();
    }

    if (random() < 0.2) { // once in a while
      push();
      rotate(radians(random(-13, -3))); // rotate anticlockwise
      branch(len * random(0.5, 0.8)); // draw a shorter *branch*
      pop();
    }

    push();
    rotate(radians(random(-20, -40))); // rotate anticlockwise
    branch(len * random(0.5, 0.8)); // draw a shorter *branch*
    pop();

  } else {

    noStroke();
    fill(random(100, 200), 0, 0, 100);
    ellipse(0, 0, random(2, 5), random(10, 15));
  }
}

function oline(x1, y1, x2, y2, weight) {

  strokeCap(ROUND);
  strokeWeight(weight);
  var twi = 1 + (weight / 24.0);
  var xd = x2 - x1, yd = y2 - y1;
  var dist = sqrt(xd * xd + yd * yd);
  var sects = ceil(dist / 10.0);
  var tw2 = new Array(sects + 1).fill(0.0);
  for (var i = 0; i < sects; i++) {
    var tw = random(-twi, twi);
    var tx1 = x1 + ((xd / sects) * (i)) + tw2[i];
    var tx2 = x1 + ((xd / sects) * (i + 1)) + tw;
    var ty1 = y1 + ((yd / sects) * (i));
    var ty2 = y1 + ((yd / sects) * (i + 1));
    if (i == sects - 1) {
      tx2 = x2;
      ty2 = y2;
    }
    line(tx1, ty1, tx2, ty2);
    tw2[i + 1] = tw;
  }
}
