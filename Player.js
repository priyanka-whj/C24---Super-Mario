class Player
{
    constructor()
    {
        this.spt = createSprite(200, 200, 100, 100);
        this.spt.shapeColor = "blue";
        this.spt.addAnimation("mario", marioAnimation);
        this.spt.scale = 0.02;
    }
    applyGravity()
    {
        this.spt.velocityY = this.spt.velocityY + 5;
    }
    moveForward()
    {
        this.spt.x = this.spt.x + 12;
    }
    moveBackward()
    {
        this.spt.x = this.spt.x - 12;
    }
    jump()
    {
        this.spt.velocityY = -20;
    }
}