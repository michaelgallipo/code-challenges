function countNoFillZones(words) {
  const fill = {
    a: 1,
    b: 1,
    d: 1,
    e: 1,
    g: 1,
    o: 1,
    p: 1,
    q: 1,
    A: 1,
    B: 2,
    D: 1,
    O: 1,
    P: 1,
    Q: 1,
    R: 1,
    0: 1,
    4: 1,
    6: 1,
    8: 2,
    9: 1,
    0: 1
  };
  wa = words.split("");
  count = 0;
  wa.forEach(letter => {
    if (fill[letter]) {
      count += fill[letter];
    }
  });
  return count;
}
console.log(countNoFillZones("Bad88"));

// Originally posted as a reverse challenge (challenge with no description).
// challenged to turned out to be to loop through a string an count up number of fully enclosed spaces.
// for ex b = 1, B = 2, 0 = 1, 8 = 2, etc
// words = "Bad" => 4
// words = "not as good as it looks" => 9
