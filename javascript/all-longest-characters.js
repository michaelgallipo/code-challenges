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

function refactoredLongestStrings(array) {

    const maxLength = array.reduce((max, word) => 
        { return word.length > max ? word.length : max}, 0)
    const isMaxLength = word => word.length === maxLength
    const longestWords = array => array.filter(isMaxLength)

return longestWords(array)
}

console.log(refactoredLongestStrings(["aba", "aa", "ad", "vcd", "aba"]))