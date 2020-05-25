class Ball{
    constructor(GAME_WIDTH, GAME_HEIGHT,paddle){
        this.image = document.getElementById("ball");
        this.gameWidth = GAME_WIDTH;
        this.gameHeight = GAME_HEIGHT;
        this.size=16;

        this.position = {
            x: 10,
            y: 400
        };

        this.speed ={
            x:4,
            y:-2
        };
    }

draw(ctx){
ctx.drawImage(this.image, this.position.x, this.position.y ,this.size, this.size);
//(image, dx, dy, dWidth, dHeight);
}

update(deltaTime){
this.position.x += this.speed.x;
this.position.y += this.speed.y;

//wall on the right or left

if(this.position.x +this.size>this.gameWidth || this.position.x <0){
    this.speed.x = -this.speed.x;}

    //wall on the top ot bottom
if(this.position.y + this.size>this.gameHeight||this.position.y < 0){
        this.speed.y= -this.speed.y;
    }   

//check collision with paddle
let topOfBall = this.position.y + this.size;
let topOfPaddle= paddle.position.y;

let leftSideOfPaddle = paddle.position.x;
let rightSideOfPaddle = paddle.position.x + paddle.width;


if((topOfBall>= topOfPaddle)&&
(this.position.x>=leftSideOfPaddle)&&
(this.position.x +this.size <= rightSideOfPaddle)){
this.speed.y = -this.speed.y;
this.position.y = paddle.position.y - this.size;
}
}
}
