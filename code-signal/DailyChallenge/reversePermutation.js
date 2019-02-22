// First Solution

function inversePermutation(permutation) {
    let h = {}, a = [];
    permutation.map((num, i) => h[num] = i + 1);
    console.log(h)
    for (x=1; x<=permutation.length; x++) {
        a.push(h[x]);
    }
    return a
}

// Second solution with using hash

inversePermutation = (p) => {
    a = [];
    p.map((n, i) => a[n] = i + 1);
    return a.slice(1);
}

// Given a permutation, produce its inverse permutation.
// An inverse permutation is a permutation in which each number and the number of the place which it occupies are exchanged.
// For permutation = [1, 3, 4, 2] => [1, 4, 2, 3]

