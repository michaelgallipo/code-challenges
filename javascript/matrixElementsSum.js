let matrix = [[1, 1, 1, 0], [0, 5, 0, 1], [2, 1, 3, 10]];

const height = matrix.length;
const width = matrix[0].length;
let sum = 0;

for (i = 0; i <= height - 1; i++) {
  for (i2 = 0; i2 <= width - 1; i2++) {
    if (matrix[i][i2] !== 0) {
      sum += matrix[i][i2];
    } else if (matrix[i][i2] === 0 && i < height) {
      for (i3 = i + 1; i3 <= height - 1; i3++) {
        matrix[i3].splice([i2], 1, 0);
      }
    }
  }
}
console.log(sum);
