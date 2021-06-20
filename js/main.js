//import JS script from game.js and gameview.js
import Game from "./game.js";
import GameView from "./gameview.js"

//starting a game inside the div "app"
let game = new Game();
let gameview = new GameView(document.getElementById("app"));

// define functions
gameview.onTileClick = function(i) {
    game.makeMove(i);
    gameview.update(game);
};

gameview.onRestartClick = function(){
    game = new Game();
    gameview.update(game);
};

//run the game
gameview.update(game);
