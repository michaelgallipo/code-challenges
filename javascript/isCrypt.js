function isCryptSolution(crypt, solution) {
	let hash = {},
		wA = [],
		nA = [],
		number = "";

	solution.map(x => (hash[x[0]] = x[1]));

	crypt.forEach(word => {
		wA = word.split("");
		number = wA.map(letter => hash[letter]);
		nA.push(number.join(""));
		number = "";
	});
	if (parseInt(nA[0]) + parseInt(nA[1]) === parseInt(nA[2])) {
		if (
			(!nA[0][1] || nA[0][0] !== "0") &&
			(!nA[1][1] || nA[1][0] !== "0") &&
			(!nA[2][1] || nA[2][0] !== "0")
		) {
			return true;
		} else {
			return false;
		}
	} else {
		return false;
	}
}

// A cryptarithm is a mathematical puzzle for which the goal is to find the correspondence between letters and digits,
// such that the given arithmetic equation consisting of letters holds true when the letters are converted to digits.

// If crypt, when it is decoded by replacing all of the letters in the cryptarithm with digits using the mapping in solution, becomes a
// valid arithmetic equation containing no numbers with leading zeroes, the answer is true.
// If it does not become a valid arithmetic solution, the answer is false.
