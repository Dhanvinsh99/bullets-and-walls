var bullet, weight, speed;
var wall, thickness;


function setup() {
  createCanvas(1400,400);
  thickness = random(22, 83)
  wall = createSprite(1200, 200, 20, height/2)
  wall.shapeColor = color(80, 80, 80)
  speed = random(223, 321)
  weight = random(30, 52)
  bullet = createSprite(20, 200, 20, 20)
  bullet.velocityX = speed
}

function draw() {
  background(0, 0, 0);
  if(hasCollided(bullet, wall)){
    bullet.velocityX = 0
    var damage = 0.5 * weight * speed * speed/(thickness * thickness* thickness)
    if (damage > 10){
      wall.shapeColor = color(255, 0, 0)
    }
    if (damage < 10){
      wall.shapeColor = color(0, 255, 0)
    }
  }

  drawSprites();
}

function hasCollided(obj1, obj2){
  var obj1rightEdge = obj1.x + obj1.width
  var obj2leftEdge = obj2.x

  if (obj1rightEdge >= obj2leftEdge){
    return true

  }

  return false
}