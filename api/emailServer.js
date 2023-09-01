require("dotenv").config();
const nodemailer = require("nodemailer");
const smtpHost = process.env.SMTP_HOST;
const smtpUser = process.env.SMTP_USER;
const smtpPass = process.env.SMTP_PASS;
const forwardEmail = process.env.FORWARD_EMAIL;

const transporter = nodemailer.createTransport({
  host: smtpHost,
  port: 465,
  auth: {
    user: smtpUser,
    pass: smtpPass,
  },
});

module.exports = async (req, res) => {
  const { from, to, subject, text } = req.body;
  const mailOptions = {
    from: smtpUser,
    to: forwardEmail,
    subject: subject,
    text: text,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.response);
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
