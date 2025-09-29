
const User = require("../models/user");
const jwt = require("jsonwebtoken");


const userAuth = async(req, res, next) => {
  // REad the token from the req cookies
  // validate the  token
  //find user afetr token validation
  try {
    const { token } = req.cookies;
    console.log("token",token)
    if(!token){
        throw new Error("Token is not valid")
    }
    const decodedObj =  jwt.verify(token, "Dev@Tinder@770");
    const { _id } = decodedObj;
    const user = await User.findById(_id);

     console.log("decodedObj",decodedObj);
    if (!user) {
      throw new Error("User Not Found");
    } else {
        req.user = user // ye user ko attach krke req may send kr dega
      next();
    }
  } catch (error) {
    res.status(400).send("ERROR:" + error.message)
  }
};

module.exports ={
    userAuth
}