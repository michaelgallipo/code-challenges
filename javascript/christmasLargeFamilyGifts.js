function christmasLargeFamiliesGifts(f1, f2) {
	let fam1 = 0,
		c = 0;
	for (i = 0; i < f1.length; i++) {
		if (f1[i] > f2[i]) {
			fam1 += 1;
		} else if (f2[i] > f1[i]) {
			c += fam1;
		}
	}
	return c;
}

// We don't know why, but to compare their gift these families decided to calculate the number of such pairs (i, j)
// such that i < j, family1[i] > family2[i], and family1[j] < family2[j]. Help them, find out the number of such pairs!
