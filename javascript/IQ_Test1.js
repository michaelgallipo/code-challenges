function IQ_TestI(test) {
	let maxA = test[0].length - 1;
	let maxB = test.length - 1;
	let a = 1,
		b = 0;
	let operations = [];

	while (test[b][a] !== "=") {
		operations.push(test[b][a]);
		if (a < maxA && b < maxB && a > 0) {
			a += 1;
		} else if (a <= maxA && b === maxB && a > 0) {
			a -= 1;
		} else if (a === maxA && b < maxB) {
			b += 1;
		} else if (a < 0) {
			break;
		} else {
			b -= 1;
		}
	}

	let solved = false,
		x = 1,
		subT = 1.0,
		num = 0;

	while (!solved) {
		for (i = 0; i < operations.length; i++) {
			num = parseInt(operations[i + 1]);
			if (operations[i] === "+") {
				subT += num;
			} else if (operations[i] === "-") {
				subT -= num;
			} else if (operations[i] === "*") {
				subT *= num;
			} else if (operations[i] === "/") {
				subT /= num;
			} else {
				i -= 1;
			}
			i += 1;
		}
		if (subT === x) {
			solved = true;
		} else {
			x += 1;
			subT = x;
		}
	}
	return x;
}
