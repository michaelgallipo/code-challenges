function digitDegree(n) {
  let c = 0;
  while (n > 9) {
    c++;
    let a = n.toString().split("");
    n = a.reduce((tot, num) => tot + parseInt(num), 0);
  }
  return c;
}

console.log(digitDegree(91));