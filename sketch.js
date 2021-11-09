var garden, rabbit;
var gardenImg, rabbitImg;
var appleImg;
var orangeLeafImg;

function preload() {
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  orangeLeafImg = loadImage("orangeLeaf.png");
}

function setup() {

  createCanvas(400, 400);

  // Moving background
  garden = createSprite(200, 200);
  garden.addImage(gardenImg);

  //creating boy running
  rabbit = createSprite(180, 340, 30, 30);
  rabbit.scale = 0.09;
  rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);

  rabbit.x = World.mouseX;


  edges = createEdgeSprites();
  rabbit.collide(edges);

  var select_sprites = Math.round(random(1, 2));
  if (frameCount % 80 === 0) {
    if (select_sprites == 1) {
      createApples();
    }
    else {
      createLeaves();
    }
  }

  drawSprites();
}

function createApples() {
  var apple = createSprite(random(50, 350), 40, 10, 10);
  apple.addImage(appleImg);
  apple.scale = 0.05;
  apple.velocityY = 1;
  apple.lifetime = 150;
}


function createLeaves() {
  var orangeLeaf = createSprite(random(50, 350), 40, 10, 10);
  orangeLeaf.addImage(orangeLeafImg);
  orangeLeaf.scale = 0.05;
  orangeLeaf.velocityY = 1;
  orangeLeaf.lifetime = 150;
}
