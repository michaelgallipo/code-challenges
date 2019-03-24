var containsNearbyDuplicate = function(nums, k) {
  let dupArray = [],
    dupHash = {};
  nums.forEach(num => {
    if (!dupHash[num]) {
      dupHash[num] = 1;
    } else if (dupHash[num] === 1) {
      dupArray.push(num);
      dupHash[num]++;
    } else {
      dupHash[num]++;
    }
  });

  for (x = 0; x < dupArray.length; x++) {
    let i = nums.indexOf(dupArray[x]);
    let count = 1;
    for (y = i + 1; y < nums.length; y++) {
      if (nums[y] === dupArray[x]) {
        if (y - i <= k) {
          return true;
        } else {
          i = y;
          count++;
          if (count === dupHash[nums[y]]) {
            break;
          }
        }
      }
    }
  }
  return false;
};
console.log(containsNearbyDuplicate([1, 0, 1, 1], 1));

// Given an array of integers and an integer k, find out whether there are two distinct indices i and j in the array such
// that nums[i] = nums[j] and the absolute difference between i and j is at most k.
