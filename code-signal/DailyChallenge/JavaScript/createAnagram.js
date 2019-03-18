const s = "AABAA";
const t = "BBAAA";

let a = t.split("");

for (x = 0; x < 5; x++) {
  if (a.includes(s[x])) {
    a.splice(a.indexOf(s[x]), 1);
  }
}

console.log(a);
