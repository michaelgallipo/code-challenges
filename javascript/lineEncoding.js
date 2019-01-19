function lineEncoding(s) {
	let letter = "",
		count = 0,
		output = [];
	let arr = s.split("");
	for (x = 0; x < arr.length; x++) {
		if (x === 0) {
			letter = arr[x];
			count += 1;
		}
		if (arr[x + 1] && arr[x + 1] === letter) {
			count += 1;
			if (x + 1 === arr.length - 1) {
				output.push(count, letter);
				break;
			}
		} else {
			if (count === 1) {
				output.push(letter);
			} else {
				output.push(count, letter);
			}
			count = 1;
			letter = arr[x + 1];
		}
	}
	return output.join("");
}

// Given a string, return its encoding defined as follows:

// First, the string is divided into the least possible number of disjoint substrings consisting of identical characters for example, "aabbbc" is divided into ["aa", "bbb", "c"]
// Next, each substring with length greater than one is replaced with a concatenation of its length and the repeating character for example, substring "bbb" is replaced by "3b"
// Finally, all the new strings are concatenated together in the same order and a new string is returned.

// For s = "aabbbc" => "2a3bc"
