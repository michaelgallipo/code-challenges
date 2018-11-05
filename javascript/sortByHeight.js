function sortByHeight(a) {
    let people = [];
    a.forEach(function(number) {
        if (number > -1) {
            people.unshift(number);
        }
    });
    people.sort(function(a, b) {
        return a - b;
    });
    i2 = 0;
    for (i = 0; i <= a.length - 1; i++) {
        if (a[i] > 0) {
            a.splice(i, 1, people[i2]);
            i2 += 1;
        }
    }
    return a;
}
// -1 represents a tree that cannot be moved.
// Sort the people by height and plave back into array wothout moving the trees
// for a =[-1, 150, 190, 170, -1, -1, 160, 180]
// output = [-1, 150, 160, 170, -1, -1, 180, 190]
