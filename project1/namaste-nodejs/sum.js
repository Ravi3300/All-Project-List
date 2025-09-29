function calculateSum(a,b){
    let sum = a+b;
    console.log(sum);
}
let x = "sum called"
module.exports = {
    x:x,
    calculateSum:calculateSum
}; // module.exports are used to import module from one component into another comp.