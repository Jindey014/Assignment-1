matrix = [[-1, 1, 1], [1, -1, 1], [1, 1, -1]];
let prim = 0;
let sec = 0;
function calc(type) {
    for (let i = 0; i < matrix.length; i++) {
        prim = prim + matrix[i][i];
        sec = sec + matrix[i][matrix.length - 1 - i];
    }
    if (type == "principal") {
        return prim;
    }
    else if (type = "secondary") {
        return sec;
    }
    else {
        return console.log("LOL");
    }
}
result = calc("secondary");
console.log(result);