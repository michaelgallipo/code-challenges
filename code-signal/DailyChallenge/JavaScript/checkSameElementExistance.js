// First try, timed out
// checkSameElementExistence = (a, b) => (a.filter(x => b.includes(x)).length > 0)

// Second Try - Passed all tests
checkSameElementExistence = (a, b) => {
  let x = new Set(a);
  let y = new Set(b);
  let c = new Set([...x, ...y]);
  return c.size !== x.size + y.size;
};
