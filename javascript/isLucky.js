function isLucky(n) {
    const nArray = Array.from(n.toString());
    const length = nArray.length / 2;
    let subtotal1 = 0;
    let subtotal2 = 0;
    i2 = nArray.length - 1;
    for (i = 0; i <= length - 1; i++) {
        subtotal1 += Number(nArray[i]);
        subtotal2 += Number(nArray[i2]);
        i2 -= 1;
    }
    if (subtotal1 === subtotal2) {
        return true;
    }
    return false;
}

// A number is lucky if the sum of the first half of the digits equals the sum of the second half.
// For n = 1230 => true / for n = 239017 => false
