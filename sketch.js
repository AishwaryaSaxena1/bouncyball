const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var Aish,Saxena;
function setup() {
  createCanvas(800,400);
  Aish=Engine.create();
  Saxena=Aish.world;
  var option={
    isStatic:true
  }
  Ritika=Bodies.rectangle(400,380,800,20,option);
  World.add(Saxena,Ritika);
  var opt={
    restitution:1.0
  }
  jyoti=Bodies.circle(300,200,50,opt);
  World.add(Saxena,jyoti);
}

function draw() {
  background(0);  
  Engine.update(Aish)
 rectMode(CENTER);
   rect(Ritika.position.x,Ritika.position.y,800,20);
   ellipseMode(CENTER);
   ellipse(jyoti.position.x,jyoti.position.y,50,50);
}