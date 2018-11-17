function medianScores(scores) {
    let sortArray = [];
    let medianArray = [];
    let midPoint = 0;

    for (i = 0; i <= scores.length - 1; i++) {
        if (i === 0) {
            sortArray.push(scores[i]);
        } else if (i === 1) {
            if (scores[i] >= sortArray[0]) {
                sortArray.push(scores[i]);
            } else {
                sortArray.unshift(scores[i]);
            }
        } else {
            if (scores[i] <= sortArray[0]) {
                sortArray.unshift(scores[i]);
            } else if (scores[i] >= sortArray[i - 1]) {
                sortArray.push(scores[i]);
            } else {
                //start Binary insert process
                min = 0;
                max = sortArray.length - 1;
                while (sortArray.length < i + 1) {
                    test = Math.round((max + min) / 2);
                    if (scores[i] === sortArray[test]) {
                        sortArray.splice(test, 0, scores[i]);
                    } else if (test >= max) {
                        sortArray.splice(max, 0, scores[i]);
                    } else if (test <= min) {
                        sortArray.splice(min, 0, scores[i]);
                    } else if (scores[i] > sortArray[test]) {
                        min = test;
                    } else {
                        max = test;
                    }
                }
            }
        }
        midPoint = sortArray.length / 2;
        if (sortArray.length % 2 !== 0) {
            median = sortArray[midPoint - 0.5];
        } else {
            median = Math.round(
                (sortArray[midPoint] + sortArray[midPoint - 1]) / 2
            );
        }
        medianArray.push(median);
    }
    return medianArray;
}
// Given scores, an array of integers representing all test and assignment scores, your task is to return an array of integers where output[i] represents the median grade after all marks up to (and including) scores[i] have been entered. Your instructor is a generous marker, so they always round the median up to the nearest integer.
// for [100, 20, 50, 70, 45] => [100, 60, 50, 60, 50]
