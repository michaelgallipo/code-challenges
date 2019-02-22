let s = "this is not, not: as easy; as I thought";

let a = s.split(/[-,:.; ]/);
let h = {}

a.forEach((elem) => {
  if (elem) {
    if (h[elem]) {
      console.log(elem)
    }
    else {
      h[elem] = true
    }
  }

})

console.log(a)