
const func = (x) => {
    let arr = [];
    x.forEach(element => {
        arr.push(Math.round(element));        
    });
    return arr;
}

module.exports = func;