const express = require('express');
const sendEmail = require('./emailServer');
const app = express();


app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'https://personal-website-ochre-phi.vercel.app/api/send-email');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.use(express.json());

app.post('/send-email', (req, res) => {
  const { from, to, subject, text } = req.body;
  sendEmail(from, to, subject, text);
  res.status(200).json({ message: 'Email sent successfully' });
});

const port = process.env.NODE_PORT;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});