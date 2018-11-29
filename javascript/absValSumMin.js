function absoluteValuesSumMinimization(a) {
    let s = 0;
    let x = a[a.length - 1];
    for (i = 0; i <= a.length - 1; i++) {
        let t = a.reduce(
            (total, number) => (total += Math.abs(number - a[i])),
            0
        );
        if (t >= s && a[i] > x) {
            break;
        } else {
            s = t;
            x = a[i];
        }
    }
    return x;
}
// given a dorted array of integers, find the element of the array that will return the smallest absolute value sum for the following - sum(abs(a[0] - x) + abs(a[1] - x)... ). If there are multiple answers, return the smallest possible x.
// For a = [2, 4, 7] => 4
