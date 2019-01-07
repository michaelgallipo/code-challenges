function holidayPotluck(dishes, capacity) {
	let x = 0,
		enjoy = 0;
	dishes = dishes.sort((a, b) => b[0] - a[0]);
	while (capacity > 0) {
		if (dishes[x][1] <= capacity) {
			enjoy += dishes[x][0] * dishes[x][1];
			capacity -= dishes[x][1];
			x += 1;
			if (x === dishes.length) {
				break;
			}
		} else {
			enjoy += capacity * dishes[x][0];
			capacity = 0;
		}
	}
	return enjoy;
}


