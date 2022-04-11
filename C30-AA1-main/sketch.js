const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ground;
var fruit,rope;
var fruit_con;

var bg_img;
var food;
var rabbitImg;
var Rabbit;

var cut_image;

function preload()
{
  bg_img = loadImage('background.png');
  food = loadImage('melon.png');
  rabbitImg = loadImage('Rabbit-0.png');
  rabbitImg1 = loadImage('Rabbit-01.png');
  cut_image = loadImage("cut_button.png");
}

function setup() 
{
  createCanvas(500,700);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(200,690,600,20);

  cut_button = createImg("cut_button.png")
  cut_button.size(35,35)
  cut_button.position(230,50)
  cut_button.mouseClicked(CutPressed)

  Rabbit = createSprite(200,600)
  Rabbit.addImage("Parado",rabbitImg);
  Rabbit.scale = 0.25

  rope = new Rope(7,{x:245,y:30});
  fruit = Bodies.circle(300,300,20);
  Matter.Composite.add(rope.body,fruit);

  fruit_con = new Link(rope,fruit);

  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
  imageMode(CENTER);
  
}

function draw() 
{
  background(50);

  
  image(bg_img,width/2,height/2,490,690);

  push()
  noStroke()
  fill("yellow");
  ellipse(247.5,67,20)
  pop()

  

  image(food,fruit.position.x,fruit.position.y,70,70);
  rope.show();
  Engine.update(engine);
  ground.show();

  

  drawSprites();
}

function CutPressed(){
  rope.break()
  fruit_con.detach()
  fruit_con = null;
}