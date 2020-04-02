areFollowingPatterns = (strings, patterns) => {
	let stringHash = {},
		patternHash = {},
		y = 1,
		z = 1;
	let l = strings.length;
	for (x = 0; x < l; x++) {
		if (!stringHash[strings[x]]) {
			stringHash[strings[x]] = y;
			y++;
		}
		if (!patternHash[patterns[x]]) {
			patternHash[patterns[x]] = z;
			z++;
		}
		if (stringHash[strings[x]] != patternHash[patterns[x]]) return false;
	}

	return true;
};
console.log(areFollowingPatterns(["cat", "dog", "dog"], ["a", "b", "b"])); // => true

// Given an array strings, determine whether it follows the sequence given in the patterns array.
// In other words, there should be no i and j for which strings[i] = strings[j] and patterns[i] ≠ patterns[j] or
// for which strings[i] ≠ strings[j] and patterns[i] = patterns[j].
