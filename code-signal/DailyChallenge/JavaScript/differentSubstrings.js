function differentSubstrings(str) {
  let a = str.split("");
  let sub = "",
    h = {};

  for (x = 0; x < a.length; x++) {
    for (y = 0; y <= a.length - (x + 1); y++) {
      sub = a.slice(y, y + x + 1).join("");
      !h[sub] ? (h[sub] = 1) : 0;
    }
  }
  return Object.keys(h).length;
}

// Given a string, find the number of different non-empty substrings in it.
// inputString = "abac" => 9  {"a", "b", "c", "ab", "ac", "ba", "aba", "bac", "abac"}
