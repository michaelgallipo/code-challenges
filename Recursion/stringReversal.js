function reverse(str) {
  let arr = str.split("");
  if (arr.length === 1) {
    return arr[0];
  } else {
    return arr.pop().concat(reverse(arr.join("")));
  }
}

console.log(reverse("awesome"));
