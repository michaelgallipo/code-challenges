function addBorder(picture) {
    let height = picture.length;
    let width = picture[0].length;
    let border = "";
    let outputArray = [];
    for (i = 0; i <= height + 1; i++) {
        if (i === 0 || i === height + 1) {
            for (i2 = 0; i2 <= width + 1; i2++) {
                border = border + "*";
            }
            outputArray.splice(i, 0, border);
            border = "";
        } else {
            border = "*" + picture[i - 1] + "*";
            outputArray.splice(i, 0, border);
            border = "";
        }
    }
    return outputArray;
} //add a line of * to the top and bottom and one each at the beginnging and end of each row.
// for picture =    ["abc",
//                   "ded"]
// output = ["*****",
//           "*abc*",
//           "*ded*",
//           "*****"]
