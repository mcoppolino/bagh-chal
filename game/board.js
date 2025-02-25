export class Board {
    constructor(size, tileSize) {
        this.size = size;
        this.tileSize = tileSize;
        this.pieces = new Map();
    }

    insert(x, y, piece) {
        const key = `${x},${y}`;
        this.pieces.set(key, piece);
    }

    render(svg) {
        svg.innerHTML = "";

        // Draw grid
        for (let i = 0; i <= this.size; i++) {
            let pos = i * this.tileSize;
            svg.appendChild(this.createLine(pos, 0, pos, this.size * this.tileSize, 4));
            svg.appendChild(this.createLine(0, pos, this.size * this.tileSize, pos, 4));
        }

        // Draw diagonals
        for (let row = 0; row < this.size; row+=2) {
            for (let col = 0; col < this.size; col += 2) {
                let x1 = col * this.tileSize;
                let y1 = row * this.tileSize;
                let x2 = (col + 2) * this.tileSize;
                let y2 = (row + 2) * this.tileSize;

                // Draw main diagonals for each square
                svg.appendChild(this.createLine(x1, y1, x2, y2));
                svg.appendChild(this.createLine(x1, y2, x2, y1));
            }
        }
    }

    createLine(x1, y1, x2, y2, stroke=4) {
        let line = document.createElementNS("http://www.w3.org/2000/svg", "line");
        line.setAttribute("x1", x1);
        line.setAttribute("y1", y1);
        line.setAttribute("x2", x2);
        line.setAttribute("y2", y2);
        line.setAttribute("stroke", "black");
        line.setAttribute("stroke-width", stroke.toString());
        return line;
    }
}