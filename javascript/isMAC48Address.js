function isMAC48Address(inputString) {
	if (inputString.length > 17) {
		return false;
	}
	let result = true;
	let a = inputString.split("-");
	if (a.length !== 6) {
		result = false;
	} else {
		a.forEach(segment => {
			if (!/[0-9A-F][0-9A-F]/.test(segment)) {
				result = false;
				console.log(segment);
			}
		});
	}
	return result;
}

// The standard (IEEE 802) format for printing MAC-48 addresses in human-friendly form is six groups
// of two hexadecimal digits (0 to 9 or A to F), separated by hyphens (e.g. 01-23-45-67-89-AB).
// Check whether input string corresponds to MAC4-48 Address or not

// for inputString = "00-1B-63-84-45-E6" => true
// for inputString = "Z1-1B-63-84-45-E6" => false
