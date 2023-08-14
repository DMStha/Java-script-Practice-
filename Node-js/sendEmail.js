/*
Plan of Action:
1. Send email to user saying 'hello world' (DONE)
2. Send email to multiple users by creating email function (DONE)
3. email template (designed template) >> Get the email templates by searching in the google

*/

const nodemailer = require("nodemailer");
const handlebars = require("handlebars");
const { promisify } = require("util");
const fs = require("fs");

const readFile = promisify(fs.readFile);

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "diomhresth2000@gmail.com",
    pass: "vmvihxsfdjgmcokn",
  },
});

async function main(receivers, data, htmlFile) {
  const html = await readFile(htmlFile, "utf8");
  const template = handlebars.compile(html);

  const htmlToSend = template(data);

  const info = await transporter.sendMail({
    from: '"Diom Shrestha " <diomhresth2000@gmail.com>', // sender address
    to: receivers.toString(), // list of receivers
    subject: "Hello ✔", // Subject line
    html: htmlToSend,
  });

  console.log("Message sent: %s", info.messageId);
}

// Change here
const data = {
  name: "Diom Shrestha",
  msg: "How are you??",
  s,
};
const htmlFile = "./email.html";
const receivers = ["diomhresth2000@gmail.com"];
main(receivers, data, htmlFile).catch(console.error);
