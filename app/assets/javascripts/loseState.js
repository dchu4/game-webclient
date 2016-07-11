var gameOver;
var loseState = {
  create: function(){
    gameOver = game.add.text(200, 300,"GAME OVER!", {font: "60px Arial", fill: "#ffffff", align: "center"});
  }
}