
var path,boy
var pathImg,boyImg
function preload(){
  //pre-load images
  pathImg = loadImage("path.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");

}

function setup(){
  createCanvas(400,400);
  //create sprites here

  path=createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY = 4;
  path.scale=1.2;

  boy = createSprite(70,350,20,20);
  boy.addAnimation("SahilRunning",boyImg);
  boy.scale=0.08;
}

function draw() {


  
    background(0);
    boy.x = World.mouseX;
 
  edges = createEdgeSprites();
  boy.collide(edges);

  if(path.y > 400 ){
    path.y = height/2;
  }
  drawSprites();
  }
  

