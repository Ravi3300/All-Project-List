let promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Resolved-1");
  }, 1000);
});

let promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Resolved-2");
  }, 500);
});

let promise3 = new Promise((resolve, reject) => {
  resolve("Resolved-3")
});


Promise.runAll = function(promises){
    let newArr = new Array(promises.length);
    let totalPromise = 0;
    return new Promise((resolve,reject)=>{
        promises.forEach((promise,index)=>{
            promise.then((val)=>{
                newArr[index] = val;
                totalPromise++;
                if(totalPromise == newArr.length){
                    resolve(newArr)
                }
            }).catch((error)=>{
                reject(error)
            })
        })
    })
}

let data = Promise.runAll([promise1,promise2,promise3]).then((data)=>console.log(data)).catch((error)=>console.log(error))



====================================================================================================================

let promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Resolved-1");
  }, 1000);
});

let promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Resolved-2");
  }, 500);
});

let promise3 = new Promise((resolve, reject) => {
  resolve("Resolved-3")
});

Promise.customeAllSettled = function(promises){
    let promiseAns = [];
    let totalPromise = 0;
    return new Promise((resolve,reject)=>{
        promises.forEach((promise,index)=>{
            promise.then((val)=>{
                promiseAns[index] = {
                     "status":"fulfilled",
                    val
                }
                // promiseAns.push({
                //     "status":"fulfilled",
                //     val
                // })
            }).catch((error)=>{
                 promiseAns[index] ={
                       "status":"rejected",
                    error
                 }
                //  promiseAns.push({
                //     "status":"rejected",
                //     error
                // })
            }).finally((data)=>{
                totalPromise++;
                if(totalPromise == promises.length){
                    resolve(promiseAns)
                }
            })
        })
    })
}

let data = Promise.customeAllSettled([promise1,promise2,promise3]).then((data)=>console.log(data)).catch((error)=>console.log(error))