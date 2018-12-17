function majorOrMinor(scale) {
  const nH = { A: 9, B: 11, C: 0, D: 2, E: 4, F: 5, G: 7 };
  n1 = scale[0];
  n2 = scale[2];
  v1 = nH[n1[0]];
  n1.length > 2 ? (v1 += 1) : v1;
  v2 = nH[n2[0]] + 12 * (n2[n2.length - 1] - n1[n1.length - 1]);
  n2.length > 2 ? (v2 += 1) : v2;
  return v2 - v1 > 3 ? "major" : "minor";
}

// For any given scale, determines whether scale is major or minor  
