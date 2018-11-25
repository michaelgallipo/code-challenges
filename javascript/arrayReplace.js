function arrayReplace(inputArray, elemToReplace, substitutionElem) {
  inputArray.forEach((number, index) => {
    number === elemToReplace
      ? inputArray.splice(index, 1, substitutionElem)
      : number;
  });
  return inputArray;
}

// Given an array of integers, replace all the occurrences of elemToReplace with substitutionElem.
// for For inputArray = [1, 2, 1], elemToReplace = 1, and substitutionElem = 3 => [3, 2, 3]
