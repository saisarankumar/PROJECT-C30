const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground, shelf1, shelf2;

var box1, box2, box3, box4, box5, box6, box7;
var box8, box9, box10, box11, box12;
var box13, box14, box15;
var box16;

var box17, box18, box19, box20, box21;
var box22, box23, box24;
var box25;

var pentagonImage, pentagon;

function preload(){
    polygonImage = loadImage("polygon.png");
}

function setup(){

    createCanvas(1000,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground (500,390,1000,20);
    shelf1 = new Ground (400,300,250,10);
    shelf2 = new Ground (675,150,200,10);

    box1 = new BlueBox(325,280,30,40);
    box2 = new BlueBox(350,280,30,40);
    box3 = new BlueBox(375,280,30,40);
    box4 = new BlueBox(400,280,30,40);
    box5 = new BlueBox(425,280,30,40);
    box6 = new BlueBox(450,280,30,40);
    box7 = new BlueBox(475,280,30,40);

    box8 = new PinkBox(350,250,30,40);
    box9 = new PinkBox(375,250,30,40);
    box10 = new PinkBox(400,250,30,40);
    box11 = new PinkBox(425,250,30,40);
    box12 = new PinkBox(450,250,30,40);
    
    box13 = new GreenBox(375,220,30,40);
    box14 = new GreenBox(400,220,30,40);
    box15 = new GreenBox(425,220,30,40);
    
    box16 = new BlueBox(400,190,30,40);

    box17 = new BlueBox(625,125,30,40);
    box18 = new BlueBox(650,125,30,40);
    box19 = new BlueBox(675,125,30,40);
    box20 = new BlueBox(700,125,30,40);
    box21 = new BlueBox(725,125,30,40);

    box22 = new GreenBox(650,105,30,40);
    box23 = new GreenBox(675,105,30,40);
    box24 = new GreenBox(700,105,30,40);
    
    box25 = new PinkBox(675,85,30,40);

    var options = {
        density:2,
        friction:1
    }

    polygon = Bodies.circle(100,200,15,options);
    World.add(world,polygon);

    slingshot1 = new SlingShot(polygon,{x:100,y:200});

}

function draw(){

    background(0);

    ground.display();
    shelf1.display();
    shelf2.display();

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

    imageMode (CENTER);
    image(polygonImage,polygon.position.x,polygon.position.y,40,40);

    slingshot1.display();

    Engine.update(engine);

    fill ("tan");
    textFont("algerian");
    textSize(16);
    text("Drag the hexagonal stone and release it, to launch towards the blocks",5,35);

}

function mouseDragged(){
    Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot1.fly();
}

function keyPressed(){ 
  if(keyCode===32){ 
    Matter.Body.setPosition(polygon,{x:100,y:200});
    slingshot1.attach(polygon);
  }
}