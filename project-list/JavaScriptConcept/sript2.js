// 'use strict'
//console.log(this) //it refer to window object in non-strict mode 
function x(){
   // console.log(this); // it give window object
}
 x(); //kuki ish function hum aise call krte hai window.x() here this refer window object


 const obj = {
    a:"10",
    x:function(){
        // console.log(this.a)
    }
 }

 let data = obj.x;
 data()  //We took the function reference and stored it in fn.

// When we call fn(), it’s just a plain function call, not attached to an object anymore.

// In strict mode, this inside a plain function is undefined.

// In non-strict mode, this becomes the global object:

// In browsers → window

// In Node.js → global

const obj5 = {
    a: "Bind example",
    show: function () {
        // console.log(this.a,"bind");
    }
};

const boundFn = obj5.show.bind(obj5);
boundFn(); // "bind example"

const obj6 = {
    a: "Timer",
    show: function () {
        setTimeout(function () {
            // console.log(this.a);
        }, 100);
    }
};

obj6.show(); // ? 

// setTimeout is a built-in function that takes a callback.

// That callback (function () { console.log(this.a); }) is not called as obj6.method.

// Instead, it’s called by the timer system, without any object on the left-hand side.

// That means it’s just a plain function call, so:

// In strict mode → this is undefined.

// In non-strict mode → this is the global object (window in browsers, global in Node).


const obj2 = {
    a:"hii",
    show:function(){
        function inner(){
          console.log(this) // undefined but in not strict if refer window object
        }
        inner()
    }
}
obj2.show()

// Arrow part section


const arrow1={
    a:"12",
    show:()=>{
        console.log(this) // refer enclosing lexical scope ko refer krte means kaha pr define kya hai or ye global define ishiliye this == window
    }
}

arrow1.show()


const arrow2 = {
    a:"hii",
    show:function(){
        const y = ()=>{
            console.log(this)
        }
        y()
    }
}
arrow2.show()