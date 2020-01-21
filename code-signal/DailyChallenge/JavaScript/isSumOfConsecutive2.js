function isSumOfConsecutive2(n) {
  let count = 0,
    start = Math.floor(n / 2) + 1,
    end = n;
  while (end > 1) {
    let tot = 0;
    let i = 0;
    while (tot < n) {
      tot += start - i;
      if (tot === n) {
        count++;
        break;
      }
      if (start - i === 1) {
        break;
      }
      i++;
    }
    end = start - i;
    start--;
  }
  return count;
}
console.log(isSumOfConsecutive2(9));
