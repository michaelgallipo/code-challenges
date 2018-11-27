function trafficLights1D(roadMap) {
    let time = 0;
    let p = 0;
    roadMap.forEach(d => {
        time = time + d[0] - p;
        p = d[0];
        let s = Math.trunc(time / d[1]);
        if (s % 2 !== 0) {
            time += d[1] * (s + 1) - time;
        }
    });
    return time;
}
