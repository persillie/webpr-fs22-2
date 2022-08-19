// canvas 400x400px
// ball size 18 diameter
// mit (20x20) x (20x20) erhalte ich ein Raster von 20 slots,
// in denen ein 18px Ball Platz hat.
// Und ich muss mir nur 20 Plätze merken.
// je nachdem wie ein Kreis gebaut wird, muss ich mir aber 10 Stellen merken.

let my_ball = {x:1, y:1}

function start() {
    const canvas  = document.getElementById("canvas");

    const context = canvas.getContext("2d");
    setInterval(() => {
        //nextBoard();
        move(my_ball);
        display(context);
    }, 1000 / 20);

}

function same_position(ball, pos){
    return ball.x === pos.x && ball.y === pos.y;
}

function move(ball){
    let dx = ball.y/80;
    ball.x += 7-dx;
    ball.y +=ball.y >7 ?ball.y/7:1; //Die Geschwindigkeit nimmt in 5er Schritten zu
}


function display(context){
    // clear canvas
    context.fillStyle = "yellow";
    context.fillRect(0, 0, canvas.width, canvas.height);
    // paint ball
    context.fillStyle = "black";
    context.beginPath();
    context.arc(my_ball.x, my_ball.y, 18, 0, 2 * Math.PI);
    context.fill();
}
