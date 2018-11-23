const input = [[true, false, true], [false, true, true], [true, true, false]];
let output = [];
let rowArray = [];
let count = 0;

for (R = 0; R <= input.length - 1; R++) {
  for (C = 0; C <= input[R].length - 1; C++) {
    for (r = R - 1; r <= R + 1; r++) {
      for (c = C - 1; c <= C + 1; c++) {
        if (r < 0 || c < 0 || r > input.length - 1 || c > input.length - 1) {
        } else {
          input[r][c] === true && (r !== R || c !== C) ? (count += 1) : count;
        }
      }
    }
    rowArray.push(count);
    count = 0;
  }
  output.push(rowArray);
  rowArray = [];
}
console.log(output);

