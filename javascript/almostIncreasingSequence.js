function almostIncreasingSequence(sequence) {
  if (sequence.length < 3) {
    return true;
  }
  let failure = 0;
  for (i = 1; i <= sequence.length - 1; i++) {
    if (sequence[i] <= sequence[i - 1] && i === 1) {
      failure = 1;
    } else if (i === sequence.length - 1 && failure === 0) {
      return true;
    } else if (sequence[i] <= sequence[i - 1]) {
      if (failure > 0) {
        return false;
      } else if (
        sequence[i] > sequence[i - 2] ||
        (sequence[i] <= sequence[i - 2] && sequence[i + 1] > sequence[i - 1])
      ) {
        failure = 1;
      } else {
        return false;
      }
    }
  }
  return true;
}

// Given a sequence of integers as an array, determine whether it is possible to obtain a strictly increasing sequence by removing no more than one element from the array.

// sequence = [1, 3, 2, 1] => false
// sequence = [1, 3, 2] => true
// sequence = [3, 5, 67, 98, 3] => true
// sequence = [1, 2, 3, 4, 5, 3, 5, 6] => false

// ====================================

// This code worked but timed out on one of the hidden tests

// if (sequence.length < 3) {
//   return true;
// } else {

// let result = false;
// let count = 0;
// let index1 = 0;
// for (x = 0; x < sequence.length; x++) {
//   newArray = [...sequence];
//   newArray.splice(index1, 1);
//   for (i = 0; i < newArray.length; i++) {
//       if (newArray[i + 1] <= newArray[i]) {
//         count += 1;
//         break;
//       }
//     };
//   if (count === 0) {
//     result = true;
//     break;
//   } else {
//     count = 0;
//   }
//   index1 += 1;
//   };
// return result;

//   }
