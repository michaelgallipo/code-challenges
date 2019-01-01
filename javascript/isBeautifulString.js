function isBeautifulString(inputString) {
    let hash = {
            a: 0,
            b: 0,
            c: 0,
            d: 0,
            e: 0,
            f: 0,
            g: 0,
            h: 0,
            i: 0,
            j: 0,
            k: 0,
            l: 0,
            m: 0,
            n: 0,
            o: 0,
            p: 0,
            q: 0,
            r: 0,
            s: 0,
            t: 0,
            u: 0,
            v: 0,
            w: 0,
            x: 0,
            y: 0,
            z: 0,
            xtra: 0
        },
        result = true;
    for (i = 0; i < inputString.length; i++) {
        hash[inputString[i]] += 1;
    }
    let array = Object.entries(hash);

    let x = 0,
        count = 0;
    while (count < inputString.length) {
        count += array[x][1];
        if (array[x + 1][1] > array[x][1] || array[x][1] === 0) {
            result = false;
            break;
        } else {
            x += 1;
        }
    }
    return result;
}

// A string is said to be beautiful if b occurs in it no more times than a; c occurs in it no more times than b; etc.

// For inputString = "bbbaacdafe" => true
// For inputString = "aabbb" => false
