function commonCharacterCount(s1, s2) {
//   let a = s1.split(""),
//     b = s2.split("");
//   let d = {},
//     e = {},
//     c = 0;
//   a.forEach(l => {
//     d[l] ? d[l]++ : (d[l] = 1);
//   });
//   b.forEach(l => {
//     e[l] ? e[l]++ : (e[l] = 1);
//   });
//   let k = Object.keys(d);
//   k.forEach(l => {
//     if (e[l]) {
//       d[l] < e[l] ? (c += d[l]) : (c += e[l]);
//     }
//   });

//   return c;
// }
// console.log(commonCharacterCount("bbzz", "zzzbzzz"));