function growingPlant(upSpeed, downSpeed, desiredHeight) {
  let h = 0;
  let d = 0;
  while (h < desiredHeight) {
    d += 1;
    h += upSpeed;
    if (h >= desiredHeight) {
      break;
    }
    h -= downSpeed;
  }
  return d;
}
// Each day a plant is growing by upSpeed meters. Each night that plant's height decreases by downSpeed meters due to the lack of sun heat. Initially, plant is 0 meters tall. We plant the seed at the beginning of a day. We want to know when the height of the plant will reach a certain level.
// For upSpeed = 100, downSpeed = 10, and desiredHeight = 910 => 10

