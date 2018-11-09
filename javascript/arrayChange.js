function arrayChange(inputArray) {
    let steps = 0;
    for (i = 1; i <= inputArray.length - 1; i++) {
        // comparison = inputArray[i];
        while (inputArray[i] <= inputArray[i - 1]) {
            inputArray[i] += 1;
            steps += 1;
        }
        // inputArray.splice(i, 1, comparison);
    }
    return steps;
}
// find the smallest number of changes you can make that will leave an array of numbers in increasing order while only being able to increment any element by 1. Thus 9, 8 would take two steps.
//for inputArray = [1, 1, 1]
//output = 3 
