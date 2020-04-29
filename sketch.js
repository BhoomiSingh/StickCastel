var base, wall1, wall2,wall3;
var stick, flag;
var w1b1,w1b2,w1b3;
var w2b1,w2b2,w2b3;
var w3b1,w3b2,w3b3;

function setup() {
  createCanvas(1500,720)
  base = createSprite(750,690,1000,50);
  wall1 = createSprite(434,470,250,390);
  w1b1 = createSprite(334,250,50,50);
  w1b2 = createSprite(434,250,50,50);
  w1b3 = createSprite(534,250,50,50);
  wall2 = createSprite(700,470,280,450);
  w2b1 = createSprite(585,220,50,50);
  w2b2 = createSprite(705,220,50,50);
  w2b3 = createSprite(815,220,50,50);
  wall3 = createSprite(966,470,250,390);
  w3b1 = createSprite(866,250,50,50); 
  w3b2 = createSprite(966,250,50,50);
  w3b3 = createSprite(1066,250,50,50);
  stick = createSprite(706,140,30,70); 
  flag = createSprite(750,120,40,30);
}

function draw() {
  background(0);
  drawSprites();
}