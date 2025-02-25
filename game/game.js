import { Board } from "./board.js";

export class Game {
    constructor(size = 4, tileSize = 100) {
        this.board = new Board(size, tileSize);
        this.svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        this.svg.setAttribute("width", (size * tileSize).toString());
        this.svg.setAttribute("height", (size * tileSize).toString());
    }

    initialize() {
        document.getElementById("app").appendChild(this.svg);
    }

    render() {
        this.board.render(this.svg);
    }
}
