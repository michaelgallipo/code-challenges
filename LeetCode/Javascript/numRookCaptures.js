const board = [
  [".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", "p", ".", ".", ".", "."],
  [".", ".", ".", "R", ".", ".", ".", "p"],
  [".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", "p", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", "."]
];

let pawns = 0,
  c,
  r;
for (x = 0; x < 8; x++) {
  if (board[x].includes("R")) {
    r = x;
    c = board[x].indexOf("R");
    break;
  }
}
let t = c - 1;
console.log(r, c, t);
while (t >= 0) {
  if (board[r][t] === "p") {
    pawns += 1;
    break;
  } else if (board[r][t] === "B") {
    break;
  } else {
    t -= 1;
  }
}
t = c + 1;
while (t <= 7) {
  if (board[r][t] === "p") {
    pawns += 1;
    break;
  } else if (board[r][t] === "B") {
    break;
  } else {
    t += 1;
  }
}
t = r - 1;
while (t >= 0) {
  if (board[t][c] === "p") {
    pawns += 1;
    break;
  } else if (board[t][c] === "B") {
    break;
  } else {
    t -= 1;
  }
}
t = r + 1;
while (t <= 7) {
  if (board[t][c] === "p") {
    pawns += 1;
    break;
  } else if (board[t][c] === "B") {
    break;
  } else {
    t += 1;
  }
}
console.log(pawns);
