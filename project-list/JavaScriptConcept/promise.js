// let promise = new Promise((resolve,reject)=>{
//     let success = false;
//     if(success){
//         resolve("Promise Resolve")
//     }else{
//         reject("Reject")
//     }
// })

// promise.
// then((data)=>console.log(data))
// .catch((error)=>console.log(error))
// .finally((data))


function promise1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
             resolve("Promise 1 Resolve")
        },2000)
    })
}

function promise2(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
             reject("Promise2 Reject")
        },1000)
    })
}
function promise3(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
             resolve("Promise2 Resolve")
        },100)
    })
}

promise1()
.then((data)=>{
    console.log(data);
    return promise2();
})
.then((data)=>{
    console.log(data);
    return promise3()
})
.then((data)=>console.log(data))
.catch((error)=>console.log(error))