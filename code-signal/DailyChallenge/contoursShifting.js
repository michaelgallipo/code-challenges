const matrix = [[11, 12, 13, 14, 30], 
					[15, 16, 17, 18, 31],
					[19, 20, 21, 22, 32]]

// const newMatrix = [...matrix]

const newMatrix = matrix.map((n) => n.map((n2) => n2 * 0 ))

const first = 0
const last = matrix.length - 1

for (x=0; x<3; x++) {
	for(y=0; y<matrix[0].length; y++) {
		if (x==first) {
			if (y != 0) {
				newMatrix[x][y-1] = matrix[x][y]
			}
			else {
				newMatrix[x+1][y] = matrix[x][y]
			}
		}
		else if (x==last) {
			if (y < matrix[0].length - 1) {
				newMatrix[x][y+1] = matrix[x][y]
			}
			else {
				newMatrix[x-1][y] = matrix[x][y]
			}
		}
		else {
			if (y == 0) {
				newMatrix[x+1][y] = matrix[x][y]
			}
			else {
				newMatrix[x-1][y] = matrix[x][y]
			}
		}
	}
}

console.log(matrix)
console.log(newMatrix)



