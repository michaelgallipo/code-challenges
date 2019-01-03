function luckyKids(d) {
    let g = 1,
        c = 0;

    let a = [...d];
    a = a.sort((a, b) => a - b);
    for (x = 0; x < d.length - 1; x++) {
        t = Math.round((a.length - 1) / 2) - 1;
        if (d[x] > a[t]) {
            g += 1;
            if (d[x] - a[t + 1] > a[a.length - 1] - d[x]) {
                for (y = a.length - 1; y >= t; y--) {
                    if (d[x] === a[y]) {
                        a.splice(y, 1);
                        break;
                    }
                }
            } else {
                for (y = t + 1; y < a.length; y++) {
                    if (d[x] === a[y]) {
                        a.splice(y, 1);
                        break;
                    }
                }
            }
        } else {
            if (d[x] - a[0] > a[t] - d[x]) {
                for (y = t; y >= 0; y -= 1) {
                    if (d[x] === a[y]) {
                        a.splice(y, 1);
                        break;
                    }
                }
            } else {
                for (y = 0; y <= t; y++) {
                    if (d[x] === a[y]) {
                        a.splice(y, 1);
                        break;
                    }
                }
            }
        }
    }
    return g;
}

// Given an array of numbers behaviors, each number representing how good a child has behaved in the last year,
// determine how many children will get gifts from santa. A child gets a gift if he/she has behaved better than at
// least half of his/her older siblings. The array is sorted by the age of the children.
// Note: The oldest kid always gets a gift.

// For behaviors = [3, 3, 4, 5, 2, 1, 5, 5] => 2
