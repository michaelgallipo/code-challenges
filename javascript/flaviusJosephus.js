function flaviusJosephus(n) {
	let arr = [];

	for (x = 1; x <= 10000; x++) {
		arr.push(x);
	}

	for (x = 1; x <= n; x++) {
		for (y = x; y <= 10000; y += x) {
			if (!arr[y]) {
				y = 10000;
			} else {
				arr.splice(y, 1);
			}
		}
	}
	return arr[n - 1];
}

// The Flavius Josephus sieve is an infinite sequence based on the natural numbers. It can be derived using the following process:

// Start with all the natural numbers, in ascending order.
// In the first step, remove every 2nd value from this sequence.
// In the next step, remove every 3rd value from the remaining sequence.
// Then remove every 4th value from the remaining sequence, and so on.

// Given an integer n, your task is to find the nth number in the Flavius Josephus sieve (1-based).
