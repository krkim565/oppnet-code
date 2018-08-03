var dvd
var xPos
var yPos
var xspeed = 5
var yspeed = 5
var bgColor = 'dodgerblue'
function preload() {
  dvd = loadImage('dvdlogo.jpg')
  xPos = 0
  yPos = 0
}

function setup() {
  createCanvas(windowWidth, windowHeight)
  
}

function draw() {
  background(bgColor)
  image(dvd, xPos, yPos, 100, 100)
  xPos = xPos + xspeed
  yPos = yPos - yspeed
  
  if(yPos < 0){
    yspeed = yspeed *-1
    //bgColor = 'pink'
  }
  
  if(xPos > windowWidth-100){
    xspeed = xspeed *-1
    //bgColor = 'orange'
  }
  if(yPos > windowHeight-100)
  {
    yspeed = yspeed *-1
    //bgColor = 'dodgerblue'
  }
  if (xPos < 0){
    xspeed = xspeed * -1
    //bgColor = 'red'
  }
  if(xPos===0){
    if(yPos===0){
      bgColor = 'pink'
    }
  }
  // if(xPos===windowHeight){
  //   if(yPos )
  // }
}
