// Variables
var playerHeight = 80
var playerWidth = 20
var playerSpeed = 8
var playerL = 200
var playerR = 200

var scoreL = 0
var scoreR = 0

var ballX = 300
var ballY = 200
var ballSize = 20
var ballXSpeed = 4
var ballYSpeed = -2



function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
 
  // draw left player
  rect(0, playerL, playerWidth, playerHeight);
 
  // draw right player
  rect(width-playerWidth, playerR, playerWidth, playerHeight);
 
  // draw ball
  ellipse(ballX, ballY, ballSize)
 
 
  /* User Input */
  // 'W' key
  if (keyIsDown(87)) {
    playerL = playerL - playerSpeed
  }
  // 'S' key
  if (keyIsDown(83)) {
    playerL = playerL + playerSpeed
  }
 
  if (keyIsDown(UP_ARROW)) {
    playerR = playerR - playerSpeed
  }
  if (keyIsDown(DOWN_ARROW)) {
    playerR = playerR + playerSpeed
  }
 
  /* Game logic */
  if (playerL <= 0) {
    playerL = 0;
  }
  if (playerL > height - playerHeight) {
    playerL = height - playerHeight;
  }
 
  if (playerR <= 0) {
    playerR = 0;
  }
  if (playerR > height - playerHeight) {
    playerR = height - playerHeight;
  }
 
  ballX = ballX + ballXSpeed
  ballY = ballY + ballYSpeed
 
  // Bounce off top wall
  if (ballY < 0) {
    ballY = 0;
    ballYSpeed = -ballYSpeed;
  }

  // Bounce off bottom wall
  if (ballY > height) {
    ballY = height;
    ballYSpeed = -ballYSpeed;
  }
 

 
 
 
  // bounce off right player
  //console.log("playerL is " + playerL + " ballX is " + ballX + " ballY is " + ballY);


 
    // Bounce off left wall
  if (ballX <= 30 && (ballY >= playerL && ballY <= playerL+80)) 
  {
    ballX = 30;   
    ballXSpeed = -ballXSpeed;
  }
 
  else if (ballX < 0)
  {
    //PlayerR Scores
    ballX = width/2
    ballY = height/2
    scoreR = scoreR + 1
    ballXSpeed = - ballXSpeed
  }
 

  // Bounce off right wall
  else if (ballX > width-30 && (ballY >= playerR && ballY <= playerR+80)) {
    ballX = width-30;
    ballXSpeed = -ballXSpeed;
  }
 
  else if (ballX > width)
  {
    // playerL Scores
    ballX = width/2
    ballY = height/2
    scoreL = scoreL + 1
    ballXSpeed = - ballXSpeed
  }
 
  //console.log("PlayerL score is " + scoreL + " PlayerR score is " + scoreR);
var scoreLText = "scoreL is " + scoreL;
var scoreRText = "scoreR is " + scoreR;
 textSize(32);
text(scoreLText, 30, 30);
fill(0, 102, 153);
  textSize(32);
text(scoreRText, 380, 30);
fill(0, 102, 153);
}
