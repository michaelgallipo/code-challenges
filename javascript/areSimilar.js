let a = [1];
let b = [1];
let mismatch = [];

for (i = 0; i <= a.length - 1; i++) {
  if (a[i] !== b[i]) {
    mismatch.push(a[i], b[i]);
  }
}

if (mismatch.length !== 4) {
  console.log("false");
} else if (mismatch[0] === mismatch[3] && mismatch[1] === mismatch[2]) {
  console.log("true");
} else {
  console.log("false");
}
