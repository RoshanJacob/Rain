const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var rain1,rain2,rain3,rain4;
var engine,world;
var rain =[]
var rain5 =[]
var rain6 =[]
var rain7 =[]
var rand,rand1;
function setup() {
  var canvas =createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;


  rand = random(100,390);
  rand1 = random(200,600);

  for (var i = 0;i < 100;i++) {
    rain1 = new Rain(400,-10);   
    rain.push(rain1);        
  }
  for(var i = 0;i < 100;i++){
    rain2 = new Rain(400,-100);
    rain5.push(rain2);
  }
  for(var i = 0;i < 100;i++){
    rain3 = new Rain(400,-200);
    rain6.push(rain3);
  }
  for(var i = 0;i < 100;i++){
    rain4 = new Rain(400,-300);
    rain7.push(rain4);
  }
}

function draw(){

  background(0); 
  Engine.update(engine);

  for (var i = 0;i<100;i++) {
    rain[i].display();
   }
  for(var i = 0;i < 100;i++){
    rain5[i].display();
  }
  for(var i = 0;i < 100;i++){
    rain6[i].display();
  }
  for(var i = 0;i < 100;i++){
    rain7[i].display();
  }
  drawSprites();
}