// Given a column title as it would appear in an Excel spreadsheet, return its corresponding column number.
// For s = "AB", the output should be excelSheetColumnNumber(s) = 28.

excelSheetColumnNumber = s =>
	s
		.split("")
		.reduce(
			(tot, ltr, i) =>
				tot + (ltr.charCodeAt(0) - 64) * 26 ** (s.length - (i + 1)),
			0
		);

console.log(excelSheetColumnNumber("AB"));
