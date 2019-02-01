// function maxFraction(n, d) {
//     // let max = 0, t = 0, i = 0;
//     // for (x=0; x<n.length; x++) {
//     //     t = n[x] / d[x]
//     //     if (t > max) {
//     //         max = t
//     //         i = x
//     //     }
//     // }
//     // return i
//     let max = 0
// }

// original solution, refactored code below


function maxFraction(n, d) {

	let max = [0, 0]

	n.map((x, i) => max = x/d[i] > max[0] ? [x/d[i], i] : max)

	return max
}

// takes two arrays, returns the index of the largest fraction