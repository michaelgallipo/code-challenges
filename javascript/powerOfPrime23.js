function powersOfPrime23(p) {
    let output = [],
        calc = 0;
    for (x = 0; x <= 25; x++) {
        for (y = 0; y <= 20; y++) {
            calc = 2 ** x - 3 ** y;
            if (Math.abs(calc) === p) {
                output.push(x, y);
            } else if (calc < -p) {
                break;
            }
        }
        if (output.length > 0) {
            break;
        }
    }
    return output;
}

// Given a prime number p, your task is to find powers of 2 and 3 so that |2n - 3m| = p. Return the exponents as an array of the form [n, m]
// If there are multiple possible ways to express p in this form, return the one with the smallest value of n (ie: the one with the lowest power of 2).
// For p = 37 => [6, 3]
// For p = 5 => [2, 3]
