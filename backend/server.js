import { checkBeforLogin } from "./middleware/login.js";
import "dotenv/config";
import returnAllExpressModuleFunction from "express";

const app = returnAllExpressModuleFunction();
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("hellooooo");
});
app.post("/", (req, res) => {
  res.send("hellooooo saved");
});
app.get("/home/user", (req, res) => {
  res.send(" from  user0");
});
app.get("/home/", (req, res) => {
  res.send(" from  user");
});
app.get("/home.alam/user", (req, res) => {
  res.send(" from  user2");
});

app.use("/home", (req, res) => {
  res.send("from home");
});

app.use("/admin", checkBeforLogin);

app.get("/admin/order", (req, res, next) => {
  try {
    console.log("order place");
    res.send("your order are store and way to delivery");
  } catch {}
});

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
