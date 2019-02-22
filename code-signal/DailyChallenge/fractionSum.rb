def fractionSum(a, b)

	least = a[1].lcm(b[1])

	num = a[0] * least / a[1] + b[0] * least / b[1]


	gcd = num.gcd(least)


	return [num / gcd, least / gcd]




end

 p fractionSum([2, 3], [2, 5]) # => [16, 15]
 p fractionSum([3, 5], [7, 5]) # => [2, 1]

 # Implement a function that can sum two reduced fractions and produce a new one.