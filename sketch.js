const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var bgImg;
var ground1;
var chain1;
var superMan1;
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10;
var box11, box12, box13, box14, box15, box16, box17, box18, box19, box20;
var box21, box22, box23, box24, box25, box26;
var monster1;

function preload() {
bgImg = loadImage("GamingBackground.png")

}

function setup() {
  createCanvas(1200, 500);
  engine = Engine.create();
  world = engine.world;

  ground1 = new ground(370,380,745,15);
  superMan1 = new superman(100,100,220,130);
  chain1 = new chain(superMan1.body,{x:200, y:50});
  box1 = new box(330,350,40,40);
  box2 = new box(330,320,40,40);
  box3 = new box(330,290,40,40);
  box4 = new box(330,260,40,40);
  box5 = new box(330,230,40,40);
  box6 = new box(330,200,40,40);
  box7 = new box(330,170,40,40);
  box8 = new box(370,350,40,40);
  box9 = new box(370,320,40,40);
  box10 = new box(370,290,40,40);
  box11 = new box(370,260,40,40);
  box12 = new box(370,230,40,40);
  box13 = new box(370,200,40,40);
  box14 = new box(410,350,40,40);
  box15 = new box(410,320,40,40);
  box16 = new box(410,290,40,40);
  box17 = new box(410,260,40,40);
  box18 = new box(410,230,40,40);
  box19 = new box(410,200,40,40);
  box20 = new box(410,170,40,40);
  box21 = new box(450,350,40,40);
  box22 = new box(450,320,40,40);
  box23 = new box(450,290,40,40);
  box24 = new box(450,260,40,40);
  box25 = new box(450,230,40,40);
  box26 = new box(450,200,40,40);
  monster1 = new monster(550,170,160,160);

}

function draw() {
  background(bgImg);
  Engine.update(engine);
  ground1.display();
  superMan1.display();
  chain1.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  box26.display();
  monster1.display();

}

function mouseDragged(){
  Matter.Body.setPosition(superMan1.body,{x:mouseX, y:mouseY})
  
  
  }
  

