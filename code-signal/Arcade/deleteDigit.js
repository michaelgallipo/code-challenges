const num = 1005

let arr = num.toString().split('')

arr.splice(0,1,2)
test = arr.join('')

if (test > 3) {
	console.log('passed')
}

console.log(test)