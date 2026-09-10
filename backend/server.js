import { checkBeforLogin } from "./middleware/login.js";
import "dotenv/config";
import express from "express";
import { connectToClusterAndDB } from "./config/databaseMongo.js";
import { User } from "./models/user.js";
const app = express();
const PORT = process.env.PORT || 5000;

app.post("/signup", async (req, res) => {
  const userObj = new User({
    firstName: "mohammad alam",
    lastName: "ansari",
    email: "alam@gmail.com",
    age: 45,
  });
  try {
    await userObj.save();
    res.send("adsfjadsdsa");
  } catch (err) {
    res.status(400).send("Error saving tje user:" + err.emssage);
  }
});

connectToClusterAndDB()
  .then(() => {
    console.log("connect to cluster");
    app.listen(PORT, () => {
      console.log(`listening on ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("failed to connect cluster");
    console.log(err.message);
  });
