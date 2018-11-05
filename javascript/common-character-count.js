function commonCharacterCount(s1, s2) {
    let s1Array = [...s1];
    let s2Array = [...s2];
    let count = 0;
    s1Array.forEach(function(letter) {
        for (i = 0; i <= s2Array.length; i++) {
            if (letter === s2Array[i]) {
                s2Array.splice(i, 1);
                count += 1;
                break;
            }
        }
    });

    return count;
}

//For s1 = "aabcc" and s2 = "adcaa"
// count = 3 (2 a's and 1 c)
