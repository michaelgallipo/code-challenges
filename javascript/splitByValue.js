function splitByValue(k, elements) {
    const l = elements.filter((n) => n < k);
    const g = elements.filter((n) => n >= k)
    return l.concat(g)
}