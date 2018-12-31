function longestDigitsPrefix(inputString) {
    let output = [];
    let iA = inputString.split("");
    for (i = 0; i < iA.length; i++) {
        if (!/[0-9]/.test(inputString[i])) {
            break;
        } else {
            output.push(inputString[i]);
        }
    }
    output = output.join("");
    return output;
}

// Given a string, output its longest prefix which contains only digits.

// For inputString="123aa1" => "123"
