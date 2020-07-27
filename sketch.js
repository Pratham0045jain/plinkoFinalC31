const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
//const Constraint = Matter.Constraint;

var particle = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;

var engine, world;

function preload() {
  backgroundImg = loadImage("sprites/bg.png");
  
}



function setup() {
  createCanvas(500,800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(260,748,350,10);

  for(var j = 120; j <= width; j = j + 50){
    divisions.push(new Divisions(j, height-divisionHeight/4, 5, divisionHeight-230));
  }


  

  for(var j = 40; j<=width; j=j+50){
    plinkos.push(new Plinkos(j,140,10,color));
  }

  for(var j = 100; j<=width; j=j+50){
    plinkos.push(new Plinkos(j,200,10,color));
  }

  for(var j = 40; j<=width; j=j+50){
    plinkos.push(new Plinkos(j,270,10,color));
  }

  for(var j = 100; j<=width; j=j+50){
    plinkos.push(new Plinkos(j,340,10,color));
  }

  for(var j = 40; j<=width; j=j+50){
    plinkos.push(new Plinkos(j,410,10,color));
  }

  for(var j = 100; j<=width; j=j+50){
    plinkos.push(new Plinkos(j,480,10,color));
  }

  for(var j = 40; j<=width; j=j+50){
    plinkos.push(new Plinkos(j,540,10,color));
  }

  for(var j = 100; j<=width; j=j+50){
    plinkos.push(new Plinkos(j,590,10,color));
  }

  for(var j = 40; j<=width; j=j+50){
    plinkos.push(new Plinkos(j,650,10,color));
  }

  for(var i=0; i<100; i++){
    particle.push(new Particle(random(0,500), random(0,800), 6, color))
}
  console.log(divisions);

  
  


}

function draw() {
  background(backgroundImg);
  drawSprites();
  Engine.update(engine);
  
  ground.display();

  
   
    

  for (var i = 0; i < divisions.length; i++) {
    divisions[i].display();  
  }

   if(mouseIsPressed){ 
  for(var i=0; i<particle.length; i++){
    particle[i].display(); 
  
}}

  for(var i=0; i<plinkos.length; i++){
    plinkos[i].display(); 
  }

 

  

  }
  