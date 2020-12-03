var thickness,wall;
var bullet,speed,weight;

function setup() {
  createCanvas(1600,400);
speed = random(223,321);
weight = random(30,52);
thickness=random(22,83)
bullet = createSprite(50, 200, 90,10);
bullet.velocityX = speed;
bullet.shapeColor = color(255);
wall = createSprite(1100,200,thickness,height/2)
wall.shapeColor = color(80,80,80);
}

function draw() {
  background(0);  
  bullet.velocityX = speed;
  bullet.shapeColor= color("white");
  wall.shapeColor = color("DarkGray");
  if(hasCollided(bullet,wall)){
    bullet.velocityX = 0;
    var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);
    if (damage>10){
      wall.shapeColor = color(255,0,0);
    }
    if(damage<10){
      wall.shapeColor = color(0,255,0)
    }
    hasCollided();
  }
drawSprites();
}
function hasCollided(bullet,wall){
  bulletRightEdge=bullet.x+bullet.width;
  wallLeftEdge=wall.x;
  if(bulletRightEdge=bullet>=wallLeftEdge)
  {
    return true
  }
  return false;
}
