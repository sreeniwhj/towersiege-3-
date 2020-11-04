const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1

var slingshot;
var backgroundImg
var gameState = "onSling";
var bg = "db.jpg"
function preload() {
   // backgroundImg = loadImage("sprites/bg.png");
    getTime()
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground1 = new ground(700,300,300,20);
   

    box1 = new Box(620,160,30,40);
    box2 = new Box(650,160,30,40);
   

    box3 = new Box(680,240,30,40);
    box4 = new Box(710,240,30,40);
   

    box5 = new Box(740,160,30,40);
    box6 = new Box(770,160,30,40);
    box7 = new Box(800,160,30,40);
    box8 = new Box(650,120,30,40);
    box9 = new Box(680,120,30,40);
    box10 = new Box(710,120,30,40);
    box11 = new Box(740,120,30,40);
    box12 = new Box(770,120,30,40);
    box13 = new Box(680,110,30,40);
    box14 = new Box(710,110,30,40);
    box15 = new Box(740,110,30,40);
    box16 = new Box(710,100,30,40);



    
   poly = new polygon(200,50);

    //log6 = new Log(230,180,80, PI/2);
  slingshot = new SlingShot(poly.body,{x:200, y:50});
}

function draw(){
    if(backgroundImg)
     background(backgroundImg);
    
    Engine.update(engine);
    //strokeWeight(4);
   box1.display();
   box2.display();
    ground1.display();
    
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
    

   poly.display();
    
    //log6.display();
    slingshot.display();    
}

function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(poly.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
       slingshot.attach(poly.body);
    }
}

async function getTime(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responsejson = await response.json();
    var  dt = responsejson.datetime;
    var hour = dt.slice(11,13);
    console.log(hour) 
    if(hour>=08&&hour<=19 ){
        bg = "db.jpg"
    }  
    else{
        bg = "nb.jpg"
    }
    backgroundImg = loadImage(bg)
    
    
}
