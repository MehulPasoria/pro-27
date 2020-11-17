
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bobObj

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	rectMode=(CENTER);

	bobObj=new bob(200,200,70);

		engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	bob = Bodies.circle(200,100,20);
	world.add(world,bob)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ellipseMode(RADIUS);
  ellipse(bob.position.x,bob.position.y,400,20);	
  bobObj.display();
  
  drawSprites();
 
}



