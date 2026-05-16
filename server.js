const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();
const router = express.Router();

/* =========================
   MIDDLEWARE
========================= */
app.use(cors());
app.use(express.json());
app.use("/", router);

/* =========================
   NODEMAILER TRANSPORTER
========================= */
const contactEmail = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS, // Use Gmail App Password
  },
});

/* =========================
   VERIFY TRANSPORTER
========================= */
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

/* =========================
   CONTACT ROUTE
========================= */
router.post("/contact", async (req, res) => {
  try {
    const { firstName, lastName, email, phone, message } =
      req.body;

    const fullName = `${firstName} ${lastName}`;

    const mail = {
      from: `"${fullName}" <${process.env.EMAIL_USER}>`,
      replyTo: email,
      to: process.env.EMAIL_USER,
      subject: `Portfolio Contact Form - ${fullName}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not Provided"}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    await contactEmail.sendMail(mail);

    res.status(200).json({
      code: 200,
      status: "Message Sent Successfully",
    });
  } catch (error) {
    console.error("Send mail error:", error);

    res.status(500).json({
      code: 500,
      status: "ERROR",
      message: "Failed to send message",
    });
  }
});

/* =========================
   START SERVER
========================= */
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});