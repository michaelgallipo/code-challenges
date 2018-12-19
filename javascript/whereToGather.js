function whereToGather(travelCosts) {
    let r = -1;
    for (x = 0; x <= travelCosts.length - 1; x++) {
        let tot = 0;
        for (y = 0; y <= travelCosts[0].length - 1; y++) {
            if (travelCosts[y][x] === -1) {
                tot = -1;
                break;
            } else {
                tot += travelCosts[y][x];
            }
        }
        if ((tot < r && tot > -1) || (r === -1 && tot > -1)) {
            r = tot;
        }
    }
    return r;
}

//
