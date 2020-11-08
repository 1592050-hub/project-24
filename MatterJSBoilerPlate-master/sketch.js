
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var Paper;
var Dustbin;
var Dustbin2,Dustbin3;
var Ground
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

Paper= new paper(100,600.20,20);;
Dustbin= new dustbin(350,600,20,100);
Dustbin2=new dustbin(550,600,20,100);
Dustbin3=new dustbin(450,650,200,20);
Ground= new ground(600,height,1200,20);	
  
}


function draw() {
	keyPressed();
  rectMode(CENTER);
  background(0);
  Engine.run(engine);
  Paper.display();
  Dustbin.display();
  Dustbin2.display();
  Dustbin3.display();
  Ground.display();
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode=== UP_ARROW){
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
	}
}

