export default class GameView {
    constructor(root) {
        this.root = root;
        this.root.innerHTML = `
            <div class="header">
                <div class="header__turn">
                    X's turn
                </div>
                <div class="header__status">
                    In Progress
                </div>
                <button type="button" class="header__restart">
                    <i class="material-icons">refresh</i>
                </button>
            </div>
            <div class="board">
                <div class="board__tile" data-index="0">0</div>
                <div class="board__tile" data-index="1">1</div>
                <div class="board__tile" data-index="2">2</div>
                <div class="board__tile" data-index="3">3</div>
                <div class="board__tile" data-index="4">4</div>
                <div class="board__tile" data-index="5">5</div>
                <div class="board__tile" data-index="6">6</div>
                <div class="board__tile" data-index="7">7</div>
                <div class="board__tile" data-index="8">8</div>
            </div>

        `;
    }
}