function firstDigit(inputString) {
  for (i = 0; i <= inputString.length - 1; i++) {
    if (/[0-9]/.test(inputString[i])) {
      return inputString[i];
    }
  }
}

// Find the leftmost digit that occurs in a given string.
// for inputString = "var_1__Int" => 1
// for inputString = "q2q-q" => 2

