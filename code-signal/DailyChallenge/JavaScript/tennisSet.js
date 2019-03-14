const score1 = 5;
const score2 = 7;
let h, l;
if (score1 > score2) {
  (h = score1), (l = score2);
} else {
  (h = score2), (l = score1);
}
if (h > 7 || h < 6 || (h > 6 && l < 5) || (h - l < 2 && (h !== 7 || l !== 6))) {
  console.log(false);
} else {
  console.log(true);
}

console.log(h, l);
