const express = require("express");
const { userAuth } = require("../middlewares/auth");
const ConnectionRequest = require("../models/connectionRequest");
const User = require("../models/user");

const requestRouter = express.Router();

requestRouter.post(
  "/request/send/:status/:toUserId",
  userAuth,
  async (req, res) => {
    try {
      const fromUserId = req.user._id;
      const toUserId = req.params.toUserId;
      const status = req.params.status;
    //  const toUser = await User.findOne(toUserId);
      const allowedStatus = ["interested", "ignored"];
      if (!allowedStatus.includes(status)) {
        res.json({
          message: "Invalid Status",
        });
      }

      const existingConnectionRequest = await ConnectionRequest.findOne({
          $or: [
            { fromUserId, toUserId },
            { fromUserId: toUserId, toUserId: fromUserId },
          ],
        });
        if (existingConnectionRequest) {
          return res.status(400).send({
            message: "connection Request Already Exists !!",
          });
        }

      const connectionRequest = new ConnectionRequest({
        fromUserId,
        toUserId,
        status,
      });

      const data = await connectionRequest.save();

      res.json({
        message: req.user.firstName + 'connetion',
        data,
      });
    } catch (err) {
      throw new Error("ERROR:-" + err.message);
    }
  }
);
module.exports = requestRouter;
