function sleddingHills(enjoyability, maxRuns) {
    let max = 1;
    let nextMax = 0;
    let maxI = 0;
    let fun = 0;
    while (maxRuns > 0 && (max > 0 || nextMax > 0)) {
        max = 0;
        enjoyability.forEach((num, i) => {
            if (num >= max) {
                nextMax = max;
                max = num;
                maxI = i;
            } else if (num > nextMax) {
                nextMax = num;
            }
        });
        while (max >= nextMax && maxRuns > 0 && max > 0) {
            fun += max;
            max -= 1;
            enjoyability.splice(maxI, 1, max);
            maxRuns -= 1;
        }
    }
    return fun;
}
// There's been a fresh snowfall, so it's time for you to visit your favourite sledding hill! There are several different runs available, and you prefer some of them over others. More specifically, your enjoyment of each of the runs is represented using numerical values, in the array enjoyability. But due to repetitiveness, each time you sled down run i, the value of enjoyability[i] will decrease by 1. You have time for as many as maxRuns total, and your task is to find the maximum possible total enjoyment you can experience throughout the day!

//For enjoyability = [1, 8, 3] and maxRuns = 5 => 30 
