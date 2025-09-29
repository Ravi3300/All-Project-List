let arr = [1, 2, 3, 4, 5];

// let responseData = arr.reduce((curr, acc) => {
//     return curr + acc;
// }, 0)
// console.log(responseData);



Array.prototype.myReduce = function (cb,intialValue) {
    let acc = intialValue;
    for(let i = 0; i < this.length; i++){
        acc = acc ? cb(this[i], acc): this[i]
    }
    return acc;
}

let responseData = arr.reduce((curr, acc) => {
    return curr + acc;
}, 0)

// console.log(responseData);


//Call, Apply,Bind Polyfill

let person1 = {
    "name": "John"
}

let person2 = {
    "name": "Doe"
}

function printAge(age) {
   console.log(`${this.name} age is ${age}`)
}
// printAge.call(person2, 23)

//call polyfill
Function.prototype.myCall = function (obj={},...args) {
    if (typeof this !== 'function') {
        throw new Error('Not Callable')
    } else {
        obj.fn = this;
        obj.fn(...args)
    }
}

printAge.myCall(person2, 987)

//Apply PolyFills

Function.prototype.myApply = function (obj = {}, ...args) {
    if (typeof this !== 'function') {
        throw new Error('Not Callable')
    }
    if (typeof Array.isArray(...args)) {
        throw new Error('TypeError : CreateListFromArrayLike ')
    }
    obj.fn = this;
    obj.fn(...args);
}
printAge.myApply(person2, 987)


//Bind PolyFills

Function.prototype.myBind = function (obj = {}, ...args1) {
    if (typeof this !== 'function') {
        throw new Error('Not Callable')
    }
    obj.fn = this;
    return function (...args2) {
        obj.fn(...args1,...args2)
     }
}
let copyOfBindCaled = printAge.myBind(person2)
copyOfBindCaled(23)


//Promise.all Method Polyfill
Promise.myAll = function (promiselist) {
    return new Promise((resolve, reject) => {
        let result = [];
        if (!promiselist.length) {
            resolve(result)
            return;
        }
        let pending = promiselist.length;
        promiselist.forEach((promise,idx) => {
            Promise.resolve(promise).then((resVal) => {
                result[idx] = resVal;
                pending--;
                if (pending == 0) {
                    resolve(result)
                }
           },reject)
        })
    })
}

Array.prototype.myFlat = function (depth = 1) {
    let res = [];
    for (let i = 0; i < this.length; i++) {
        if (Array.isArray(this[i]) && depth > 0) {
            // Recursively flatten the array
            res = res.concat(this[i].myFlat(depth - 1));
        } else {
            // Push non-array elements directly
            res.push(this[i]);
        }
    }
    return res;
};

// Test case
let arr1 = [[1], [[2, 3]], 'g', [[[[2, 3, 4]]]]];
console.log(arr.myFlat(4));

// Flatten the array in recursively

function flattenArray(arr){
    let res = [];
    for(let i = 0; i<arr.length; i++){
        if(Array.isArray(arr[i])){
          res = res.concat(flattenArray(arr[i]));
        }else{
            res.push(arr[i])
        }
    }
    return res;
}
const nestedArray = [[1], [1, 2,[3,4,[1,2,3]]], [3, 4], 'g'];

let data = flattenArray(nestedArray);
console.log(data)