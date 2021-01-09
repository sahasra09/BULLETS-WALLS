var car;
var wall;
var speed;
var weight;
var thickness;
var gameState="play"
var bullet;
var bg;
var wallImg;
var wallbr;
function preload(){
  
}
function setup(){
  speed=random(223,321);
  weight=random(30,52);
  thickness=Math.round(random(22,83));
  
  createCanvas(1600,400);
  car=createSprite(50,200,50,5);
  car.shapeColor="white";
//  car.addImage(bullet);
  car.scale=0.7;
  wall=createSprite(1500,200,thickness,400);
  wall.shapeColor="white";
 // wall.addImage(wallImg)
  
  
}
function draw(){
  if(gameState==="play"){
  if(keyDown("space")){
    car.velocityX=speed;
    
  }
  
  background("black");
  if(hasCollided(car,wall)){
    
    car.velocityX=0;
   // wall.changeAnimation(wallbr);
    gameState="end"
    thickness=Math.round(random(22,83));
    var deformation=0.5*speed*weight*speed/thickness*thickness*thickness;
    if(deformation>10){
      wall.shapeColor=color(255,0,0);
  }
  
  if(deformation<10){
    wall.shapeColor=color(0,255,0);
  }
}
  }
//if(gameState==="end"){
 // car.x=5;
 // car.y=200;
//  if(keyDown("space")){
  //  car.velocityX=speed;
 // }
//}
  drawSprites();

}
function hasCollided(bullet,wall){

  bulletRightEdge=bullet.x+bullet.width;
  wallLeftEdge=wall.x;
  
  if(bulletRightEdge>=wallLeftEdge){
  
  return true;
  
  }
  else{
  
    return false; 
  }
}