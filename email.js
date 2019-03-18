var nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "example@gmail.com",
    pass: "example123"
  }
});

var mailOptions = {
  from: "varunsuresh.h@gmail.com",
  to: "dpsunilshetty04@gmail.com,varunsuresh.h@gmail.com",
  subject: "Sending Email using Node.js",
  text: "Sending Email using Node.js, Thanks and regards, Varun H S"
};

transporter.sendMail(mailOptions, function(error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
