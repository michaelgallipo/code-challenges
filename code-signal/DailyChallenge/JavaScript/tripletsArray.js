let arr = [1, 2, 10, 5, 12, 8, 2];

arr.sort((a, b) => a - b);

let count = 0;

for (a=0; a<arr.length - 2; a++) {
  for (b = a+1; b<arr.length - 1; b++) {
    for (c = b+1; c<arr.length; c++) {
      if (arr[a] + arr[b] <= arr[c]) {
        break
      }
      if (arr[a] + arr[c] > arr[b] && arr[b] + arr[c] > arr[a]) {
        count ++
      }
    }
  }
}
console.log(count);
