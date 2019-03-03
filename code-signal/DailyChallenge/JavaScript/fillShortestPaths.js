let plan = [
  [" ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " "],
  [" ", " ", " ", "s", " ", " "],
  [" ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " "]
];
const h = plan.length - 1;
const w = plan[0].length - 1;
if (h === 0 || w === 0) {
  return plan;
}
let dir = [];
let top, bottom, left, right;
let min = h > w ? w : h;
plan.forEach((arr, i) => {
  arr.forEach((elem, j) => {
    if (elem === "s") {
      // console.log("found it", i, j);
      top = i;
      if (top < min) {
        min = top;
        dir.push("top");
      }
      left = j;
      if (left <= min) {
        if (left < min) {
          min = left;
          dir = [];
        }
        dir.push("left");
      }
      bottom = h - i;
      if (bottom <= min) {
        if (bottom < min) {
          min = bottom;
          dir = [];
        }
        dir.push("bottom");
      }
      right = w - j;
      if (right <= min) {
        if (right < min) {
          min = right;
          dir = [];
        }
        dir.push("right");
      }
    }
  });
});
console.log(top, bottom, left, right, dir);
dir.forEach(d => {
  let off = 1;
  if (d === "left") {
    for (x = left - 1; x >= 0; x--) {
      for (y = -off; y <= off; y++) {
        plan[top + y][x] = "#";
      }
      off += 1;
    }
  } else if (d === "right") {
    for (x = left + 1; x <= w; x++) {
      for (y = -off; y <= off; y++) {
        plan[top + y][x] = "#";
      }
      off += 1;
    }
  } else if (d === "bottom") {
    for (x = top + 1; x <= h; x++) {
      for (y = left - off; y <= left + off; y++) {
        plan[x][y] = "#";
      }
      off += 1;
    }
  } else {
    for (x = top - 1; x >= 0; x--) {
      for (y = left - off; y <= left + off; y++) {
        plan[x][y] = "#";
      }
      off += 1;
    }
  }
});
console.log(plan);

// You are given a rectangular array representing the plan of an empty room, with one cell marked as the starting point. The boundary of the room
// is formed by the leftmost and rightmost columns, as well as the topmost and bottommost rows. You need to find all the shortest paths from a given
// starting point to the boundary, meaning that such paths must traverse the minimum number of cells. It is possible to move to the cell adjacent to
// your current position horizontally, vertically or diagonally.

// Find all the shortest paths, mark them on the given plan with the '#' character, and return the resulting array as the answer.
