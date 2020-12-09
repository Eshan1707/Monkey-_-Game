
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var foodGroup, obstacleGroup

var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 foodGroup=new Group();
  obstacleGroup =new Group();
}



function setup() {
monkey= createSprite(80,350,20,20) 
monkey.addAnimation('running',monkey_running);
  monkey.scale=.1
  ground=createSprite(200,360,800,20)
  ground.velocityX=-3
  foodGroup=new Group();
  obstacleGroup=new Group();
}


function draw() {

  background('cyan')
  monkey.collide(ground)
 if(ground.x<0) {
  ground.x=300
 }
  if(keyDown('space')){
     monkey.velocityY=-10
     }
  monkey.velocityY=monkey.velocityY+1
 spawnFood ();
  if(obstacleGroup.isTouching(monkey)){
    monkey.velocityX=0
    ground.velocityX=0
    foodGroup.setVelocityEach(0,0);
      obstacleGroup.setVelocityEach(0,0);
      foodGroup.setVelocityEach(0,0);
      foodGroup.setLifetimeEach(-1);
      obstacleGroup.setLifetimeEach(-1);
  }
  spawnObstacles();
  drawSprites();
}
function spawnFood(){
  if(frameCount%80===0){
    banana=createSprite(600,100,20,20)
    banana.addImage(bananaImage)
    banana.velocityX=-3
    banana.scale=.1
    banana.y=Math.round(random(120,200))
  banana.lifetime=200
    monkey.depth=banana.depth+1
    foodGroup.add(banana)
  }
}
function spawnObstacles(){
 if(frameCount%200===0){
    obstacles=createSprite(600,350,20,20)
    obstacles.addImage(obstacleImage)
    obstacles.velocityX=-3
    obstacles.scale=.1 
 obstacles.lifetime=200
   obstacleGroup.add(obstacles)
   

   
}
 





}