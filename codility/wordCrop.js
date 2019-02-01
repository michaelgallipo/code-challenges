function solution(message, K) {
    let arr = message.split(' ');
    let output = "";
    
    for (i=0; i<arr.length; i++) {
        if (output.length + arr[i].length + 1 > K) {
            return output
        }
        else {
            if (i == 0) {
                output = arr[i]
            }
            else {
            output += ' ' + arr[i]
            }
        }
    }
    return output
}

