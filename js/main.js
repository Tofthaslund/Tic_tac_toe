import Game from "./game.js";

let game = new Game();

game.makeMove(0); //X
game.makeMove(3); //0
game.makeMove(7); //X
game.makeMove(4); //0
game.makeMove(2); //X
game.makeMove(5); //0
console.log(game.board);
console.log(game.findWinningCombination());