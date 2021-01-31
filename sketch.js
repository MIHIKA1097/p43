const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;

var hr = hour();
var mn = minute();
var sc = second();


function preload(){

}
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
}

function draw() {
  background("black");  

  scAngle = map(sc , 0 , 60 , 0 ,360)

  push();
        stroke(255,0,0);
        strokeWeight(7);
        line(0,0,100,0);
  pop();   
  
  arc(50, 55, 50, 50, 0, HALF_PI);
noFill();
arc(50, 55, 60, 60, HALF_PI, PI);
arc(50, 55, 70, 70, PI, PI + QUARTER_PI);
arc(50, 55, 80, 80, PI + QUARTER_PI, TWO_PI);
  drawSprites();
}