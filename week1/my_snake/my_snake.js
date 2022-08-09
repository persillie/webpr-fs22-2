let my_snake = [{x:10, y:10}]

//let food = {x: 200, y:200}

function start() {
    const canvas = document.getElementById("canvas");
    const context = canvas.getContext("2d");
    context.fillStyle = "black";
    context.fillRect(0, 0, canvas.width, canvas.height);
    //TODO: cont
}
function samePosition(a, b) {
    return (a.x === b.x && a.y === b.y);
}

function moveRight(elem) {
    elem.x = elem.x + 1;
}
/*function paintRect(color, x, y) {
    context.fillStyle = color;
    return context.fillRect(x, y, 10, 10);
}*/


function nextBoard() {

}

function display(context) {

}

setInterval(() => {
    nextBoard();
    //display(context);
}, 1000 / 5);

