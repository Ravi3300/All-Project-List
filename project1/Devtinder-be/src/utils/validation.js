const validator = require("validator");
const validateSignUpData = (req) =>{
  const {firstName,lastName,emailId,password}= req.body;
  if(!firstName || !lastName){
    throw new Error("Name is Not Valid")
  }else if(firstName.length <= 4 && firstName.length >= 50){
     throw new Error("Name Should be 4 to 50")
  }
  else if(!validator.isEmail(emailId)){
      throw new Error("Email is Not Valid") 
  }else if(!validator.isStrongPassword(password)){
      throw new Error("Password is not strong") 
  }
}


const validateProfileEditData = (req) =>{
  const allowedEditData = ["firstName","lastName","age","gender","photoUrl","about","skills"];
  const isAllowed = Object.keys(req.body).every((field)=>allowedEditData.includes(field));
  return isAllowed // return boolean
}
module.exports = {
  validateSignUpData,
  validateProfileEditData
}

// This is my helper function and it is godd way to validate our api