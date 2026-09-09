export const checkBeforLogin = (req, res, next) => {
  const name = "qalam";
  let output = [];
  if (name == "alam") {
    // res.send("you are logged in as a admin");
    output = console.log("you are logged in as a admin");
    next();
  } else {
    output = console.log("you have not an admin account");
    res.send("you have not an admin account");
  }
  console.log(output);
};

// module.exports = {
//   checkBeforLogin,
// };
