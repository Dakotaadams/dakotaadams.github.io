const canvas = document.getElementById("art");
const ctx = canvas.getContext("2d");

const W = canvas.width;
const H = canvas.height;

const size = 4; 
const centerStart = 140;
const centerEnd = 340;

const colors = ["#000000", "#555555", "#aaaaaa"];

function drawSquare(x, y, colorIndex) {
  ctx.fillStyle = colors[colorIndex];
  ctx.fillRect(x, y, size, size);
}

for (let y = 0; y < H; y += size) {
  for (let x = 0; x < W; x += size) {

    let shift;
    if (x > centerStart && x < centerEnd && y > centerStart && y < centerEnd) {
      shift = Math.floor((centerEnd - y) / 6);
    } else {
      shift = Math.floor(y / 6);
    }

    const value = ((x + shift * size) / size) % 3;

    let colorIndex = Math.floor(value);

    drawSquare(x, y, colorIndex);
  }
}
