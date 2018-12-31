function christmasSquareBoxes(boxes) {
    let sort = boxes.sort((a, b) => b - a);
    let count = 0;
    while (sort.length > 0) {
        let current = [];
        count += 1;
        sort.forEach((box, index) => {
            if (sort[index + 1] < box || index === sort.length - 1) {
                current.push(index);
            }
        });
        let splice = current.sort((a, b) => b - a);
        splice.forEach(index => {
            sort.splice(index, 1);
        });
    }
    return count;
}

// refactored solution

function christmasSquareBoxes(boxes) {
    let count = 1;
    let boxHash = {};
    boxes.forEach(box => {
        if (!boxHash[box]) {
            boxHash[box] = 1;
        } else {
            boxHash[box] += 1;
            if (boxHash[box] > count) {
                count = boxHash[box];
            }
        }
    });
    return count;
}

// Fortunately, Bill can put a smaller box into a bigger one.
// More formally, Bill can put a box with side equal to a inside the box with side equal to b if a < b.
// He also wants any box to contain no more than one other box (though the nested box can contain other boxes inside itself).
// In other words, when you open a box it will either contain one other box (which of course, can contain other boxes) or be empty.

// for boxes = [1, 3, 4] => 1
// for boxes = [2, 2, 2] => 3
// for boxes = [5, 1, 2, 4, 7, 2, 1, 2, 3, 6] => 3
