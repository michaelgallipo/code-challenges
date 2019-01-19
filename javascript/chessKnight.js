function chessKnight(cell) {
    let hash = { a: 0, b: 1, c: 2, d: 3, e: 4, f: 5, g: 6, h: 7 };
    let y = 0,
        total = 0;
    let startx = hash[cell[0]];
    let starty = parseInt(cell[1]) - 1;
    for (x = 2; x >= -2; x--) {
        if (x !== 0) {
            y = 3 - Math.abs(x);
            if (startx + x >= 0 && startx + x <= 7) {
                if (starty + y >= 0 && starty + y <= 7) {
                    total += 1;
                }
                if (starty - y >= 0 && starty - y <= 7) {
                    total += 1;
                }
            }
        }
    }
    return total;
}
// return number of legal moves for a knight given any starting position on the board.
