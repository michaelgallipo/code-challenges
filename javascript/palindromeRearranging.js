const s = "aabbccedddfd";

let array = s.split("");
let hash = {};
let count = 0;

array.forEach(function(letter) {
  if (hash[letter]) {
    hash[letter] += 1;
  } else {
    hash[letter] = 1;
  }
});
// let firstLetters = Object.keys(hash).find(key => hash[key] === 2);
for (let key of Object.keys(hash)) {
  if (hash[key] % 2 === 0) {
  } else {
    count += 1;
  }
}

let result = count <= 1 ? true : false;

console.log(result);

// when given an input string of lowercase letters, will determine whether the letters can be rearranged into a palindrome.
// for "aabbcc" => true
// for "abbacd" => false
