function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {
  let strong1, strong2;
  let weak1, weak2;
  yourLeft >= yourRight
    ? ((strong1 = yourLeft), (weak1 = yourRight))
    : ((strong1 = yourRight), (weak1 = yourLeft));
  friendsLeft >= friendsRight
    ? ((strong2 = friendsLeft), (weak2 = friendsRight))
    : ((strong2 = friendsRight), (weak2 = friendsLeft));
  return strong1 === strong2 && weak1 === weak2 ? true : false;
}

// two people are equally strong if the strength of each stronger arm and each weaker arm is the same. The arms do not need to be the same side of the body.
//For yourLeft = 10, yourRight = 15, friendsLeft = 15, and friendsRight = 10 => true
//yourLeft = 15, yourRight = 10, friendsLeft = 15, and friendsRight = 9 => false
