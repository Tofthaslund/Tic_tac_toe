import Game from "./game.js";
import GameView from "./gameview.js"

let game = new Game();
let gameview = new GameView(document.getElementById("app"));

// define functions
gameview.onTileClick = function(i) {
    console.log(`Tile clicked: ${i}`);
};

gameview.onRestartClick = function(){
    console.log("Game is restarted!");
};
