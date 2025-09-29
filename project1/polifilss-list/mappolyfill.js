let arr = [1, 2, 3, 4, 5];
// const data = arr.map((data) => {
//     console.log(data*2)
// })

// function callBack(data) {
//     console.log(data);
// }

Array.prototype.mymap = function (cb) {
    let temp = []
    for (let i = 0; i < this.length; i++){
           /* call the callback function for every value of this array and push the returned value into our resulting array
           */
        temp.push(cb(this[i]))

    }
    return temp;
}


const val = arr.mymap((data) => data * 2);
console.log(val)