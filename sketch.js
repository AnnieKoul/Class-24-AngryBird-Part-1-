const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var pig1
var log1
var bird

function setup(){
    var canvas = createCanvas(1000,400);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(500,height,1000,20)

    box1 = new Box(500,370,70,70);
    box2 = new Box(700,370,70,70);
        pig1=new Pig(600,370)
    log1=new Log(600,335,300,PI/2)
    box3 = new Box(500,300,70,70);
    box4 = new Box(700,300,70,70);
        pig2=new Pig(600,300)
    log2=new Log(600,200,300,PI/2)
    box5 = new Box(600,100,70,70);
    log3=new Log(550,100,200,PI/7)
    log4=new Log(650,100,200,-PI/7)
    bird=new Bird(100,100)
    
    
}

function draw(){
    background(0);
    Engine.update(engine);
       box1.display();
    box2.display();
    ground.display();
    pig1.display()
    log1.display()
    box3.display();
    box4.display();
    pig2.display()
    log2.display()
    box5.display()
    log3.display()
    log4.display()
    bird.display()
}