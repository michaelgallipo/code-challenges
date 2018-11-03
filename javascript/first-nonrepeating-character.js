function firstNotRepeatingCharacter(s) {
  let letters = {};

  for (i = 0; i <= s.length - 1; i++) {
    if (letters[s[i]]) {
      letters[s[i]] += 1;
    } else {
      letters[s[i]] = 1;
    }
  }
  console.log(letters);
  let firstLetter = Object.keys(letters).find(key => letters[key] === 1);
  return firstLetter ? firstLetter : "_";
}

// where s = "abacabad"
// non-repeating characters are c and d
// output should be = "c"
