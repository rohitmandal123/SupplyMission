var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bg;
var boyanimation;
var boy;
var stooper;
var boyanimation1;
var boy2;
function preload()
{	
	boyanimation1 = loadImage("happykid.png")
    bg = loadImage("20210419_220101.jpg")
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
	boyanimation = loadImage("sadkid.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
																																								
	//stooper.visible = false;
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(400,200);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6
	//helecopter.velocityX = 2;
	
	groundSprite=createSprite(300,497,1000,20);
	groundSprite.shapeColor=color(255)
    groundSprite.visible = false;

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.6, isStatic:true});
	World.add(world, packageBody);
	
	boy2 = createSprite(320,460,30,30);
    
	boy = createSprite(320,460,30,30);
	boy.scale =0.2;
	boy.addImage(boyanimation)
	//Create a Ground
	ground = Bodies.rectangle(300,497,1000,20, {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(bg);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  
 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    
	 Matter.Body.setStatic(packageBody,false); 
     boy.visible = false;
	 boy2.addImage(boyanimation1)
	 boy2.scale = 0.2;
  }
}



