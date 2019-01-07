const queries = [[2, 3, 603], [1, 1, 286], [4, 4, 882]];
let arr = [],
    x,
    y,
    num = 0,
    max = 0;
for (x = 1; x <= 5; x++) {
    arr.push(0);
}
for (x = 0; x < queries.length; x++) {
    arr[queries[x][0]] += queries[x][2];
    if (queries[x][1] < arr.length - 1) {
        arr[queries[x][1]] -= queries[x][2];
    }
    console.log(arr);
}
for (x = 0; x < 5; x++) {
    num += arr[x];
    max < num ? (max = num) : max;
}

console.log(max);

// Start with an array of zeroes. Given a series of starting point, ending point and sum, add that sum to each element in the range.
// return the largest individual value contained in the ending array.

// ORIGINAL VERSION - TIMED OUT ON LARGER DATA SETS

// // function arrayManipulation(n, queries) {
// const queries = [[2, 3, 603], [1, 1, 286], [4, 4, 882]];
// let arr = [],
//     x,
//     y,
//     num,
//     max = 0;
// for (x = 1; x <= 4; x++) {
//     arr.push(0);
// }
// for (x = 0; x < queries.length; x++) {
//     for (y = queries[x][0] - 1; y <= queries[x][1] - 1; y++) {
//         if (y === queries[x][1]) {
//             console.log(queries[x][0], queries[x][1], queries[x][2], arr[y]);
//         }
//         num = arr[y] + queries[x][2];
//         num > max ? (max = num) : max;
//         arr.splice(y, 1, num);
//     }
// }
// console.log(max);
// }
