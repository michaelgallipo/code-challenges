// Version 1

function commonCharacterCount(s1, s2) {
  let a = s1.split(""),
    b = s2.split("");
  let d = {},
    e = {},
    c = 0;
  a.forEach(l => {
    d[l] ? d[l]++ : (d[l] = 1);
  });
  b.forEach(l => {
    e[l] ? e[l]++ : (e[l] = 1);
  });
  let k = Object.keys(d);
  k.forEach(l => {
    if (e[l]) {
      d[l] < e[l] ? (c += d[l]) : (c += e[l]);
    }
  });

  return c;
}
console.log(commonCharacterCount("bbzz", "zzzbzzz"));

// Version 2

function commonCharCount(s1, s2) {
  let a = s1.split("").sort(),
    b = s2.split("").sort();
  let x = 0,
    y = 0,
    c = 0;
  while (x < a.length && y < b.length) {
    if (a[x] === b[y]) {
      c += 1;
      x += 1;
      y += 1;
    } else {
      a[x] > b[y] ? (y += 1) : (x += 1);
    }
  }
  console.log(c);
}
commonCharCount("bbzz", "zzzbzzz");

// Given two strings, find the number of common characters between them.
// For s1 = "aabcc" and s2 = "adcaa" => 3
