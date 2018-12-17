const directionMap = [">>", ">v", "^<"];
const start = [1, 0];
let mapA = [];
let output = [];
directionMap.forEach(item => {
    mapA.push(item.split(""));
});
let y = start[0];
let x = start[1];
let path = true;
while (path === true) {
    if (!mapA[y][x] || mapA[y][x] === ".") {
        path = false;
    } else {
        d = mapA[y][x];
        mapA[y].splice(x, 1, ".");
        console.log(mapA);
        if (d === ">") {
            x += 1;
        } else if (d === "<") {
            x -= 1;
        } else if (d === "v") {
            y += 1;
        } else {
            y -= 1;
        }
        console.log(x, y);
    }
}
// mapA.forEach(item => {
//     output.push(item.join(""));
// });
output = mapA.map(e => e.join(""));

console.log(output);
