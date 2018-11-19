const scores = [100, 20, 50, 70, 45];
let mean = 0;
let ma = [];
let raw = 0;

for (i = 0; i <= scores.length - 1; i++) {
  mean = (raw + scores[i]) / (i + 1);
  ma.push(Math.trunc(mean));
  raw += scores[i];
}

console.log(ma);

// Given scores, an array of integers representing all your test and assignment grades, your task is to return an array of integers where output[i] represents the mean of all your scores up to index i. Your instructor is a harsh marker, so she always rounds the result down to the nearest integer.
// for [100, 20, 50, 70, 45] => [100, 60, 56, 60, 57]


