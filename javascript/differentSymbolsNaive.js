function differentSymbolsNaive(s) {
  let hM = {};
  for (i = 0; i <= s.length - 1; i++) {
    if (!hM[s[i]]) {
      hM[s[i]] = 1;
    }
  }
  return Object.keys(hM).length;
}

// Given a string, find the number of different characters in it.
// for s = "cabca" => 3
