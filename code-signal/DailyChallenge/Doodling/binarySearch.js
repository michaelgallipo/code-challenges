function binarySearch(arr, n) {
  let min = 0,
    max = arr.length - 1,
    test = Math.trunc(arr.length / 2);
  while (min <= max) {
    console.log(min, max, test);
    if (arr[test] === n) {
      return test;
    } else if (arr[test] < n) {
      min = test + 1;
    } else {
      max = test - 1;
    }
    test = Math.floor((min + max) / 2);
  }
  return -1;
}
console.log(binarySearch([1, 2, 3, 4, 5], 1));
