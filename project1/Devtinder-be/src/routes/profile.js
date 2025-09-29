const express = require('express');
const {userAuth} = require("../middlewares/auth");
const {validateProfileEditData} = require("../utils/validation")


const profileRouter = express.Router();



//profile
profileRouter.get("/profile/view", userAuth,async (req, res) => {
  try {
    // const cookies = req.cookies;
    // const { token } = cookies;
    // if(!token){
    //   throw new Error("Invalid Token")
    // }
    // const decodedMessage = await jwt.verify(token, "Dev@Tinder@770");
    // const { _id } = decodedMessage;
    // console.log(_id,"sasa")
    const user =req.user
    // console.log(user,"uswr")
    // console.log(_id);
    // if (!user) {
      // console.log(cookies,"sss")
    //   throw new Error("User Does Not Exists")
    // }
    res.send(user);
  } catch (err) {
    res.status(400).send("something went Wrong" + err.message);
  }
});


profileRouter.patch("/profile/edit",userAuth,async(req,res)=>{
  try{
    validateProfileEditData(req);
    const loggedInUser = req.user;
    loggedInUser.firstName = req.body.firstName,
    console.log(Object.keys(req.body))
    Object.keys(req.body).forEach((key)=>(loggedInUser[key]) = req.body[key]);
     await loggedInUser.save();
     res.json({
      message:`${loggedInUser.firstName} your profile updated successfully`,
      data:loggedInUser
     })

    // console.log(loggedInUser,"logged")
  }catch(error){
    res.status(400).send("Invalid Data")
  }
})
module.exports = profileRouter;