const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var canvas, angle, tower, ground, cannon;
var balls=[];




function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");

}

function setup() {
  canvas = createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;
  angle = -PI / 4;
  ground = new Ground(0, height - 1, width * 2, 1);
  tower = new Tower(150, 350, 160, 310);
  cannon = new Cannon(180, 110, 100, 50, angle);
  
  

}

function draw() {
  background(189);
  image(backgroundImg, 0, 0, width, height);

  

  Engine.update(engine);
  ground.display();
  

  cannon.display();
  tower.display();
  //ball.display();
  console.log(balls);

  for(var i=0; i < balls.length; i++){
    showCannonBall(balls[i], i);
  }
 
}

function showCannonBall(ball, index){
  ball.display();
}

function keyReleased() { 
  if(keyCode == 32){ 
    balls[balls.length-1].shoot(); 
  
  } 
  }

  function keyPresed(){
    if(keyCode == 32){
      var cannonball = new CannonBall(cannon.x, cannon.y);
      balls.push(cannonball);
    }
  }



