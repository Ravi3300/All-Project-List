let arr = ['Addi',"Ravi"];
let obj = {
    "name":"Ravi",
    "city":"Delhi",
    getInfo:function(){
        console.log(this.name + "From" + this.city)
    }
}
let abc = "Hello"

document.getElementById('grand-parent').addEventListener('click',()=>{
    console.log('GrandParentCalled')
},true)

document.getElementById('parent').addEventListener('click',()=>{
    console.log('ParentCalled')
},true)

document.getElementById('child').addEventListener('click',()=>{
    console.log('childCalled')
},true)