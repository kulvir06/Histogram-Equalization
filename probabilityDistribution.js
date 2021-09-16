
const func = (x, n) => {
    let arr = [];
    x.forEach(element => {
        arr.push(element/n);                
    });
    return arr;
}

module.exports = func;