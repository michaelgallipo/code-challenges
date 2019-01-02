function findEmailDomain(address) {
	let domain = [];
	for (x = address.length - 1; x >= 0; x--) {
		if (address[x] !== "@") {
			domain.splice(0, 0, address[x]);
		} else {
			return domain.join("");
		}
	}
}

// Given a valid email address, find its domain part.

// for address = "prettyandsimple@example.com" => example.com
// for address = "<>[]:,;@"!#$%&*+-/=?^_{}| ~.a"@example.org" => example.org
