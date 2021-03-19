var mario, flag;
var platformGroup, obstaclesGroup;
var marioAnimation, groundAnimation, wallAnimation, obstacleAnimation, flagAnimation;
var LOSE = 0;
var PLAY = 1;
var WIN = 2;
var gameState = PLAY;

function preload()
{
  marioAnimation = loadAnimation("images/Capture1.png", "images/Capture3.png", "images/Capture4.png");
  groundAnimation = loadAnimation("images/ground.png");
  wallAnimation = loadAnimation("images/wall.png");
  obstacleAnimation = loadAnimation("images/obstacle1.png");
  flagAnimation = loadAnimation("images/Flag.png");
}

function setup() 
{
  createCanvas(displayWidth, 700);

  var platform, wall, obstacle;
  var distanceX = 0;
  mario = new Player();
  platformGroup = new Group();
  obstaclesGroup = new Group();

  for(var i=0; i<10; i++)
  {
    platform = new Platform(distanceX);
    var gap = random([30, 40, 50, 60]);
    distanceX = distanceX + platform.sptw + gap;
    platformGroup.add(platform.spt);
    if(i%4 === 0)
    {
      wall = new Wall(distanceX);
      platformGroup.add(wall.spt);
    }
    if(i%3 === 0)
    {
      obstacle = new Obstacle(distanceX);
      obstaclesGroup.add(obstacle.spt);
    }
  }
  flag = createSprite(distanceX - 150, height-350);
  flag.addAnimation("flag", flagAnimation);
  flag.scale = 0.08;
  flag.setCollider("rectangle", 0, 0, 300, 500);
  flag.debug = "true";

}

function draw() 
{
  background("skyblue"); 
  translate(-mario.spt.x + width/2, 0);

  if(gameState === PLAY)
  {
    if(obstaclesGroup.isTouching(mario.spt) || mario.spt.y > height)
    {
      gameState = LOSE;
    }
    if(flag.isTouching(mario.spt))
    {
      gameState = WIN;
    }
    mario.applyGravity();
    mario.spt.collide(platformGroup);
    if(keyDown("right"))
    {
      mario.moveForward();
    }
    if(keyDown("left"))
    {
      mario.moveBackward();
    }
    if(keyDown("up") && mario.spt.velocityY === 0)
    {
      mario.jump();
    }
  }

  if(gameState === LOSE)
  {
    textSize(50);
    text("Game Over",mario.spt.x, 300);
    obstaclesGroup.destroyEach();
    mario.spt.setVelocity(0, 0);
    mario.spt.pause();
  }

  if(gameState === WIN)
  {
    textSize(50);
    text("Winner",mario.spt.x, 300);
    obstaclesGroup.destroyEach();
    mario.spt.setVelocity(0, 0);
    mario.spt.pause();
  }
  drawSprites();
}