/* This programme's objective is to test the lethality of certain accidents using a formula.
If there is no damage the sprite will turn green.
If there is moderate damage, it will turn yellow.
If the accident is lethal, it will turn red.*/

var car, wall;
var wallImage, deformation;
var speed, weight;
var x, y;

function preload() {
  //carImage = loadImage("red car 2.png");
  wallImage = loadImage("brick wall.png");
}

function setup() {
  createCanvas(windowWidth - 10, windowHeight - 10);

  //properties
  x = Math.random(windowWidth/10, windowWidth/9);

  //wall
  wall = createSprite(windowWidth + 300, 290, 10, windowHeight);
  wall.addImage(wallImage);
  wall.scale = 3.5;
  speed = random(30, 100);

  //test car
  car = createSprite(x, windowHeight/2, windowWidth/3, windowHeight/6);
  //car.addImage(carImage);
  car.shapeColor = 'purple';
  car.scale = 0.3;
  weight = random(200, 300);

  
}

function draw() {
  background(rgb(112, 0, 52));

  //formula
  deformation = (0.5 * weight * speed * speed)/22500;
  
  car.setCollider("rectangle", 35, 0, windowWidth/3, windowHeight/6);

  //properties of test car
  car.velocityX = speed;
  
  takeTheTest();

  drawSprites();
}


function takeTheTest(){
  if(car.isTouching(wall)) {
    car.velocityX = 0;

    if(deformation < 80) {
      car.shapeColor = "green";
    }

    if(deformation > 80 || deformation < 180){
      car.shapeColor = 'yellow';
    }
    if(deformation > 180) {
      car.shapeColor = 'red';
    }
  }
  else {
    car.shapeColor = 'purple';
  }
}