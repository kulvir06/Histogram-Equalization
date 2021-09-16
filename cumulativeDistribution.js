
const func = (x) => {
    let arr = [];
    arr[0] = x[0];
    for(let i =1;i<x.length;i++)
    {
        arr[i] = x[i]+arr[i-1];
    }
    return arr;
}

module.exports = func;