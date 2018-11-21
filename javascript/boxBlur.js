function boxBlur(image) {
  let b = image;
  let array = [];
  let elementArray = [];
  for (i = 0; i <= b.length - 3; i++) {
    for (i2 = 0; i2 < b[0].length - 2; i2++) {
      element = Math.trunc(
        (b[i][i2] +
          b[i][i2 + 1] +
          b[i][i2 + 2] +
          b[i + 1][i2] +
          b[i + 1][i2 + 1] +
          b[i + 1][i2 + 2] +
          b[i + 2][i2] +
          b[i + 2][i2 + 1] +
          b[i + 2][i2 + 2]) /
          9
      );
      elementArray.push(element);
    }
    array.push(elementArray);
    elementArray = [];
  }

  return array;
}
// The pixels in the input image are represented as integers. The algorithm distorts the input image in the following way: Every pixel x in the output image has a value equal to the average value of the pixel values from the 3 × 3 square that has its center at x, including x itself. All the pixels on the border of x are then removed. Return the blurred image as an integer, with the fractions rounded down.

// for image = [[1, 1, 1], [1, 7, 1], [1, 1, 1]] => [[1]]
// image = [[7, 4, 0, 1], [5, 6, 2, 2], [6, 10, 7, 8], [1, 4, 2, 0]] => [[5, 4], [4, 4]]

if ((matrix[r - (R - 1)] || [])[c - (C - 1)] | false) b++;
