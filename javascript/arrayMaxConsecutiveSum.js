function arrayMaxConsecutiveSum(iA, k) {
    let max = 0;
    let cur = 0;
    for (i = 0; i <= iA.length - k; i++) {
        if (i === 0) {
            for (j = 0; j <= k - 1; j++) {
                cur += iA[i + j];
            }
        } else {
            cur += iA[i + k - 1] - iA[i - 1];
        }

        cur > max ? (max = cur) : max;
    }
    return max;
}

//Given array of integers, find the maximal possible sum of some of its k consecutive elements.

// for inputArray = [2, 3, 5, 1, 6] and k = 2 => 8
