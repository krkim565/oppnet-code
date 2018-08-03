function setup() {
    createCanvas(500, 600);
}

function draw() {
    var xPos;
    var YPos = 20;
    var color = true
    var c1 = 'black'
    var c2 = 'white'

    for (var i = 0; i < 8; i++) {
        xPos = 0;
        for (var r = 0; r < 8; r++) {
              if (r % 2 === 0) {
                  fill(c1)
                  rect(xPos, YPos, 55, 55);
              } else {
                  fill(c2)
                  rect(xPos, YPos, 55, 55);
              }
            // if (color === true) {
            //     fill('black')
            //     rect(xPos, YPos, 55, 55);
            // }
            // else {
            //     fill('white')
            //     rect(xPos, YPos, 55, 55);
            // }

            xPos += 50;
            // color = !color;
        }
        if (i % 2 === 0) {
            c1 = 'white'
            c2 = 'black'
        } else {
            c1 = 'black'
            c2 = 'white'
        }
        // color = !color
        YPos += 50;
    }
}
