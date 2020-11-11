var canvas;
const Engine=Matter.Engine;
const Body=Matter.Bodies;
const World=Matter.World;
var engine,world;
var box1,box2,ground1,pig1,log1;
function setup() {
  canvas=createCanvas(1000,400);
 engine=Engine.create();
 world=engine.world;
 ground1=new ground(200,300,400,20);
 box1=new box(200,100,100,50);
 box2=new box(200,50,100,100);
 pig1=new pig(200,200); 
 log1=new Log(200,100,100,PI/2);
}

function draw() {
  background("cyan"); 
  Engine.update(engine);
 box1.display();
 box2.display();
 ground1.display();
 pig1.display();
 log1.display();
 console.log(box1.body.position);
  //drawSprites();
}