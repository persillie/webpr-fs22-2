// canvas 400x400px
// ball size 18 diameter
// mit (20x20) x (20x20) erhalte ich ein Raster von 20 slots,
// in denen ein 18px Ball Platz hat.
// Und ich muss mir nur 20 Plätze merken.
// je nachdem wie ein Kreis gebaut wird, muss ich mir aber 10 Stellen merken.

let my_ball = {x:1, y:1};
let direction = {h:'right', v:'down'};
const radius = 9;

function start() {
    const canvas  = document.getElementById("canvas");

    const context = canvas.getContext("2d");
    setInterval(() => {
        //nextBoard();
        move(my_ball);
        display(context);
    }, 1000 / 20);

}

// needed to test
function same_position(ball, pos){
    return ball.x === pos.x && ball.y === pos.y;
}

function right(ball) {
    let dx = ball.y / 80;
    ball.x += 7 - dx;
}
function left(ball) {
    let dx = ball.y / 80;
    ball.x -= 7 - dx;
}

function down(y){
    return y > 10? y+y/10:y+1;
}

function up(y){
    return y > 10? y-(y/10):y-1;
}

const horizontal = ['right', 'left', 'right'];
const vertical = ['down', 'up', 'down'];

function switchHorizontal(){
    const dir = horizontal.indexOf(direction.h);
    direction.h = horizontal[dir+1];
}

function switchVertical(){
    const dir = vertical.indexOf(direction.v);
    direction.v = vertical[dir+1];
}

function move(ball){
    // TODO make equal: the vertical functions are better testable
    direction.h === 'right'?right(ball):left(ball);
    ball.y = direction.v === 'down'? down(ball.y): up(ball.y);
}

function display(context){
    // clear canvas
    context.fillStyle = "yellow";
    context.fillRect(0, 0, canvas.width, canvas.height);
    // paint ball
    context.fillStyle = "black";
    context.beginPath();
    context.arc(my_ball.x, my_ball.y, radius, 0, 2 * Math.PI);
    context.fill();
}
