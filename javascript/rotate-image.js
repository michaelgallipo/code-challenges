function rotateImage(a) {
    let rows = a.length;
    let columns = a[0].length;
    let newRowIndex = 0;
    let newMatrix = [];
    let filler = [];
    a.forEach(function(array) {
        array.forEach(function(element) {
            filler.splice(0, 0, 0);
        });
        newMatrix.splice(0, 0, filler);
        filler = [];
    });
    console.log(newMatrix);
    for (i = rows - 1; i >= 0; i--) {
        i2 = 0;
        a[i].forEach(function(num) {
            newMatrix[i2].splice(newRowIndex, 1, num);
            i2 += 1;
        });
        newRowIndex += 1;
    }
    return newMatrix;
}
// a = [[1, 2, 3],
//      [4, 5, 6],
//      [7, 8, 9]]

// output =
//     [[7, 4, 1],
//      [8, 5, 2],
//      [9, 6, 3]]
