//allign all goods.
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;

//align them positionally 
//improve the gravity status
// imagify the bob and the ground and the background and thestring
//create a box


function preload()
{

}	

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	
	//Create the Bodies Here.

ground  = Bodies.rectangle(120,180,400,20,{isStatic:true,density:2});
World.add(world,ground)

bob = new Bob(142,400)
bob2 = new Bob(232,400)
bob3 = new Bob(290,400)
bob4 = new Bob(350,400)
bob5 = new Bob(490,400)
slingshot = new Rope(bob.body,ground,5*2, 4);
slingshot2 =   new Rope(bob2.body,ground,54*2,4);
slingshot3 =   new Rope(bob3.body,ground,100*2,4);
slingshot4 =   new Rope(bob4.body,ground,150*2,4);
slingshot5 =   new Rope(bob5.body,ground,192*2,4);


Engine.run(engine);	  
}


function draw() {
  
  background(200);
  slingshot.display();
  slingshot2.display();
  slingshot3.display();
  slingshot4.display();
  slingshot5.display();
 bob.display();
 bob2.display();
 bob3.display();
 bob4.display();
 bob5.display();

 fill('grey')
  rect(ground.position.x,ground.position.y,400,60);
  text(`${mouseX}:${mouseY}`,mouseX,mouseY)
  drawSprites();
 
}
function mouseDragged(){
	Body.setPosition(bob.body,{x:mouseX,y:mouseY})
	
	click.setVolume(0.1)
	  }
