const express = require("express");
const cors = require("cors");
const { Resend } = require("resend");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const resend = new Resend(process.env.RESEND_API_KEY || "re_temp_key_for_local_dev");

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

app.post("/chat", async (req, res) => {
  try {
    const { message, history } = req.body;

    if (!process.env.GROQ_API_KEY) {
      return res.status(500).json({
        code: 500,
        status: "GROQ_API_KEY is not configured on the server.",
      });
    }

    const systemPrompt = `You are the friendly AI Portfolio Assistant for Mohit Negi. Your goal is to answer questions about Mohit's skills, experience, projects, education, and how to contact him.
    
Here are Mohit's details:
- **Name**: Mohit Negi
- **Role**: Data Scientist, Data Analyst, AI & ML Engineer, and Web Developer.
- **Education**: B.Tech in Computer Science and Engineering at IIIT Kalyani (2024 - Present), CGPA: 9.03/10.0.
- **Skills**:
  - Languages: Python, C, C++, Java, JavaScript, SQL.
  - Web Dev: React.js, Node.js, Express.js, MongoDB, REST APIs, HTML5/CSS3, Bootstrap.
  - AI & Data Science: Pandas, NumPy, Scikit-learn, NLP, Deep Learning, FAISS, LangChain, LangGraph.
  - Tools: Git, GitHub, Streamlit, Matplotlib, Seaborn.
- **Key Projects**:
  - **Zomato Delivery App**: Full-stack food delivery application using React, Node.js, Express, MongoDB. Deployed frontend and backend separately on Render.
  - **LangGraph AI Chatbot**: Stateful agentic chatbot built with LangGraph, utilizing SQLite for session memory persistence.
  - **Enterprise Knowledge Copilot (RAG)**: Retrieval-augmented generation document Q&A assistant built with LangChain, FAISS, and Streamlit.
  - **Book Recommendation System**: Machine learning content recommendation system using TF-IDF and Cosine Similarity with a Flask backend.
  - **WhatsApp Chat Analyzer**: NLP analyzer built with Python, Regex, and Streamlit to analyze chat patterns.
- **Leadership**: AI/ML Lead at Google Developer Groups (GDG) On Campus IIIT Kalyani; General Secretary (Technical Affairs) at Gymkhana IIIT Kalyani.
- **Achievements**: 2nd Runner-Up at InnovateX Hackathon, Winner of Botball Robotics Competition, 200+ DSA problems solved.
- **Contact**: Email: cse24135@iiitkalyani.ac.in, Phone: +91-8923645746, Location: Kotdwar, Uttarakhand.

Instructions:
1. Speak in a helpful, polite, and brief professional tone.
2. If asked about contact details, mention his email (cse24135@iiitkalyani.ac.in) and other links.
3. Keep responses concise (under 3-4 sentences/bullets if possible) to fit nicely in a small chat window.`;

    const messages = [
      { role: "system", content: systemPrompt },
      ...(history || []).map((msg) => ({
        role: msg.sender === "user" ? "user" : "assistant",
        content: msg.text,
      })),
      { role: "user", content: message },
    ];

    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.GROQ_API_KEY}`,
      },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile",
        messages,
      }),
    });

    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.error?.message || "Groq API error");
    }

    const aiMessage = data.choices[0].message.content;
    res.status(200).json({
      code: 200,
      reply: aiMessage,
    });
  } catch (error) {
    console.error("Chatbot Error:", error);
    res.status(500).json({
      code: 500,
      status: error.message,
    });
  }
});

const PORT = process.env.BACKEND_PORT || 5000;


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});