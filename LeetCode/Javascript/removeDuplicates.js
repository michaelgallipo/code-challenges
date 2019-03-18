const nums = [0, 0, 1, 1, 1, 1, 2, 3, 3];

let x = 2;

while (x < nums.length) {
  if (nums[x] === nums[x - 1] && nums[x] === nums[x - 2]) {
    nums.splice(x, 1);
  } else {
    nums[x] === nums[x - 1] ? x++ : (x += 2);
  }
}

console.log(nums);
