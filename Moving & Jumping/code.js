const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");


let x = 300;
let y = 350;
const size = 30;

let vx = 0;                
let vy = 0;                
const speed = 3;            
const jumpStrength = -10;   
const gravity = 0.4;        
let leftPressed = false;
let rightPressed = false;
let upPressed = false;

document.addEventListener("keydown", keyDownHandler);
document.addEventListener("keyup", keyUpHandler);

function keyDownHandler(e) {
    if (e.key === "ArrowLeft") leftPressed = true;
    if (e.key === "ArrowRight") rightPressed = true;
    if (e.key === "ArrowUp") upPressed = true;
}

function keyUpHandler(e) {
    if (e.key === "ArrowLeft") leftPressed = false;
    if (e.key === "ArrowRight") rightPressed = false;
    if (e.key === "ArrowUp") upPressed = false;
}

function updateMovement() {

    if (leftPressed) {
        vx = -speed;
    } else if (rightPressed) {
        vx = speed;
    } else {
        vx = 0; 
    }

    if (upPressed && y >= 350) {
        vy = jumpStrength;
    }

    vy += gravity;


    x += vx;
    y += vy;


    if (y > canvas.height - size) {
        y = canvas.height - size;
        vy = 0;
    }

    if (x + size < 0) {
        x = canvas.width;
    }
    if (x > canvas.width) {
        x = -size;
    }

}
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    
    ctx.fillStyle = "red";
    ctx.fillRect(x, y, size, size);

    updateMovement();

    requestAnimationFrame(draw);
}

draw();
