function getInputChange(){
    let data = document.getElementById('ip').value

  console.log('fetch data',data)
}

const debounce = (fn,d) =>{
    let timer=0
    return function(){
        clearTimeout(timer)
       timer=  setTimeout(()=>{
           fn()
        },d)
    }
}

const getBetterFunction = debounce(getInputChange,300);



// const throttling = (fn,d) =>{
//   let flag = true;
//     return function(){
//         if(flag){
//             fn()
//             flag = false
//         }
//         setTimeout(()=>{
//             flag = true
//         },d)
//     }
// }

const throttling = (fn, d) => {
  let flag = true;
  return function (...args) {
    if (flag) {
      fn.apply(this, args);  // supports arguments & context
      flag = false;
      setTimeout(() => {
        flag = true;
      }, d);
    }
  };
};


const getBetterFunction2 = throttling(getInputChange,300);

