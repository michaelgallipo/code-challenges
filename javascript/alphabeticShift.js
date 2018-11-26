function alphabeticShift(inputString) {
    let output = "";
    for (i = 0; i <= inputString.length - 1; i++) {
        if (inputString[i] === "z") {
            output = output + "a";
        } else {
            let val = inputString.charCodeAt(i) + 1;
            output = output + String.fromCharCode(val);
        }
    }
    return output;
}

// Given a string, replace each its character by the next one in the English alphabet (z would be replaced by a)
// for inputString = "crazy" => "dsbaz"
