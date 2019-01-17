// const test = { cheese: ["pizza", "quesadilla"] };

// let testA = Object.entries(test);

// console.log(testA);

dishes = [
	["Salad", "Tomato", "Cucumber", "Salad", "Sauce"],
	["Pizza", "Tomato", "Sausage", "Sauce", "Dough"],
	["Quesadilla", "Chicken", "Cheese", "Sauce"],
	["Sandwich", "Salad", "Bread", "Tomato", "Cheese"]
];

let hash = {},
	arr = [];

dishes.forEach(item => {
	for (x = 1; x < item.length; x++) {
		if (!hash[item[x]]) {
			hash[item[x]] = [item[0]];
		} else {
			hash[item[x]].push(item[0]);
		}
	}
});

let i = 0;
Object.entries(hash).forEach(entry => {
	if (entry[1].length > 1) {
		entry[1] = entry[1].sort();
		entry[1].unshift(entry[0]);
		arr.push([entry[1]]);
		// entry[1].forEach(item => {
		// 	arr[i].push(item);
		// });
		i += 1;
	}
});

console.log(arr.sort());

