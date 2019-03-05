let arr = [];
const a1 = [1, 10, 40];
const a2 = [4, 5, 20, 90, 100];
let totLength = a1.length + a2.length;
while (arr.length < totLength) {
  if (a1 === []) {
    arr.push(a2.splice(0, -1));
  } else if (a2 === []) {
    arr.push(a1.splice(0, -1));
  } else if (a1[0] < a2[0]) {
    arr.push(a1.splice(0, 1));
  } else {
    arr.push(a2.splice(0, 1));
  }
}
arr = [].concat(...arr);
console.log(arr);
