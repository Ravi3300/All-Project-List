const express = require('express');
const User = require("../models/user");
const { validateSignUpData } = require("../utils/validation");
const bcrypt = require("bcrypt");
const validator = require("validator");


const authRouter = express.Router();


authRouter.post("/signup", async (req, res) => {
  //  console.log("api called")
  //  console.log(req.body,"req") // this is give undefined bcz hym json passed kr raha hai jiseko ye read nhi kr raha hai to ishe normal stringmay convert krenge jise ke liye hum express ka middleware .json() ka use karenge

  //creating a new instance of the user model
  //  const userData ={  // this data is hard code now its time to make dynamic
  //     firstName:"Ravi",
  //     lastName:"Yadav",
  //     emailId:"abc@gmail.com",
  //     password:"ravi@123"
  //  }
  //   const user = new User(userData);
  try {
    // step1:- Validate of data (check name validation,email validation )
    validateSignUpData(req);
    const { firstName, lastName, emailId, password } = req.body;
    // const user = new User(req.body); bad way to send data in db

    //step2:-Encrypt your password

    // The salt to be used in encryption. If specified as a number then a salt will be generated with the specified number of rounds and used.
    // @return — A promise to be either resolved with the encrypted data salt or rejected with an Error
    //once encryption done not possible  to decrypt
    const passwordHash = await bcrypt.hash(password, 10);
    console.log(passwordHash);
    //step3:- Then store data in database
    const user = new User({
      firstName,
      lastName,
      emailId,
      password: passwordHash,
    });
    await user.save();
    res.send("User Added Successfully");
  } catch (error) {
    res.status(400).send("ERROR: " + error.message);
  }
});


//login api
authRouter.post("/login", async (req, res) => {
  try {
    const { emailId, password } = req.body;
    if (!validator.isEmail(emailId)) {
      throw new Error("Not A Valid EmailId");
    }
    const user = await User.findOne({ emailId: emailId });
    if (!user) {
      throw new Error("User Not Found");
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new Error("Invalid Password");
    } else {
      // create JWT token

      // Add the token to cookies and send the reonse back to the user
      // const token = await jwt.sign({ _id: user._id }, "Dev@Tinder@770",{expiresIn:"1d"});
      // res.cookie("token", token);
      // console.log(token);
      const token = await user.getJWT();
      res.cookie("token", token,{
        expires:new Date(Date.now() + 8*3600000)
      });
      res.send("Login Successfully");
    }
  } catch (error) {
    res.status(400).send("ERROR: " + error.message);
  }
});

//logoutApi

authRouter.post("/logout",async(req,res)=>{
   console.log(req,'+',res);
   res.cookie('token',null,{expires:new Date(Date.now())})
   res.send("logout successfully")
})

module.exports = authRouter;