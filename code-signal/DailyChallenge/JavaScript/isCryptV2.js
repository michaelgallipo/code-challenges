isCryptSolution = (crypt, solution) => {
	let h = {};
	solution.map(k => (h[k[0]] = k[1]));
	let d = crypt.map(word => word.split("").reduce((s, l) => (s += h[l]), ""));
	let z;
	d.map(n => (n[0] == 0 && n.length > 1 ? (z = true) : z));
	d = d.map(w => parseInt(w));
	return !z && d[0] + d[1] == d[2];
};

console.log(
	isCryptSolution(
		["SEND", "MORE", "MONEY"],
		[
			["O", "0"],
			["M", "1"],
			["Y", "2"],
			["E", "5"],
			["N", "6"],
			["D", "7"],
			["R", "8"],
			["S", "9"]
		]
	)
);

// A cryptarithm is a mathematical puzzle for which the goal is to find the correspondence between letters and digits,
// such that the given arithmetic equation consisting of letters holds true when the letters are converted to digits.

// If crypt, when it is decoded by replacing all of the letters in the cryptarithm with digits using the mapping in solution, becomes a
// valid arithmetic equation containing no numbers with leading zeroes, the answer is true.
// If it does not become a valid arithmetic solution, the answer is false.
