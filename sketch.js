var car,wall;
var speed,weight;


function setup() {
  createCanvas(1600,400);

  speed = random(55,90);
  weight = random(400,1500);


  car = createSprite(50, 200, 30, 10);

  wall = createSprite(1500,200,60,height/2);
  wall.shapeColor = color(80,80,80);
}

function draw() {
  background(0); 
  
  car.velocityX = speed;
  car.weight = weight;
  
 if(wall.x - car.x < (car.width + wall.width) / 2){
  car.velocityX = 0;
  var formula = 0.5 * weight * speed * speed / 22500;
 }

if(formula > 180){
car.shapeColor = color(255,0,0);
}
if(formula < 180 && formula > 100){
  car.shapeColor = color(230,230,0);
  }
  if(formula < 100){
    car.shapeColor = color(0,255,0);
    }
  drawSprites();
}