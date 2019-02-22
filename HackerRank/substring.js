// let s = 'abcabdabe'

// let a = [], h = {};
// let max = 1
// let x
// for (i = 2; i<=4; i++) {
// 	x = 0
// 	while (x < s.length - i + 1) {
// 		let subS = s.slice(x, x+i)
// 		a.push(subS)
// 		x += 1
// 	}
// }
// a.forEach((str) => {
// 		!h[str] ? h[str] = 1 : h[str] += 1
// 		h[str] > max ? max = h[str] : max

// })
// console.log(a)
// console.log(max)

let s = 'abcabdabe'

let h = {};
let max = 1
let x
for (i = 2; i<=4; i++) {
	x = 0
	while (x < s.length - i + 1) {
		let subS = s.slice(x, x+i)
		h[subS] = !h[subS] ?  1 : ++
		h[subS] > max ? max = h[subS] : max
		x += 1
	}
}

console.log(max)