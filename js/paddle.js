class Paddle{
constructor(GAME_WIDTH, GAME_HEIGHT){
    this.width = 120;
    this.height= 30;

    this.speed = 0; 
    this.maxSpeed = 7;
    this.gameWidth = GAME_WIDTH;
    this.gameHeight = GAME_HEIGHT;

    this.position = {// позиция относительно экрана
        x: GAME_WIDTH/2 - this.width/2,//ставим панель находим половину экрана +половину самой панели
        y: GAME_HEIGHT-this.height- 10 
    }
}

draw(ctx){
ctx.fillRect(this.position.x, this.position.y, this.width, this.height, );
ctx.fillStyle =`green`;
}

moveRight(){
    this.speed = this.maxSpeed;

 }
 moveLeft(){
     this.speed=-this.maxSpeed;//-7 pix in sec
 }
stop(){
this.speed = 0;
}

update(deltaTime){//время прошедшее с последнего апдейта, изменения проходят каждые сколько-то секунд

if (!deltaTime) return;//поскольку первый lastime =0, то если не передано deltatimeб просто возвращаем
this.position.x += this.speed;

if(this.position.x <0) this.position.x = 0;//левый край экрана
if(this.position.x + this.width >this.gameWidth) //правый экран
this.position.x = this.gameWidth-this.width;
}

}
