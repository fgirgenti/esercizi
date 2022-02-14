function sum(...x) {
    return x.reduce((pv, cv) => pv + cv);
}

console.log(sum(1, 2, 3, 4, 5));