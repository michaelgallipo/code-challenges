function isSiStebbinsStack(deck) {
  let dA = deck.split(" ");
  const suits = { C: 1, H: 2, S: 3, D: 4 };
  const cH = { A: 1, J: 11, Q: 12, K: 13 };
  let r = 0;
  dA.forEach((card, index) => {
    suit = card[card.length - 1];
    number = card.slice(0, card.length - 1);
    cH[number] ? (number = cH[number]) : number;
    if (index === 0) {
      pSuit = suit;
      pNumber = number;
    } else {
      if (
        r === 0 &&
        (suits[suit] - suits[pSuit] === 1 || suits[suit] - suits[pSuit] === -3)
      ) {
        pSuit = suit;
      } else {
        r === 0 ? (r = index + 1) : r;
      }
      if (r === 0 && (number - pNumber === 3 || number - pNumber === -10)) {
        pNumber = number;
      } else {
        r === 0 ? (r = index + 1) : r;
      }
    }
  });
  return r === 0 ? r + 1 : r;
}

// The Si Stebbins stack is a way to stack playing cards such that each card alternates suit in the repeating order [Clubs, Hearts, Spades, Diamonds] (not necessarily starting with Clubs), and has a numerical value three greater than the preceding card.

// for deck = "10D KC 3H" => 1
// for deck = "9C QH 4S 7D 10H" => 3
