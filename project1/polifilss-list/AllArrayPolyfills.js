
Array.prototype.myForEach = function(cb){
    for(let i = 0; i <= this.length-1; i++){
        cb(this[i]);
    }
}

Array.prototype.myMap = function(cb){
    let newArr = [];
    for(let i = 0; i <=this.length-1; i++){
        newArr.push(cb(this[i]));
    }
    return newArr;
}

Array.prototype.myFilter = function(cb){
    let newArr = [];
    for(let i = 0; i <=this.length-1; i++){
        if(cb(this[i])){
          newArr.push(this[i]);
        }

    }
    return newArr;
}

Array.prototype.myReduce = function(cb,intialVal){
    let acc = intialVal;
    for(let i = 0; i <= this.length-1; i++){
        acc= acc?cb(this[i],acc):this[i]
    }
    return acc;
}

let arr = [1,2,3,4];
 let newVal = arr.myReduce((acc,curr)=>{
       return acc+curr
 },0)
console.log(newVal)

