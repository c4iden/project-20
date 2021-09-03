var bg,sleep,brush,gym,eat,drink,move,bath;
var astronaut;
var edges;
var backround1;

function setup() {
  createCanvas(windowWidth,windowHeight);
  //400 200 50 50
  astronaut = createSprite(300,200);
  astronaut.addAnimation("sleep.png",sleep);
  astronaut.scale = 0.1
  
}

function preload(){
  bg=loadImage("iss.png");
  sleep=loadAnimation("sleep.png");
  brush=loadAnimation("brush.png"); 
  gym=loadAnimation("gym11.png","gym12.png");
  eat=loadAnimation("eat1.png","eat2.png");
  drink=loadAnimation("drink1.png","drink2.png");
  move=loadAnimation("move1.png");
  bath=loadAnimation("bath1.png","bath2.png");
}



function draw() {
  
  background(bg);  
  
  drawSprites();
  
  //background1 = createSprite(400,400);
  
 // background1.addImage("iss.png",bg);

  edges = createEdgeSprites();
  
  astronaut.collide(edges);
  
  if (keyDown("UP_ARROW")){
    astronaut.addAnimation("brushing", brush);
    astronaut.changeAnimation("brushing")
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  
  if (keyDown("DOWN_ARROW")){
    astronaut.addAnimation("gyming",gym);
    astronaut.changeAnimation("gyming")
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  
  if (keyDown("LEFT_ARROW")){
    astronaut.addAnimation("eating", eat);
    astronaut.changeAnimation("eating")
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  
  if (keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("bathing", bath);
    astronaut.changeAnimation("bathing")
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if (keyDown("W")){
    astronaut.velocityY = -3;
  }
  if (keyDown("S")){
    astronaut.velocityY = 3;
  }
  if (keyDown("D")){
    astronaut.velocityX = 3;
  }
  if (keyDown("A")){
    astronaut.velocityX = -3;
  }
}