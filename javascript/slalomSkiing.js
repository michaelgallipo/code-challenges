function slalomSkiing(flags, threshold) {
    let maxL = -1,
        maxR = -1,
        left = -1,
        right = 1,
        test = 1,
        failLeft = false,
        failRight = false;
    while (test < flags.length) {
        if (
            Math.abs(flags[test - 1] + left - (flags[test] + right)) >
                threshold &&
            !failLeft
        ) {
            maxL = test;
            failLeft = true;
        }
        if (
            Math.abs(flags[test - 1] + right - (flags[test] + left)) >
                threshold &&
            !failRight
        ) {
            maxR = test;
            failRight = true;
        }
        test += 1;
        (left = left * -1), (right = right * -1);
    }
    if (maxR === -1 || maxL === -1) {
        return -1;
    } else {
        return maxR > maxL ? maxR : maxL;
    }
}
