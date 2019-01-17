function test(n, k) {
	let x, y, z;
	function factorial(num) {
		while (num >= 0) {
			if (num < 2) {
				return 1;
			} else {
				return num * factorial(num - 1);
			}
		}
	}

	function partial(num, p) {
		console.log(p);
		while (num > p) {
			if (num < p + 2) {
				return p + 1;
			} else {
				return num * partial(num - 1, p);
			}
		}
	}
	// if (k >= n - k) {
	// 	z = factorial(n - k);
	// 	y = factorial(k);
	// 	x = partial(n, k) * y;
	// } else {
	// 	z = factorial(n - k);
	// 	y = factorial(k);
	// 	x = partial(n, n - k) * z;
	// }

	x = factorial(n);
	y = factorial(k);
	z = factorial(n - k);

	let answer = Math.round(x / (y * z));

	console.log(answer);
}

test(70, 25);
