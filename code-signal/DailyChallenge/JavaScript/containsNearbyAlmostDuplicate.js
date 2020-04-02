containsNearbyAlmostDuplicate = (n, k, t) => {
	let y;
	for (x = 0; x < n.length; x++) {
		y = x + 1;
		while (y - x <= k) {
			if (Math.abs(n[x] - n[y]) <= t) return true;
			y++;
		}
	}
	return false;
};

// Given an array of integers, determine whether there are two distinct indices i and j in the array such that:

// * The absolute difference between i and j is at most k
// * The absolute difference between nums[i] and nums[j] is at most t

// For nums = [1, 3, 1], k = 2, and t = 1 => true
