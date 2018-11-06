function alternatingSums(a) {
  let sum1 = 0;
  let sum2 = 0;
  let outputArray = [];
  a.forEach(function(number, index) {
    if (index % 2 === 0 || index === 0) {
      sum1 += number;
    } else {
      sum2 += number;
    }
  });
  outputArray.push(sum1, sum2);
  return outputArray;
}
// Takes an array and sums alternating amounts
// for array [50, 60, 60, 45, 70]
// output should be 180, 105]
