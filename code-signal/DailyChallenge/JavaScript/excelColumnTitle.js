columnTitle = n => {
	o = "";
	while (n >= 1) {
		if (n % 26 < 1) {
			o = "Z" + o;
			n = n / 26 - 1;
		} else {
			o = String.fromCharCode((n % 26) + 64) + o;
			n /= 26;
		}
	}
	return o;
};

console.log(columnTitle(16808)); // => "XVL"

// Given a positive integer number, return the corresponding column title as it would appear in a spreadsheet.
