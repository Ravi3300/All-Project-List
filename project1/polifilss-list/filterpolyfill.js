const arr = [1, 2, 3, 4, 5];

// const data = arr.filter((val) => val > 2);
// console.log(data);

Array.prototype.myFilter = function (cb) {
    let newArray = [];
    for (let i = 0; i < this.length; i++){
        if (cb(this[i])) {
            newArray.push(this[i]);
        }
    }
    return newArray;
}


const data = arr.myFilter((val) => val > 3);
console.log(data)