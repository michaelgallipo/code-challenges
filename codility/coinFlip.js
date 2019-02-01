function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
        hash = {0:0, 1:0}
        A.forEach((coin) => {
            if (coin == 0) {
                hash[0] += 1
            }
            else {
                hash[1] += 1
            }
    });
    return hash[0] < hash[1] ? hash[0] : hash[1]
}