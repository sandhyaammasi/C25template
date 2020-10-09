/*

Author : Sandhya Ammasi
Purpose : WhitehatJR PRO C25 template
things to do : create 1 or more dustbin objects (right & bottom)
Add Image to the dustbin
*/
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbinObj, paperObject,groundObject	
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;
	//create a dustbinObj & paperObject
	paperObject = new paper(300,100,40);
	groundObject=new ground(800,670,1600,20);

	dustbinObj = new dustbin(1200,600,10,100);	//left
	
	
	Engine.run(engine);
 
}

function draw() {
  rectMode(CENTER);
  background(0);

 //display the dustbin & paperobject
  groundObject.display();
  paperObject.display();
  dustbinObj.display();
}

/* function keyPressed() is an inbuilt function like function draw()
 function keyPressed() is read by the computer over & over for every frame to check if 
 any key is pressed
*/
function keyPressed() {

	//write code ,that if you press up arrow, the paper ball moves up
	//hint : use apply force code
	// Matter.Body.applyForce(body, position, force)
	//body here is ----paperObject.body
	//position here is ----paperObject.body.position
	//force here is ----{x:85,y:-85} -----> velocity 
	
	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
    
	  }
	  if (keyCode === LEFT_ARROW) {

    	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:-10,y:0});
    
	  }

	  if (keyCode === RIGHT_ARROW) {

    	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:10,y:0});
    
	  }

	
}
















































/*	dustbinObj=new dustbin(1200,600,10,100);
	paperObject=new paper(200,450,40);
	*/




/*
	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:10,y:-85});
    
	  }
	  */