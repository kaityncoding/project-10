var sea, seaimage, ship, shipimage
function preload(){
shipimage = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png")
seaimage = loadImage("sea.png")
}

function setup(){
  createCanvas(400,400);
  ship = createSprite(200,200)
  ship.addAnimation("ship",shipimage)
  ship.scale = 0.3
}

function draw() {
  background(seaimage);
 drawSprites()
}