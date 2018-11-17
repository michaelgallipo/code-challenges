function arrayMaximalAdjacentDifference(inputArray) {
  let maxValue = 0;
  let testValue = 0;
  for (i = 0; i <= inputArray.length - 2; i++) {
    testValue = Math.abs(inputArray[i] - inputArray[i + 1]);
    if (testValue > maxValue) {
      maxValue = testValue;
    }
  }
  return maxValue;
}

// for an array of integers, find the maximal absolute difference between any pair of adjacent items.

// for inputArray = [2, 4, 1, 0] => 3
