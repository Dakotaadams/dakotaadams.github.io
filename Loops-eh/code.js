const canvasSize = 400;
const squareSize = 20;
const spacing = 10;

const spiral = document.getElementById("spiralCanvas");
const sctx = spiral.getContext("2d");

let angle = 0;            
let step = 2;             
let radius = 5;           
let maxRadius = 180;     

while (radius < maxRadius) {
    let x = 200 + radius * Math.cos(angle);
    let y = 200 + radius * Math.sin(angle);

    sctx.fillStyle = "yellow";
    sctx.fillRect(x, y, squareSize, squareSize);

    angle += 0.25;
    radius += step;
}
const checker = document.getElementById("checkerCanvas");
const cctx = checker.getContext("2d");

const rows = 10;
const cols = 10;

for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {

        let x = spacing + c * (squareSize + spacing);
        let y = spacing + r * (squareSize + spacing);

        if ((r + c) % 2 === 0) {
            cctx.fillStyle = "red";
        } else {
            cctx.fillStyle = "black";
        }

        cctx.fillRect(x, y, squareSize, squareSize);
    }
}
