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

function digitDegree(n) {
  let c = 0;
  while (n > 9) {
    c++;
    let a = n.toString().split("");
    n = a.reduce((tot, num) => tot + parseInt(num), 0);
  }
  return c;
}

console.log(digitDegree(91));
