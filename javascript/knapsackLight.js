function knapsackLight(value1, weight1, value2, weight2, maxW) {
    let maxV = 0;
    if (weight1 + weight2 <= maxW) {
        maxV = value1 + value2;
    } else if (weight1 > maxW && weight2 > maxW) {
        maxV = 0;
    } else {
        if (weight1 <= maxW && weight2 <= maxW) {
            value1 > value2 ? (maxV = value1) : (maxV = value2);
        } else if (weight1 <= maxW) {
            maxV = value1;
        } else {
            maxV = value2;
        }
    }
    return maxV;
}

// You found two items in a treasure chest! The first item weighs weight1 and is worth value1,
// and the second item weighs weight2 and is worth value2. What is the total maximum value of the items you can take with you,
// assuming that your max weight capacity is maxW and you can't come back for the items later?

// Note that there are only two items and you can't bring more than one item of each type, i.e. you can't take two first items
// or two second items.

// For value1 = 10, weight1 = 5, value2 = 6, weight2 = 4, and maxW = 8 => 10
// For value1 = 10, weight1 = 5, value2 = 6, weight2 = 4, and maxW = 9 => 16
