function electionsWinners(votes, k) {
    let sorted = [...votes];
    sorted = sorted.sort((a, b) => a - b);
    let i = sorted.length - 1;
    let currentMax = sorted[i];
    let tot = 1;
    for (x = i - 1; x >= 0; x--) {
        if (k === 0 && sorted[x] === currentMax) {
            tot = 0;
            break;
        } else if (sorted[x] + k > currentMax) {
            tot += 1;
        } else {
            break;
        }
    }
    return tot;
}

// Given an array of the numbers of votes given to each of the candidates so far,
// and an integer k equal to the number of voters who haven't cast their vote yet,
// find the number of candidates who still have a chance to win the election.

// The winner of the election must secure strictly more votes than any other candidate.
// If two or more candidates receive the same (maximum) number of votes, assume there is no winner at all.

// for For votes = [2, 3, 5, 2] and k = 3 => 2
