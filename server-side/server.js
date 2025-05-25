// imports
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require('dotenv').config();
// requiring routes
const LOGIN = require("./routes/login");
const SIGNUP = require("./routes/signUp");
const CHECKUSERID = require("./routes/checkuserId");
const NEWORG = require("./routes/newOrganisation");
const LEAVEORG = require("./routes/leaveOrganisation");
const ORGANISATIONS = require("./routes/organisations");
const ISSUES = require("./routes/issues");
const CHATS = require("./routes/chats");
const NEWCAT = require("./routes/newCategory");
const CATEGORY = require("./routes/categories");
const MEMBERS = require("./routes/members");
const NEWISSUE = require("./routes/newIssue");
const SENDCHAT = require("./routes/newMessage");

// connecting mongodb
async function main() {
     try {
          const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/issue-tracker";
          await mongoose.connect(MONGODB_URI, {
               useNewUrlParser: true,
               useUnifiedTopology: true
          });
          console.log("MongoDB connected successfully");
     } catch (error) {
          console.error("MongoDB connection error:", error);
          process.exit(1);
     }
}

main().catch((err) => console.log(err));

const server = express();
server.use(cors());
server.use(express.json());

// user login
server.use("/login", LOGIN);
// user signUp
server.use("/signUp", SIGNUP);
// check if user with given user id exists
server.use("/checkuserid", CHECKUSERID);
// create new organisation
server.use("/newOrg", NEWORG);
// leave organisation
server.use("/leaveOrg", LEAVEORG);
// get all organisations
server.use("/organisations", ORGANISATIONS);
// get all issues
server.use("/issues", ISSUES);
// get messages
server.use("/chats", CHATS);
// new category
server.use("/newCategory", NEWCAT);
// category page
server.use("/categories", CATEGORY);
// members
server.use("/members", MEMBERS);
// new issue
server.use("/newIssue", NEWISSUE);
// new message
server.use("/sendmessage", SENDCHAT);

// starting server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
     console.log(`Server started on port ${PORT}`);
});
