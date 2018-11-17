function isIPv4Address(inputString) {
    let array = inputString.split(".");
    let result = true;
    if (array.length === 4) {
        array.forEach(function(num) {
            if (num >= 0 && num <= 255 && num !== "") {
            } else {
                result = false;
            }
        });
    } else {
        result = false;
    }
    return result;
}
// test to see if a given input string meets the IPv4 dot-decimal standards.
// for inputString = "172.16.254.1" => true
// for inputString = "172.316.254.1" => false
