const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine,world,box1;

function setup() {
  var canvas = createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
  box1 = new box(200,300,50,50);
   
  
}

function draw() {
  background(0,0,0);  
  Engine.update(engine);
  box1.display();

}
