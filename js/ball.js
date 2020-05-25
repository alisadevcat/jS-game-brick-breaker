class Ball{
    constructor(GAME_WIDTH, GAME_HEIGHT, paddle){
        this.image = document.getElementById("ball");
        this.gameWidth = GAME_WIDTH;
        this.gameHeight = GAME_HEIGHT;
        this.size=16;
        this.lives = 1;

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
ctx.drawImage(this.image, this.position.x, this.position.y,this.size, this.size);
//(image, dx, dy, Width, dHeight);
}
stop(){
    this.speed = 0;
    }

update(deltaTime){
this.position.x += this.speed.x;
this.position.y += this.speed.y;


//стена справа и слева

if(this.position.x +this.size>this.gameWidth || this.position.x <0){
    this.speed.x = -this.speed.x;}

//стена сверху 
if(this.position.y < 0){
        this.speed.y= -this.speed.y;
    }
//cнизу
if(this.position.y + this.size > this.gameHeight){
        this.lives --;
    }
if (this.lives === 0){
        this.stop();
        ctx.font = "30px Arial";
        ctx.fillStyle = "black";
        ctx.textAlign = "center";
        ctx.fillText("GAME OVER", this.gameWidth / 2, this.gameHeight / 2);
        return;
}
//проверка столкновения с паддл
let topOfBall = this.position.y + this.size;
let topOfPaddle= paddle.position.y;

let leftSideOfPaddle = paddle.position.x;
let rightSideOfPaddle = paddle.position.x + paddle.width;


if((topOfBall>= topOfPaddle)&& (this.position.x >=leftSideOfPaddle)&&(this.position.x +this.size <= rightSideOfPaddle)){
this.speed.y = -this.speed.y;
this.position.y = paddle.position.y - this.size;//момент touch with paddle
}
}
}
