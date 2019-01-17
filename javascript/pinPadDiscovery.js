function pinPadDiscovery(logins) {
    let a = ["?", "?", "?", "?"];
    if (logins.length == -1) {
        return a.join("");
    } else {
        for (x = 1; x < logins.length; x++) {
            for (y = 0; y <= 3; y++) {
                if (a[y] === "?") {
                    if (
                        logins[x][y][0] ===
                            (logins[x - 1][y][0] || logins[x - 1][y][1]) &&
                        (logins[x][y][1] !== logins[x - 1][y][0] &&
                            logins[x][y][1] !== logins[x - 1][y][1])
                    ) {
                        a.splice(y, 1, logins[x][y][0]);
                    } else if (
                        (logins[x][y][1] === logins[x - 1][y][0] ||
                            logins[x][y][1] === logins[x - 1][y][1]) &&
                        (logins[x][y][0] !== logins[x - 1][y][0] &&
                            logins[x][y][0] !== logins[x - 1][y][1])
                    ) {
                        console.log(logins[x][y][1], x, y);
                        a.splice(y, 1, logins[x][y][1]);
                    }
                }
            }
        }
    }
    return a.join("");
}

// The ten digits, 0 - 9, are randomly shuffled and a pair of digits is placed in each of the 5 buttons, without repetition.
// For example, if my PIN were "1618", I would click on (1 or 5), (6 or 9), (1 or 5), and (7 or 8) in this order.
// Your task is to return a string representing the user's PIN, deducing as many digits as possible. Wherever you are unsure, use a ? in its place.

// For logins: [["58", "24", "06", "24"], ["08", "24", "56", "24"]] => "8?6?"
