var bg;
var bg_img;
var baloon;
var baloon_img;
var topGround;
var btmGround;


function preload() {
  bg_img = loadImage("assets/bg.png");

  baloon_img = loadAnimation("assets/balloon1.png", "assets/balloon2.png", "assets/balloon3.png");
}

function setup() {
  bg = createSprite(165, 485, 1, 1);
  bg.addImage(bg_img);
  bg.scale = 1.3;

  baloon = createSprite(100, 200, 20, 50);
  baloon.addAnimation("baloon", baloon_img);
  baloon.scale = 0.2;

  topGround = createSprite(200, 10, 800, 20);
  topGround.visible = false;
  btmGround = createSprite(200, 400, 800, 20);
  btmGround.visible = false;
}

function draw() {
  background("blue");

  if(keyDown("space")){
    baloon.velocityY = -6;
  }
  baloon.velocityY += 2;
  drawSprites();
}

