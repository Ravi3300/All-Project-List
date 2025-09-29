
//  "emailId":"vikash@gmail.com",
//      "password":"Vikash@12344",

//user Api To get particular user Data from Db
//whenever do db operation always used async await

app.get("/user", userAuth, async (req, res) => {
  const userEmail = req.body.emailId;
  try {
    const users = await User.findOne({ emailId: userEmail });
    if (users.length === 0) {
      res.status(404).send("user Not Found");
    } else {
      res.send(users);
    }
  } catch (err) {
    res.status(400).send("something went Wrong");
  }
  // const userEmail = await User.find({emailId:userEmail})
});
//Feed Api-> Get/feed get all the userData from Database

app.get("/feed",userAuth, async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (err) {
    res.status(400).send("something went Wrong");
  }
});

//Delete API =>Delete A Particula Id
app.delete("/user", async (req, res) => {
  const userId = req.body.id;
  try {
    const user = await User.findByIdAndDelete(userId);
    res.send("User Delete Successfully");
  } catch (err) {
    res.status(400).send("something went Wrong");
  }
});

//Update UserId
app.patch("/user/:userId", async (req, res) => {
  //read Database;
  const userId = req.params.userId;
  const data = req.body;
  console.log(data.gender, "update");

  try {
    const ALLOWED_UPDATES = ["photoUrl", "about", "skills", "age", "gender"];

    const isUpdateAllowed = Object.keys(data).every((key) =>
      ALLOWED_UPDATES.includes(key)
    );
    if (!isUpdateAllowed) {
      throw new Error("Update Not Allowed");
    }
    if (data.skills.length > 10) {
      throw new Error("Skill Not More Then 10");
    }
    await User.findByIdAndUpdate({ _id: userId }, data, {
      runValidators: true,
    });
    res.send("User Update Successfully");
  } catch (err) {
    res.status(400).send("something went Wrong" + err.message);
  }
});