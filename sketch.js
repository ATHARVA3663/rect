var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  
  rect1=createSprite(600,200,80,30);
  rect1.shapeColor="red";
  rect2=createSprite(300,100,80,30);
  rect2.shapeColor="blue";
  rect3=createSprite(700,400,80,30);
  rect3.shapeColor="red";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  movingRect.depth+=1;
if(are (movingRect,rect3)){
text("yes",200,200);
fill("white");
}
else{
text("no",200,200);
fill("white");
}
  
  drawSprites();
}
