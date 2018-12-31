function gameWithPointsOnThePlane(pieces) {
	let hashA = [],
		output = [],
		temp = [];

	pieces.forEach((piece, index) => {
		Math.abs(piece[0]) > Math.abs(piece[1])
			? (val = Math.abs(piece[0]))
			: (val = Math.abs(piece[1]));
		temp.push(val, index);
		hashA.push(temp);
		temp = [];
	});

	hashA = hashA.sort((a, b) => a[0] - b[0]);

	for (i = 0; i < hashA.length; i++) {
		if (hashA[i][0] >= i + 1) {
			output.push(hashA[i][1]);
		} else {
			output = [];
			break;
		}
	}
	return output;
}
// Here are the rules of the game: Gerda moves first and at each move she can destroy exactly 1 sharp piece on the plane.
// The Snow Queen moves second, and at each move she moves all remaining pieces in one of the 8 neighbor points (different pieces
// can be moved in different directions). If any sharp ice piece reaches point (0, 0), the Snow Queen wins and Kai will stay with her
// forever.

// If it is possible for Gerda to destroy all ice pieces before any of them reach point (0, 0), return the sequence of pieces
// indices (0-based) in which they should be destroyed. In case it is impossible and the Snow Queen will win anyway, return empty array.

// For pieces = [[1, 1], [1, 6], [2, 3]] => [0, 1, 2]
// For pieces = [[1, 1], [1, -1]] => []
