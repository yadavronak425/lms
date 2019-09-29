var User = require("../../models/userModel.js");
module.exports = {
    register : async function (req, res){
        console.log("body ", req.body);
      let email = req.body.email;
      let psw = req.body.psw;
      let pswRepeat = req.body["psw-repeat"];
      var userData = new User({
        name: "",
        email: email,
        password: psw
      });
      await userData.save(function(err) {
        if (err) {
          console.log("User Sign-up DB entry Error.");
          throw err;
        }
        console.log("User Data successfully saved.");
      });
      res.render("index.html");
    },
}
