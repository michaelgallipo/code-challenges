var n = 5;
var a = [];
let x = 0;
while (n > 0) {
  if (n < 2) {
    a.unshift(1);
    n = 0;
  }
  while (Math.pow(2, x) <= n) {
    if (Math.pow(2, x + 1) > n) {
      a.unshift(Math.pow(2, x));
      n -= Math.pow(2, x);
      x++;
    } else {
      x++;
    }
  }
  x = 0;
}
console.log(a);
