// 'use strict'
// console.log(this);
// console.log(window);
// console.log(this === window)

// function x(){
//     console.log(this)
// }
// x();

// const abc = ()=>{
//     console.log(this)
// }
// abc();


// const obj ={
//     name:"Ritetsh",
//     age:"23",
//     getVal:function(){
//         console.log(this.name);
//     }
// }

// obj.getVal();



const obj2 ={
    name:"ravi",
    age:"23",
    getVal:()=>{
        console.log(this.name,"sss");
    }
}

// obj2.getVal();


const person = {
  name: "Ravi",
  normalFunc: function() {
    console.log("normal:", this.name);
  },
  arrowFunc: () => {
    console.log("arrow:", this.name);
  }
};

// person.normalFunc();
// person.arrowFunc();


const user = {
  name: "Ritesh",
  show: function() {
    const arrow = () => {
      console.log("inner arrow:", this.name);
    };
    arrow();
  }
};

user.show();

const car = {
  brand: "Tesla",
  getBrand: function() {
    console.log(this.brand);
  }
};

const x = car.getBrand;
x();



function greet() {
  console.log("Hello,", this.name);
}

const person1 = { name: "Ravi" };
const person2 = { name: "Ritesh" };

const g1 = greet.bind(person1);
const g2 = greet.bind(person2);

g1();
g2();


const obj = {
  name: "Ravi",
  show: function() {
    setTimeout(function() {
      console.log("timeout normal:", this.name);
    }, 100);

    setTimeout(() => {
      console.log("timeout arrow:", this.name);
    }, 200);
  }
};

obj.show();
