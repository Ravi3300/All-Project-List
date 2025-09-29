const express = require("express");
const connectDB = require("./config/database");
const cookiesParser = require("cookie-parser");
const app = express(); // here we create a application

app.use(express.json()); // this is my middleware to convert json in normal string obj;
app.use(cookiesParser());

const authRouter = require("./routes/auth");
const profileRouter = require("./routes/profile");
const requestRouter = require("./routes/request");


app.use("/", authRouter);
app.use("/", profileRouter);
app.use("/", requestRouter);







connectDB()
  .then(() => {
    console.log("Database is connected !!!!");
    app.listen(3000, () => {
      console.log("server os listen on 3000");
    });
  })
  .catch(() => {
    console.error("Database is not connected properly");
  });
