function burningCandles(candleSizes, n) {
  candleSizes.sort((a, b) => b - a);
  let c = candleSizes.length;
  let tot = 0;
  while (c > 0) {
    let subtot = 0;
    let newC = 0;
    for (i = 0; i <= n - 1; i++) {
      if (candleSizes[i]) {
        tot += candleSizes[i];
        subtot += candleSizes[i];
        b = i + 1;
        c -= 1;
      }
    }
    if (b === n && subtot / (n + 1) >= 1) {
      newC = Math.trunc(subtot / (n + 1));
      candleSizes.splice(0, n, newC);
      c += 1;
      subtot = 0;
    }
  }
  return tot;
}
