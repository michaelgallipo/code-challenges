regularMonths = c => {
	let o = "";
	m = parseInt(c.substr(0, 2));
	y = parseInt(c.substr(3, 4));
	while (y < 2102) {
		if (m == 12) {
			m = 0;
			y++;
		}
		if (new Date(y, m, 1).getDay() == 1) {
			m++;
			let t = m < 10 ? "0" + m : m;
			o = t + "-" + y;
			return o;
		}
		m++;
	}
};

console.log(regularMonths("12-2018")); // => "04-2019"

// Looking for the next "regular month", i.e. a month that starts on Monday
// The current month is excluded even if it is a regular month.
// Current date will not be a year later than 2100
