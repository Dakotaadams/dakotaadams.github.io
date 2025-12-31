var canvas = document.getElementById("game");
var ctx = canvas.getContext("2d");

var x = 40;
var y = 40;
var size = 15;

var speedY = 0;
var gravity = 0.4;

var obsX = 300;
var obsY = 100;
var obsW = 20;
var obsH = 40;
var obsSpeed = 2;

var score = 0;
var over = false;

document.addEventListener("keydown", function(e) {
  if (e.key === " ") {
    if (over === true) {
      y = 40;
      speedY = 0;
      obsX = 300;
      score = 0;
      over = false;
    } else {
      speedY = -7;
    }
  }
});

function update() {
  if (over === false) {
    speedY = speedY + gravity;
    y = y + speedY;

    obsX = obsX - obsSpeed;
    if (obsX < 0) {
      obsX = 300;
      score = score + 1;
    }

    if (x + size > obsX && x < obsX + obsW && y + size > obsY && y < obsY + obsH) {
      over = true;
    }

    if (y + size > 200) {
      over = true;
    }

    if (y < 0) {
      y = 40;
      speedY = 0;
      obsX = 300;
      score = 0;
      over = false;
    }
  }
}

function draw() {
  ctx.clearRect(0, 0, 300, 200);

  ctx.fillStyle = "blue";
  ctx.fillRect(x, y, size, size);

  ctx.fillStyle = "red";
  ctx.fillRect(obsX, obsY, obsW, obsH);

  ctx.fillStyle = "black";
  ctx.fillText("Score: " + score, 10, 15);

  if (over === true) {
    ctx.fillText("Game Over :(", 110, 100);
  }
}

function loop() {
  update();
  draw();
}

setInterval(loop, 25);
