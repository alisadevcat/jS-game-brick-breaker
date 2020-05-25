class Brick{
    constructor(position,detectCollision, ball){
        this.image = document.getElementById("brick");
        this.width = 80;
        this.height = 24;
      
        this.markedForDeletion = false;
        this.collision = detectCollision;


        this.position=position;
    }
draw(ctx){
ctx.drawImage(this.image, this.position.x, this.position.y ,this.width, this.height);
}

update(deltaTime) {
    if (detectCollission(ball, this)) {
      ball.speed.y = -ball.speed.y;
      this.markedForDeletion = true;
    }
  }

}

