const express = require("express");
const app = express();
const nodemailer = require("nodemailer");
let PORT = 8080;

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
  from: "",
  to: "",
  subject: "",
  text: ""
}

function toSendEmail(t, sub, txt)
{
  let mailOptions = 
  {
    from: "devopsbatch16jiangmingzhi@gmail.com",
    to: t,
    subject: sub,
    text: txt
  }

  transporter.sendMail(mailOptions, 
    function(err, success)
    {
      if(err)
      {
        console.log(err);
      }
      else
      {
        console.log("email sent");
        
      }
    });
}

app.get("/", (req, res) => {
    res.send("email service is running!");
    
  });

app.get("/sendemail", (req, res) => {
    
    var target_email = req.query.email;
    var email_subject = req.query.subject;
    var email_text = req.query.text;
    toSendEmail(target_email, email_subject, email_text);
    res.send("email subject "+ email_subject + " with a text of" + email_text + " has been sent to " + target_email);
  });
  
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

