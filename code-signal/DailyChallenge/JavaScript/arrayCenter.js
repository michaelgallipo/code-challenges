const arrayCenter = a => {
  let min = Math.min(...a);
  let avg = a.reduce((tot, num) => tot + num) / a.length;
  return a.filter(num => Math.abs(num - avg) < min);
};

console.log(arrayCenter([8, 3, 4, 5, 2, 8]));

// Consider an array of integers a. Let min(a) be its minimal element, and let avg(a) be its mean.
// Define the center of the array a as array b such that:
// * b is formed from a by erasing some of its elements.
// * For each i, |b[i] - avg(a)| < min(a).
// * b has the maximum number of elements among all the arrays satisfying the above requirements.

// for a = [8, 3, 4, 5, 2, 8] => [4, 5]
