function multiple(arr) {
  let s = 13;
  while (s < 1000) {
    if (arr.filter(num => s % num === 0).length > 0) {
      return s;
    } else {
      s++;
    }
  }
}
console.log(multiple([2, 3, 4]));
