function buildPalindrome(st) {
    let pal = false;
    let a = st.split("");
    let i = 0;
    while (!pal) {
        for (x = 0; x <= Math.trunc(a.length / 2); x++) {
            if (a[x] === a[a.length - (x + 1)]) {
                if (x === Math.trunc(a.length / 2)) {
                    pal = true;
                }
            } else {
                a.splice(a.length - i, 0, a[i]);
                i += 1;
                break;
            }
        }
    }
    return a.join("");
}
// Given a string, find the shortest possible string which can be achieved by adding characters to the end of initial string to make it a palindrome.
// For st = "abcdc" => "abcdcba"
