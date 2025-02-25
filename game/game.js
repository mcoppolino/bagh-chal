
import { Board } from "./board.js";

export class Game {
    constructor(size = 4, tileSize = 50) {
        this.board = new Board(size, tileSize);
    }

    render(parentElement) {
        parentElement.innerHTML = this.board.generateBoard();
    }
}
