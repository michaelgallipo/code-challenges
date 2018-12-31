function digitDegree(n) {
	let nA = n.toString().split("");
	let count = 0,
		sum = 0;

	while (nA.length > 1) {
		count += 1;
		nA.forEach(num => {
			sum += parseInt(num);
		});
		nA = sum.toString().split("");
		sum = 0;
	}
	return count;
}

// Let's define digit degree of some positive integer as the number of times we need to replace
// this number with the sum of its digits until we get to a one digit number.

// For n = 5 => 0
// for n = 100 => 1
// for n = 91 => 2
