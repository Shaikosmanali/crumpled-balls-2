
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground1, ground2, ground3, ground4;
var paper;
function preload() {
	dustbinImg = loadImage("dustbin.png")
}
function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	dustbin = createSprite(1300, 540, 50, 50);
	dustbin.addImage(dustbinImg);
	dustbin.scale=0.7

	ground1 = new Ground(750, 650, 1500, 20);

	ground2 = new Ground(1300, 630, 180, 20);
	ground3 = new Ground(1200, 530, 20, 180);
	ground4 = new Ground(1400, 530, 20, 180);

	paper = new Paper(100, 50, 70, 70);

	Engine.run(engine);

}


function draw() {
	rectMode(CENTER);
	background(158,158,158);


	paper.display();

	ground1.display();

	drawSprites();

}
function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body, paper.body.position, { x: 180, y: -145 })
	}
}


