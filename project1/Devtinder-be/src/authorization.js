const express = require('express');
const app = express();

//this is my middleware when ever we used app.use this act as middle ware bcz it work from every method and interpet each and every response
app.use('/admin',(req,res,next)=>{
        const isAuthorizedAdmin = 'xyzss';
    const token = 'xyz';
    if(isAuthorizedAdmin == token){
        next()
    }else{
        res.sendStatus(401).send("Unauthorized User")
    }
})
  
app.get('/admin/getAllAdminData',(req,res)=>{
    // const isAuthorizedAdmin = 'xyzss';
    // const token = 'xyz';
    // if(isAuthorizedAdmin == token){
    //     res.send("All Data Send TO User")
    // }else{
    //     res.sendStatus(401).send("Unauthorized User")
    // }
    res.send("All Data Send TO User")
})

app.delete('/admin/deleteAllAdminData',(req,res)=>{
//    const isAuthorizedAdmin = 'xyz';
//     const token = 'xyz';
//     if(isAuthorizedAdmin){ 
//         res.send("Delete Particular User Data")  
//     }else{
//         res.sendStatus(401).send("NOt Authorized User")
//     }
  res.send("Delete Particular User Data")  
})

app.listen(4000,()=>{
    console.log("Authorization")
})

