const weights = [0, 0, 100];
const scores = [[0], [0], [95, 95, 95, 95]];

let current = 0,
	targetTest = 0;
let scoreHash = { 0: 10, 1: 5, 2: 100 },
	resultHash = {};

scores.forEach((subset, index) => {
	subTot = subset.reduce((tot, acc) => tot + acc);
	resultHash[index] = subTot / (subset.length * scoreHash[index]);
	current += (resultHash[index] * weights[index]) / 100;
});
console.log(resultHash);

let curMin = Math.trunc(current * 10);
console.log(resultHash[2], scores[2].length, weights[2]);
let curMax = Math.trunc(
	((resultHash[0] * weights[0]) / 100 +
		(resultHash[1] * weights[1]) / 100 +
		(((resultHash[2] * scores[2].length + 1) / (scores[2].length + 1)) *
			weights[2]) /
			100) *
		10
);

if (curMin === curMax) {
	targetTest =
		(curMin / 10 -
			(resultHash[0] * weights[0]) / 100 -
			(resultHash[1] * weights[1]) / 100) /
		(weights[2] / 100);
	console.log(
		(
			targetTest * (scores[2].length + 1) -
			resultHash[2] * scores[2].length
		).toFixed(4)
	);
	finalTest = Math.ceil(
		(
			(targetTest * (scores[2].length + 1) - resultHash[2] * scores[2].length) *
			100
		).toFixed(4)
	);
} else {
	targetTest =
		(curMax / 10 -
			(resultHash[0] * weights[0]) / 100 -
			(resultHash[1] * weights[1]) / 100) /
		(weights[2] / 100);
	finalTest = Math.ceil(
		(targetTest * (scores[2].length + 1) - resultHash[2] * scores[2].length) *
			100
	);
}

console.log(current, curMin, curMax, targetTest, finalTest);
