function dresses(colors) {
  let o = [];
  colors.forEach((dress, i) => {
    r = parseInt("0x" + dress[0] + dress[1]);
    g = parseInt("0x" + dress[2] + dress[3]);
    b = parseInt("0x" + dress[4] + dress[5]);
    console.log(r, g, b);
    g > r && g > b ? o.push(i) : i;
  });
  return o;
}
