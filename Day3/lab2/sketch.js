function setup() {
  createCanvas(640, 480);
  background(255, 204, 0);
}

function draw() {
    fill(200, 0, 0);
    ellipse(150, 150, 160, 160);

    fill(150, 120, 0)
    rect(145, 40, 10, 30);

    fill(0, 225, 0);
    quad(145, 70, 120, 60, 110, 45, 125, 50);
    
    noStroke();
    fill(255, 204, 0);
    ellipse(220, 120, 60, 60);
    
    noStroke();
    fill(51, 51, 51, 6);
    ellipse(120, 210, 150, 50);
}