const express = require("express");
const cors = require("cors");
const { Resend } = require("resend");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const resend = new Resend(process.env.RESEND_API_KEY);

app.get("/", (req, res) => {
  res.send("Portfolio Backend is Running Successfully 🚀");
});

app.post("/contact", async (req, res) => {
  try {
    const { firstName, lastName, email, phone, message } = req.body;

    const fullName = `${firstName} ${lastName}`;

    const data = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: [process.env.EMAIL_USER || "your_email@gmail.com"],
      subject: `Portfolio Contact Form - ${fullName}`,
      replyTo: email,
      html: `
        <h2>New Portfolio Message</h2>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not Provided"}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    res.status(200).json({
      code: 200,
      status: "Message Sent Successfully",
      data,
    });
  } catch (error) {
    console.error("Resend Error:", error);

    res.status(500).json({
      code: 500,
      status: error.message,
    });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});