// const time = "10:30:30PM";
// let t = time.substring(0, 8);
// let ap = time.substring(8);
// let tA = t.split(":");
// if (ap === "PM") {
//   tA[0] = parseInt(tA[0]) + 12;
//   t = tA.join(":");
// }

// console.log(t);

let grades = [49, 50, 51, 59];
grades.forEach((grade, index) => {
  if (grade % 5 >= 3) {
    grade = grade + (5 - (grade % 5));
    grades.splice(index, 1, grade);
    console.log(grade);
  }
});
console.log(grades);
