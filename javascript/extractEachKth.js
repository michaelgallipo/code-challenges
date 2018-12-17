function extractEachKth(inputArray, k) {
  let outputArray = [];
  inputArray.forEach((num, index) => {
    if ((index + 1) % k !== 0) {
      outputArray.push(num);
    }
  });
  return outputArray;
}

// Given array of integers, remove each kth element from it.
// for inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] and k = 3 => [1, 2, 4, 5, 7, 8, 10]
