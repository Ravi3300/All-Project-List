const mongoose = require("mongoose");
const {Schema} = mongoose;
var validator = require('validator');
const jwt = require("jsonwebtoken")

const userSchema = new Schema({
    firstName:{
        type:String,
        required:true,
        minLength:4,
        maxLength:50
    },
    lastName:{
        type:String
    },
    emailId:{
        type:String,
        required: true,
        unique: true,
        lowercase:true,
        trim:true,
        validate(value){
          if(!validator.isEmail(value)){
            throw new Error("Not A Valid Email Id")
          }
        }
    },
    password:{
        type:String,
        required:true
    },
    age:{
        type:String,
        min:18
    },
    gender:{
        type:String,
        enum:{
            values:["Male","Female","other"],
            message:`{VALUE} is incorrect `
        }
        // validate(value){
        //     if(!['male','female','other'].includes(value)){
        //         throw new Error("Not A Valiate User")
        //     }
        // }
    },
    photoUrl:{
        type:String
    },
    about:{
        type:String,
        default:"This is the default value"
    },
    skills:{
        type:[String]
    }
},{ timestamps: true });

userSchema.methods.getJWT= async function(){
    const user = this // refer to current schecma 
    const token = await jwt.sign({ _id: user._id }, "Dev@Tinder@770",{expiresIn:"7d"});
    return token
}
//.model methos take 2 thing 1st is name of model and second one is schema
const User = mongoose.model('User',userSchema);
// await User.syncIndexes();  // rebuilds indexes based on schema
module.exports = User;