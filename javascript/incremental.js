const array = [2, 4, 5, 7, 8];
let newArray = [...array];
newArray.sort();
if (newArray == array) {
  console.log("true");
}
console.log(newArray);
