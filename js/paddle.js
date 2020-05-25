class Paddle{
constructor(GAME_WIDTH, GAME_HEIGHT){
    this.width = 120;
    this.height= 30;

    this.speed = 0; 
    this.maxSpeed = 7;
    this.gameWidth = GAME_WIDTH;
    this.gameHeight =GAME_HEIGHT;

    this.position = {// позиция относительно экрана
        x: GAME_WIDTH/2 - this.width/2,//ставим панель нахолим половину экрана +половину самой панели
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
     this.speed=-this.maxSpeed;//-10 pix in sec
 }
stop(){
this.speed = 0;
}

update(deltaTime){//время прошедшее с последнего апдейта
if (!deltaTime) return;//поскольку lastime =0, то делить нельзя
// this.position.x += 5 / deltaTime;//5 пискселей в сек /время
this.position.x += this.speed;

if(this.position.x <0) this.position.x = 0;
if(this.position.x +this.width >this.gameWidth) 
this.position.x = this.gameWidth- this.width;
}

}
