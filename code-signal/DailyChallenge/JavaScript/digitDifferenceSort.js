// eslint-disable-next-line no-undef
digitDifferenceSort = a => {
  let h = {},
    o = [],
    sorted = [];

  a.forEach((num, index) => {
    let na = num
      .toString()
      .split("")
      .sort();
    let diff = na.pop() - na[0];
    h[index] = diff ? diff : 0;
  });
  o = Object.entries(h).sort((a, b) => a[1] - b[1] || b[0] - a[0]);
  o.forEach(elem => {
    sorted.push(a[elem[0]]);
  });
  return sorted;
};
// eslint-disable-next-line no-undef
console.log(digitDifferenceSort([152, 23, 7, 887, 243]));

//Given an array of integers, sort its elements by the difference of their largest and smallest digits.
// In the case of a tie, that with the larger index in the array should come first.

// For a = [152, 23, 7, 887, 243] => [7, 887, 23, 243, 152]
