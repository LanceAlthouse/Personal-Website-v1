require('dotenv').config();

const nodemailer = require('nodemailer');
const smtpHost = process.env.SMTP_HOST;
const smtpUser = process.env.SMTP_USER;
const smtpPass = process.env.SMTP_PASS;

const transporter = nodemailer.createTransport({
  host: smtpHost,
  port: 465,
  auth: {
    user: smtpUser,
    pass: smtpPass,
  },
});

const sendEmail = async (from, to, subject, text) => {
  const mailOptions = {
    from: smtpUser,
    to: "lancealthouse@outlook.com",
    subject: subject,
    text: text,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.response);
  } catch (error) {
    console.error('Error sending email:', error);
  }
};

module.exports = sendEmail;