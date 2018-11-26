function chessBoardCellColor(cell1, cell2) {
  let col = cell1[1] - cell2[1];
  let r = cell1.charCodeAt(0) - cell2.charCodeAt(0);
  return (Math.abs(r) % 2 === 0 && Math.abs(col) % 2 === 0) ||
    (Math.abs(r) % 2 !== 0 && Math.abs(col) % 2 !== 0)
    ? true
    : false;
}
// Given two cells on the standard chess board, determine whether they have the same color or not.
// For cell1 = "A1" and cell2 = "C3" => true
// for cell1 = "A1" and cell2 = "H3" => false
