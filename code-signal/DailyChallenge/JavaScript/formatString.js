let str = " abc   a aa  a a ";

let arr = str.split(" ");

let result = "";
arr.map(word => {
  if (word) {
    result += word + " ";
  }
});

console.log(result.slice(0, -1));
