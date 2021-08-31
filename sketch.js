
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var newX=100
function preload()
{
	
}

function setup() {
	createCanvas(displayWidth, displayHeight);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

player1=new Parachute()
for(var i =0;i<25;i=i+50){
	tree1=new Tree(newX)
	newX+=300
}

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 player1.display()

 if(keyDown("space")){
player1.moveUp()
 }
 camera.position.x=player1.body.position.x
}





