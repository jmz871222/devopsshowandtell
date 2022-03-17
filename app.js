const express = require("express");
const app = express();
const nodemailer = require("nodemailer");
let PORT = 3000;

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth:{
    user: "devopsbatch16jiangmingzhi@gmail.com",
    pass: "testing123!"

  },
  tls:{
    rejectUnauthorized: false,
  }
})

let mailOptions = {
  from: "devopsbatch16jiangmingzhi@gmail.com",
  to: "jiang.missouri@gmail.com",
  subject: "testing",
  text: "hello!!!"
}

transporter.sendMail(mailOptions, function(err, success){
  if(err){
    console.log(err);
  }
  else{
    console.log("email sent");
  }
});

app.get("/", (req, res) => {
  res.send("email service is running!");
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

