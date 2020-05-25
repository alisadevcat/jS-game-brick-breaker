

let canvas = document.getElementById(`mycanvas`);
let ctx = canvas.getContext(`2d`);
const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;
let bx = 20;
let by = 20;

let paddle = new Paddle(GAME_WIDTH, GAME_HEIGHT);
let ball = new Ball(GAME_WIDTH, GAME_HEIGHT, paddle, detectCollission);


let level1 = [
    [1, 1, 1 ,1 ,1 ,1 ,1 ,1 , 1 ,1],
    [1, 1, 1 ,1 ,1 ,1 ,1 ,1 , 1 ,1],
    [1, 1, 1 ,1 ,1 ,1 ,1 ,1 , 1 ,1],
];

function buildLevel(level, ball){
let bricks1 = [];

level.forEach((row, rowIndex)=>{
row.forEach((brick, brickIndex)=>{
if (brick === 1){
    let position = {
    x: 80 * brickIndex,
    y: 60 + 24 * rowIndex 
    };
bricks1.push(new Brick(position, detectCollission, ball));
}
});
});
return bricks1;
}

let bricks = buildLevel(level1, ball);
console.log(bricks);
let lastTime = 0;

// paddle.draw(ctx);
// ball.draw(ctx);


document.addEventListener("keydown", keyFunction.bind(this, paddle));
document.addEventListener("keyup", keyupFunction.bind(this, paddle));

  
//timeStamp Возвращает время (в миллисекундах), в котором было создано событие.
function gameLoop(timestamp){
    let deltaTime = timestamp - lastTime;//сколько времени прошло
    lastTime = timestamp;
    
    ctx.clearRect(0, 0, 800, 600);
    paddle.update(deltaTime);
    ball.update(deltaTime);
    // bricks.forEach(brick=>brick.draw(ctx));
    // bricks.forEach(brick=>brick.update(deltaTime));
    for (let i= 0; i < bricks.length; i++){
        bricks[i].draw(ctx);
        bricks[i].update(deltaTime);
    };
    bricks = bricks.filter(brick =>!brick.markedForDeletion);
    ball.draw(ctx);
    paddle.draw(ctx);
    

    requestAnimationFrame(gameLoop)// разрешаете браузеру показывать кадры тогда, когда они обработаны, и с постоянной частотой. 
    //когда следующий кадр готов, возвращаем обратно
    };

    requestAnimationFrame(gameLoop);

function keyFunction(paddle, event){
    // alert(event.keyCode);//37</39>
    switch(event.keyCode){
    case 37:
    paddle.moveLeft();
    break;
    case 39:
    paddle.moveRight();
    break;
    }
};
keyFunction();


function keyupFunction(paddle, event){
    // alert(event.keyCode);//37</39>
    switch(event.keyCode){
    case 37:
    if (paddle.speed <0)paddle.stop();
    break;
    case 39:
    if (paddle.speed >0)paddle.stop();
    break;
    }
};
keyupFunction();

// //check collision with bricks
function detectCollission (ball, brick){

    let bottomOfBall = ball.position.y + ball.size;
    let topOfBall = ball.position.y;
     

    let topOfObject = brick.position.y;
    let leftSideOfObject = brick.position.x;
    let rightSideOfObject = brick.position.x + brick.width;
    let bottomOfObject = brick.position.y + brick.height;
    
    
    if (bottomOfBall>= topOfObject && topOfBall <= bottomOfObject && ball.position.x >= leftSideOfObject && ball.position.x + ball.size<= rightSideOfObject){
            return true;
    }else{
         return false;
      }
    }
