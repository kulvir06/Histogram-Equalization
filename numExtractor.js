
const func = (x) => {
    let arr = [];
    x.forEach(element => {
        arr.push(Number(element))        
    });
    return arr;
}

module.exports = func;