var pancakeSort = function(A) {
  var flip = function(array, number) {
    let firstHalf = array.splice(0, number);
    firstHalf.reverse();
    array = [...firstHalf, ...array];
    console.log(array);
    return array;
  };

  var currentNumber = A.length;
  var outputArray = [];

  while (currentNumber > 1) {
    let currentIndex = A.indexOf(currentNumber);
    if (currentIndex !== currentNumber - 1 && currentIndex !== 0) {
      outputArray.push(currentIndex + 1);
      A = flip(A, currentIndex + 1);
      currentIndex = 0;
    }
    if (currentIndex === 0) {
      outputArray.push(currentNumber);
      A = flip(A, currentNumber);
    }
    currentNumber--;
  }
  return outputArray;
};

console.log(pancakeSort([3, 2, 4, 1]));
