
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var b1,ball,ground,binimage;

function preload(){
  binimage = loadImage('box.png'); 
}

function setup() {
	createCanvas(830,640);
	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600,height,2000,50);

	b1 = new Bin(700,600,170,10);
	b2 = new Bin(620,540,20,100);           
	b3 = new Bin(780,540,20,100);
  
  ball = new Ball(60,300);
  
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("skyblue");
  Engine.update(engine);
  
 
  b1.display();
  b2.display();
  b3.display();
  image(binimage,600,415,200,200);
  ground.display();
  ball.display(); 
  
  
  fill("Darkblue")
  stroke('pink')
  strokeWeight(2)
  textFont("Jokerman")
  textSize(30);
  text("Crushed paper (vs) Bin",300,50);
  
  textFont("cursive");
  strokeWeight(0)
  fill("blue")
  textSize(34)
  text("___________________",280,56);
  
  
 
}

function keyPressed()   {
	if (keyCode===UP_ARROW) { 
    Matter.Body.applyForce(ball.body,ball.body.position,{x:90,y:-90}); 
    fill('yellow');
    stroke('blue')
  strokeWeight(6)
  }
  
  }
  


  

