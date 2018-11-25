function evenDigitsOnly(n) {
  let nA = n.toString(10).split("");
  let r = true;
  nA.map(num => {
    num % 2 === 0 ? num : (r = false);
  });
  return r;
}

// tests whether a number consists only of even numbers
// for n = 22448862 => true
// for n = 88426874 => false
