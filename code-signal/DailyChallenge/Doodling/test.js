// arr = [1,2,3,4,5,6,1,2]

// let hash = {}

// arr.forEach((num) => {
// 	if (!hash[num]) {
// 		hash[num] = true
// 	}
// })

// console.log(Object.keys(hash).length)

// const array = ["abc", "def", "ghi"]

// const maxLength = array.reduce((max, word) => { return word.length > max ? word.length : max}, 0)

// const isMaxLength = word => word.length === maxLength

// const longestWords = array => array.filter(isMaxLength)

// console.log(longestWords(array))

// const str = "hastalavistababy"

// const hash = {}

// str.split('').map((char) => { hash[char] = hash[char] + 1 || 1})

// const arr = Object.entries(hash).sort((a, b) => b[1] - a[1])

// console.log(arr[0][0])

// function numberOf55s(numbers) {
// 	// return numbers.reduce((count, num) => num === 55 ? count += 1 : count, 0)
// 	return numbers.filter((num) => num === 55).length

// }
// console.log(numberOf55s([55, 1, 2, 3, 55, 55]))

// var num = 10

// if (num === "10") {
// 	console.log("equal");
// }
// else {
// 	console.log("not equal")
// }

// function sameFrequency(n1, n2){
//   let a1 = n1.toString().split('').sort();
//   let a2 = n2.toString().split('').sort();
//   let result = true
//   console.log(a1, a2)
//   if (a1.length !== a2.length) {
//       result = false
//   }
//   a1.forEach((num, i) => {
//       if (num !== a2[i]) {
//           result = false
//       }
//   })
//   return result
// }

// console.log(sameFrequency(34, 14))

// function areDuplicates() {
// 	a = [...arguments]
// 	a.sort();
// 	for (x=1; x<a.length; x++) {
// 		if (a[x -1] === a[x]) {
// 			return true
// 		}
// 	}

// 	return false
// }

// console.log(areDuplicates('a', 'b', 'c', 'a'))

// function averagePair(arr, avg){
//   let x;
//   for (x=1; x<arr.length; x++) {
//       if ((arr[x-1] + arr[x]) / 2 === avg) {
//           return true
//       }
//   }
//   return false
// }

// console.log(averagePair([1,3,3,5,6,7,10,12,19], 8))

// function maxSubarraySum(arr, n){
//   let max = -Infinity, x, subT = 0, i = 0, i2 = n - 1;
//   for (x=0; x<n; x++) {
//       subT += arr[x]
//       max = subT
//   }
//   while (i2 <= arr.length - n) {
//       i2 += 1;
//       subT = subT - arr[i] + arr[i2]
//       console.log(subT)
//       subT > max ? max = subT : max
//       i += 1;
//   }
//   return max
// }

// console.log(maxSubarraySum([100,200,300,400], 2))

// arr = [1, 2, 3, 4];

// console.log(arr.splice(0, 1));

// console.log(arr);

// function fib(n) {
//   if (n <= 2) {
//     return 1;
//   } else {
//     return fib(n - 1) + fib(n - 2);
//   }
// }
// console.log(fib(6));

// METHOD TO REVERSE A STRING USING RECURSION

// function reverse(str) {
//   let arr = str.split("");
//   if (arr.length === 1) {
//     return arr[0];
//   } else {
//     return arr.pop().concat(reverse(arr.join("")));
//   }
// }
// console.log(reverse("awesome"));

// function digitDegree(n) {
//   let c = 0;
//   while (n > 9) {
//     c++;
//     let a = n.toString().split("");
//     n = a.reduce((tot, num) => tot + parseInt(num), 0);
//   }
//   return c;
// }

// console.log(digitDegree(91));

// function binarySearch(arr, n) {
//   let min = 0,
//     max = arr.length - 1,
//     test = Math.trunc(arr.length / 2);
//   while (min <= max) {
//     console.log(min, max, test);
//     if (arr[test] === n) {
//       return test;
//     } else if (arr[test] < n) {
//       min = test + 1;
//     } else {
//       max = test - 1;
//     }
//     test = Math.floor((min + max) / 2);
//   }
//   return -1;
// }
// console.log(binarySearch([1, 2, 3, 4, 5], 1));

// arr = [1, 2, 3, 4, 5, 6, 7, 8];

// let even = arr.map((num, index) => {
//   index;
// });

// console.log(even);
// const matrix = [[1, 0, 0, 0], [0, 5, 0, 0], [0, 0, 0, 0], [0, 0, 0, 1000]];

// let l = matrix.length - 1;
// for (x = 0; x < l; x++) {
//   let s = matrix[x].slice(x + 1, l + 1).filter(num => num !== 0);
// }
// const a = [5, 6, 5];

// let test = new Set(a);

// console.log(test);

// let arr = [3, 2, 4, 1];

// flip = arr.splice(0, 3);
// flip.reverse();
// arr = [...flip, ...arr];
// arr.reverse();

// console.log(arr);

// const a = 3,
//   b = 4;
// const str = "cabca";

// let arr = str.split("");
// let h = {};
// let c = 0;

// arr.map(letter => (h[letter] ? c : (c += 1)));
// console.log(c);

// console.log(h);

// let n = 1122;

// let a = n.toString().split("");

// let b = a.filter(num => num === a[0]);

// console.log(a.length === b.length);

// let s = n.toString();
// for (x=1; x<s.length; x++) {
//   if (s[0] !== s[x])
// }

// let a = [2, 3, 4, 6, 10];
// let h = {};
// a.map(num => (h[num] = true));

// for (x = 0; x < a.length; x++) {
//   if (h[a[x] + 2] || h[a[x] - 2]) {
//     console.log(true, a[x]);
//   }
// }

// let a = ["the", "quick", "brown", "fox"],
//   x;

// a.sort((a, b) => b.length - a.length);
// x = a[0].length;
// a = a.every(w => w.length === a[0].length);

// for (x = 0; x < 4; x++) {
//   const o = [];
//   o.push(a[x]);
// }
// console.log(a);

// const a = "A";
// const b = "C";
// let c = Math.abs(a.charCodeAt(0) - b.charCodeAt(0));
// let c = a[0] - b[0];
// console.log(c);

// let n = 90;

// let answer =
// 	n <= 90 ? (n < 90 ? "actute" : "right") : n === 180 ? "straight" : "obtuse";
//
// console.log(answer);
// let a = [1, 2, 3, 4];
// console.log(a.pop() - a.shift());

// let a = [1, 2, 3, 4, 5];
// let b = a.sort((x, y) => y.index - x.index);
// console.log(b);

// let str = "Hello";
// a = str.split("");
// let b = a.map(letter =>
//   /[a-z]/.test(letter) ? letter.toUpperCase() : letter.toLowerCase()
// );
// console.log(b);

// const s = [0, 0];

// console.log(s[0] == [s[1]]);
// const a = [4, 3, 6, 8, 2, 4];

// let b = a.filter(num => num % 2 === 0).sort((a, b) => b - a)[0];

// let c = a.reduce((n, l) => (n % 2 == 0 && n > l ? (l = n) : l));

// console.log(b, c);

// let a = [-3, -2, -10];

// let b = a.sort((x, y) => y - x);

// console.log(b)

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let c = arr.map(num => num * 2);
// let b = arr.filter(num => num % 3 === 0);
// console.table(b);

// let name = "qgg-23g";

// let r = !/[^a-zA-Z0-9_]/g.test(name) && /[^0-9]/.test(name[0])

// console.log(r)

// let a = [19, 32, 11, 23]
// let z = [...a]
// z.sort((a, b) => a - b)
// console.log(z[0], a)
// let y = a.findIndex(x => x == z[0])
// console.log(y)

// function sumCubes(n) {
//   if (n < 2)  1;

//   return n ** 3 + sumCubes(n - 1);

// }

// console.log(sumCubes(3));

// let s = "abcde";

// let z = s.slice(1, 3);

// console.log(z);

// let a = [1, 2, 3, 4, 5, 6, 7, 8],
//   b = [];

// for (x = 0; x < a.length; x++) {
//   let z = a[x] + a[x + 1];
//   a.splice(x, 2, z);
// }
// console.log(a);

// this.handleClick = this.handleClick.bind(this)
// }

// handleClick() {
//     this.setState(prevState => {
//         return {
//             count: prevState.count + 1
//         }
//     })
// }

let a = ["A", "C"];
let l = a.length - 1,
  t = 0;
// let t = a.reduce((tot, ltr) => {
// 	console.log(ltr, ltr.charCodeAt(0));
// 	let val = (ltr.charCodeAt(0) - 64) ** l;
// 	return tot + val;
// });
a.forEach(ltr => {
  let val = ltr.charCodeAt(0) - 64;
  console.log(ltr, val);
  t += val;
  l--;
});
console.log(t);
