class Obstacle
{
    constructor(posX)
    {
        this.sptx = posX;
        this.spty = height - random([300, 400, 500]);
        this.spt = createSprite(this.sptx, this.spty);
        this.spt.shapeColor = "green";
        this.spt.addAnimation("obstacle", obstacleAnimation);
        this.spt.scale = 0.02;
        this.spt.velocityX = -2;
    }
}