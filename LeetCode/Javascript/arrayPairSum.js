var arrayPairSum = function(nums) {
  let c = 0,
    tot = 0;
  nums = nums.sort((a, b) => a - b);
  while (c < nums.length) {
    tot += nums[c];
    c += 2;
  }
  return tot;
};

console.log(arrayPairSum([1, 4, 3, 2]));
