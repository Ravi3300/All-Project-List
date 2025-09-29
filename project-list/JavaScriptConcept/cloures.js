function grandParent(){
    let x = 12;
    function parent(){
        let y = 23;

        function child1(){
            let p = 11;

            function child2(){
                let q = 11;

                function child3(){
                    let r = 11;

                    console.log(x,y,p,q,r)
                }
                console.dir(child3,"ddd")
                // child3()
            }
            // child2()
        }  
        // child1()  
    }
    // parent();
}

// grandParent();
// parent();
// child1();
// child2();
// child3();


function cloures(){
     let x = 12;
     console.log(x)

      function xyz(){
        console.log(x)
      }
      xyz();
      console.dir(xyz)
}

cloures()

// when we try to access same level of variable in one function and we define multiple function then default each function going to create cloures
// 1.cloures preservation 2.cloures elimination

// cloures are used to create private variable
// for encapsulation

function parent(){
    let jsLover = 'js';
    function jsLover(){

    }

    function reactLover(){
         console.log(jsLover)
    }

    return [jsLover,reactLover];
}

const [jsLover,reactLover] = parent();
console.dir(jsLover)
console.dir(reactLover)
