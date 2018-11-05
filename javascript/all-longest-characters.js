function allLongestStrings(inputArray) {
    let length = 0;
    let outputArray = [];
    inputArray.forEach(function(word) {
        if (word.length > length) {
            outputArray = [word];
            length = word.length;
        } else if (word.length === length) {
            outputArray.push(word);
        }
    });
    return outputArray;
}
//For inputArray = ["aba", "aa", "ad", "vcd", "aba"]
// outputArray = ["aba", "vcd", "aba"]
