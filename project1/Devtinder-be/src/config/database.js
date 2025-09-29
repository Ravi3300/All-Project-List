const mongoose = require("mongoose");

//BYDEFAULT MOOGOSE RETURN PROMISE SO BEST PRACTICE TO WRAP WITH ASYNC AWAIT
//devTinder is name of our database
// export ishiliye kiya taki proper way may listen kr shke
async function connectDB(){
    await mongoose.connect('mongodb+srv://yadavravi6451:lTBWYVx3XbtSVcXI@namastenodejs.cyviaht.mongodb.net/devTinder')
} 

module.exports = connectDB
