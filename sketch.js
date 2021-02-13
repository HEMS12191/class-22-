const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies


var engine,ground,world



function setup() {
  createCanvas(800,400);
 engine=Engine.create()


 world=engine.world
 var option={
   isStatic:true
 }
 ground=Bodies.rectangle(400,380,800,20,option )
  World.add(world,ground)
}

function draw() {
  background(0);  
  Engine.update(engine)
 rectMode(CENTER)
  rect(ground.position.x,ground.position.y,800,20)
  
  drawSprites();
}