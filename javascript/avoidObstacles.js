function avoidObstacles(inputArray) {
    s = inputArray.sort(function(a, b) {
        return a - b;
    });
    let clear = false;
    let test = 1;
    while (clear !== true || test <= s[-1]) {
        let hits = 0;
        test += 1;
        for (i = 0; i <= s.length - 1; i++) {
            if (s[i] % test === 0) {
                hits += 1;
            }
        }
        if (hits === 0) {
            clear = true;
        }
    }
    return test;
}

// Assume that you are jumping from the point with coordinate 0 to the right. You are allowed only to make jumps of the same length represented by some integer. Find the minimal length of the jump enough to avoid all the obstacles.

// for [5, 3, 6, 7, 9] = > 4
