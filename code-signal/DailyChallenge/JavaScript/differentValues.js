function differentValues(a, d) {
  let h = {};
  a.map(num => (h[num] = true));
  while (d > 0) {
    for (x = 0; x < a.length; x++) {
      if (h[a[x] + d] || h[a[x] - d]) {
        return d;
      }
    }
    d--;
  }
  return -1;
}

// Given an array a and an integer d, find two elements of the array such that their absolute difference is not
// greater than d but is as close to d as possible (there may be more than one such pair). Return the absolute
// difference between these two elements or -1 if no suitable pairs were found.
