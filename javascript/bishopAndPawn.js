function bishopAndPawn(bishop, pawn) {
	let col = { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8 };
	if (
		Math.abs(col[bishop[0]] - col[pawn[0]]) ===
		Math.abs(bishop[1] - pawn[1])
	) {
		return true;
	} else {
		return false;
	}
}

// determine whether a bishop can capture a pawn in one move
