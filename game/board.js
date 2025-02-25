
export class Board {
    constructor(size = 4, tileSize = 50) {
        this.size = size;
        this.tileSize = tileSize;
    }

    generateBoard() {
        let board = `<svg class='board' width='${this.size * this.tileSize}' height='${this.size * this.tileSize}'>`;

        // grid
        for (let i = 1; i < this.size; i++) {
            let pos = i * this.tileSize;
            board += `<line x1='${pos}' y1='0' x2='${pos}' y2='${this.size * this.tileSize}' stroke='black' stroke-width='2' />`;
            board += `<line x1='0' y1='${pos}' x2='${this.size * this.tileSize}' y2='${pos}' stroke='black' stroke-width='2' />`;
        }

        // diagonals
        for (let row = 0; row < this.size; row++) {
            for (let col = 0; col < this.size; col++) {
                const x1 = col * this.tileSize;
                const y1 = row * this.tileSize;
                const x2 = (col + 1) * this.tileSize;
                const y2 = (row + 1) * this.tileSize;

                board += `<line x1='${x1}' y1='${y1}' x2='${x2}' y2='${y2}' stroke='black' stroke-width='2' />`;
                board += `<line x1='${x1}' y1='${y2}' x2='${x2}' y2='${y1}' stroke='black' stroke-width='2' />`;
            }
        }

        board += "</svg>";
        return board;
    }
}
