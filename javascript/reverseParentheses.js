function reverseParentheses(s) {
  sArray = s.split("");
  let parens = false;
  let finished = false;
  let subS = "";
  let i2 = 0;
  while (finished === false) {
    for (i = 0; i <= sArray.length - 1; i++)
      if (sArray[i] == "(") {
        subS = "";
        i2 = i;
        parens = true;
      } else if (parens === true && sArray[i] !== ")") {
        subS = sArray[i] + subS;
      } else if (sArray[i] == ")") {
        if (i >= sArray.length - 1) {
          finished = true;
        }
        parens = false;
        sArray.splice(i, 1);
        subS = subS.split("");
        for (i3 = 0; i3 <= subS.length; i3++) {
          if (i3 === 0) {
            sArray.splice(i2, subS.length + 1);
          } else {
            sArray.splice(i2 + i3 - 1, 0, subS[i3 - 1]);
          }
        }
        break;
      } else {
        if (i >= sArray.length - 1) {
          finished = true;
        }
      }
  }
  return sArray.join("");
}
// reverse letters contained inside parentheses in a string
// for s ="co(de(fight)s)"
// output = "cosfighted" 
