
let points = [];
let numPoints = 600;
let radius = 200;

function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);
  background(0);

 
  for (let i = 0; i < numPoints; i++) {
    let angle = random(360);
    let r = random(radius * 0.3, radius);
    points.push({ angle: angle, r: r });
  }
}

function draw() {
  background(0, 30); // trail effect

  translate(width / 2, height / 2);

  let mouseDist = dist(mouseX, mouseY, width / 2, height / 2);

  for (let i = 0; i < points.length; i++) {
    let p = points[i];

    let x = cos(p.angle) * p.r;
    let y = sin(p.angle) * p.r;

   
    if (mouseDist < radius) {
      stroke(255, 220, 0); 
      strokeWeight(2);
    } else {
      stroke(80); 
      strokeWeight(1);
    }

    point(x, y);

    p.angle += 0.2;
  }
}

