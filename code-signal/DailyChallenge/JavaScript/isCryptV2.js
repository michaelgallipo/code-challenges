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
