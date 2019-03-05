function fibonacciIndex(n) {
	if (n === 1) return 0;
	const f = [0, 1];
	for (x = 2; x <= 100; x++) {
		f.push(f[x - 2] + f[x - 1]);
		if (f[x] / 10 ** (n - 1) >= 1) return x;
	}
}
console.log(fibonacciIndex(2));

// In the Fibonacci Sequence, We can see that 7 is the smallest 0-based index k for which F(k) has exactly 2 decimal digits.
// What is the smallest index k for which F(k) has exactly n decimal digits?
