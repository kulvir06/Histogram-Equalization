
const func = (x,val) => {
    let arr = [];
    x.forEach(element => {
        arr.push(element*val);        
    });
    return arr;
}

module.exports = func;