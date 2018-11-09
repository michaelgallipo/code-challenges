const s = "2[a5[test]]";
sArray = s.split("");
console.log(s);
let bracket = false;
let finished = false;
let subS = "";
let repeatCode = "";
let insertSpot = 0;
let loops = 0;
let num = "";
while (finished === false) {
  if (s == "") {
    console.log("empty string");
    break;
  }
  for (i = 0; i <= sArray.length - 1; i++)
    if (/[0-9]/.test(sArray[i]) && bracket === false) {
      if (!num) {
        insertSpot = i;
      }
      num = num + sArray[i];
      console.log(insertSpot, num);
    } else if (/[0-9]/.test(sArray[i])) {
      num = sArray[i];
      insertSpot = i;
    } else if (sArray[i] == "[") {
      subS = "";
      repeatCode = "";
      bracket = true;
      loops = Number(num);
      // console.log(subS[i - 1]);
    } else if (bracket === true && sArray[i] !== "]") {
      subS = subS + sArray[i];
    } else if (sArray[i] == "]") {
      if (i >= sArray.length - 1) {
        finished = true;
      }
      bracket = false;
      console.log(sArray);
      sArray.splice(i, 1);
      console.log(sArray);
      for (i2 = 0; i2 <= loops - 1; i2++) {
        repeatCode = repeatCode + subS;
      }
      repeatCode = repeatCode.split("");
      console.log(repeatCode, insertSpot);
      for (i3 = 0; i3 <= repeatCode.length; i3++) {
        if (i3 === 0) {
          sArray.splice(insertSpot, subS.length + num.length + 1);
          console.log(sArray);
        } else {
          sArray.splice(insertSpot + i3 - 1, 0, repeatCode[i3 - 1]);
        }
      }
      num = "";
      console.log(sArray, finished);
      break;
    } else {
      if (i >= sArray.length - 1) {
        finished = true;
      }
    }
}
console.log(sArray.join(""));
