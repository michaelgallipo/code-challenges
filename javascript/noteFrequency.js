function noteFrequency(note) {
  const noteHash = { A: 0, B: 2, C: -9, D: -7, E: -5, F: -4, G: -2 };
  let value = 12 * (note[note.length - 1] - 4) + noteHash[note[0]];
  if (note.length > 2) {
    note[1] === "#" ? (value += 1) : (value -= 1);
  }

  let frequency = 440 * Math.pow(2, value / 12);
  return frequency;
}
