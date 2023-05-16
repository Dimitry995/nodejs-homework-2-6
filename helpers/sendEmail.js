const sgMail = require("@sendgrid/mail");
require("dotenv").config();

const { BASE_URL } = 'localhost:3600';

sgMail.setApiKey('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');

const sendEmail = async (email, verificationToken) => {
  const newEmail = {
    to: email,
    subject: "Verify your email, please",
    html: `<h3>You want to sign in?</h3><a style="font-size:16px" target="_blank" href="${BASE_URL}/api/auth/verify/${verificationToken}">Click this to verify your email</a>`,
    from: "dimon_zd@i.ua",
  };

  await sgMail.send(newEmail);

  return true;
};

module.exports = sendEmail;
