const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var umbrella;
var maxDrops = 100;
var drops = [];
var thunder;
var rand;

function preload(){
    thunder1 = loadImage("thunderbolt/1.png");
    thunder2 = loadImage("thunderbolt/2.png");
    thunder3 = loadImage("thunderbolt/3.png");
    thunder4 = loadImage("thunderbolt/4.png");
}

function setup(){
   createCanvas(500, 1000);
   engine = Engine.create();
   world = engine.world;

   umbrella = new Umbrella(250, 600);

   for(var i=0; i<maxDrops; i++){
    drops.push(new Drop(random(0,400), random(0,400)));
    
}
  
}

function draw(){
    background("black");
    Engine.update(engine);
    
    for(var i=0; i<maxDrops; i++){

        drops[i].display();
        drops[i].update();
        
    }

    if(frameCount%60===0){
        rand = Math.round(random(1,4));
        thunder = createSprite(250, 200, 50, 50);
    switch(rand){
        case 1: thunder.addImage("1", thunder1);
        break;
        case 2: thunder.addImage("2", thunder2);
        break;
        case 3: thunder.addImage("3", thunder3);
        break;
        case 4: thunder.addImage("4", thunder4);
        default: break;
    }

    thunder.lifetime=20;
    }
    
    
    console.log(rand);
    
    umbrella.display();
    
    drawSprites();
    
}   

