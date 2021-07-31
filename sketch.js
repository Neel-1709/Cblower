
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine;
var world;
var ball;
var button;
var blower;
var blowermouth;

function preload()
{
	
}

function setup() {
  createCanvas(800,400);
  

  button = createButton("Click to Blow")
  button.position(width / 2, height - 100);
  button.class("blowButton");
  button.mouseClicked(blow);
  
  var ball_options ={
    restitution: 0.1,
    friction: 0,
      density: 1.2
  };
  ball = Bodies.circle(400,200,20,ball_options);
  World.add(world,ball);
  
  Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(51);  
  Engine.update(engine);
  ellipse(ball.position.x,ball.position.y,20);
  drawSprites();
}

function blow() {
  console.log("button pressed");
  Matter.Body.applyForce(ball.body, { x: 0, y: 0}, {x: 0, y: 1});
}