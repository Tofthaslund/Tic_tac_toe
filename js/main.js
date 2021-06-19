import Game from "./game.js";
import GameView from "./gameview.js"

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

gameview.update(game);
