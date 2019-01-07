function cityStreetLights(lights) {
    let c = 0,
        max = 1,
        l1 = 0,
        l2 = 0,
        loop,
        pos = null;
    for (x = 0; x < lights.length - 1; x++) {
        if (!pos && lights[x] !== lights[x + 1]) {
            loop = true;
            (l1 = lights[x]), (l2 = lights[x + 1]), (c = 2), (pos = x);
            while (loop) {
                pos += 2;
                if (lights[pos] && lights[pos] === l1) {
                    c += 1;
                    if (lights[pos + 1] && lights[pos + 1] === l2) {
                        c += 1;
                    } else {
                        loop = false;
                    }
                } else {
                    loop = false;
                }
            }
            c > max ? (max = c) : max;
            x = pos - 2;
            pos = null;
        }
    }
    return max;
}

// Across the street there are n houses, each of which is decorated in some color: ith house is decorated in lights[i] color.
// You decided to call a contiguous subarray of houses charming if it contains exactly two different colors which alternate:
// contiguous subarray [i, j] is charming if lights[i] = lights[i + 2] = lights[i + 4] = ...,
// lights[i + 1] = lights[i + 3] = lights[i + 5] = ..., and lights[i] ≠ lights[i + 1].

// Now you want to find the length of the longest charming subsequence.

// For lights = [1, 1, 2, 1, 2, 3] => 4
// For lights = [1, 1, 1, 1, 1, 1] => 1
