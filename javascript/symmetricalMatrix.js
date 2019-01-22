function symmetricalMatrix(n, inputMatrix) {
	let y = inputMatrix[0].length - 1;
	for (i = 0; i <= Math.floor(inputMatrix.length / 2); i++) {
		if (inputMatrix[i][y] !== inputMatrix[y][i]) {
			return false;
		}
		y -= 1;
	}
	return true;
}
