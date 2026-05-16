const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Health check route
app.get("/", (req, res) => {
  res.send("Portfolio Backend is Running Successfully 🚀");
});

// Create transporter
const contactEmail = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // true only for port 465
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

// Verify transporter
contactEmail.verify((error) => {
  if (error) {
    console.log("Verify Error:", error);
  } else {
    console.log("Ready to Send Emails");
  }
});

// Contact API route
app.post("/contact", (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body;

  const fullName = `${firstName} ${lastName}`;

  const mail = {
    from: `\"${fullName}\" <${process.env.EMAIL_USER}>`,
    replyTo: email,
    to: process.env.EMAIL_USER,
    subject: `Portfolio Contact Form - ${fullName}`,
    html: `
      <h2>New Portfolio Message</h2>
      <p><strong>Name:</strong> ${fullName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || "Not Provided"}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `,
  };

  contactEmail.sendMail(mail, (error) => {
    if (error) {
      console.log("Email Error:", error);

      res.status(500).json({
        code: 500,
        status: error.message,
      });
    } else {
      res.status(200).json({
        code: 200,
        status: "Message Sent Successfully",
      });
    }
  });
});

// Start server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
