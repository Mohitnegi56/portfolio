import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact.png";

export const Contact = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send Message");
  const [status, setStatus] = useState({});

  const onFormUpdate = (field, value) => {
    setFormDetails({
      ...formDetails,
      [field]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");

    try {
      const response = await fetch("https://backend-portfolio-bcwt.onrender.com/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(formDetails),
      });

      const result = await response.json();

      setButtonText("Send Message");

      if (result.code === 200) {
        setStatus({
          success: true,
          message: "Message sent successfully!",
        });
        setFormDetails(formInitialDetails);
      } else {
        setStatus({
          success: false,
          message: "Something went wrong. Please try again.",
        });
      }
    } catch (error) {
      console.error("Contact Form Error:", error);
      setButtonText("Send Message");
      setStatus({
        success: false,
        message: "Unable to connect to the server.",
      });
    }
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col lg={5}>
            <div className="contact-content">
              <span className="contact-tagline">Let's Connect</span>
              <h2>Get In Touch</h2>
              <p>
                I’m always open to discussing internships, full-time roles,
                freelance opportunities, and collaborations in Data Science,
                Machine Learning, and AI.
              </p>

              <img
                src={contactImg}
                alt="Contact Illustration"
                className="contact-image"
              />
            </div>
          </Col>
          <Col lg={7}>
            <div className="contact-form-box">
              <form onSubmit={handleSubmit}>
                <Row>
                  <Col md={6}>
                    <input
                      type="text"
                      placeholder="First Name"
                      value={formDetails.firstName}
                      onChange={(e) =>
                        onFormUpdate("firstName", e.target.value)
                      }
                      required
                    />
                  </Col>

                  <Col md={6}>
                    <input
                      type="text"
                      placeholder="Last Name"
                      value={formDetails.lastName}
                      onChange={(e) => onFormUpdate("lastName", e.target.value)}
                      required
                    />
                  </Col>

                  <Col md={6}>
                    <input
                      type="email"
                      placeholder="Email Address"
                      value={formDetails.email}
                      onChange={(e) => onFormUpdate("email", e.target.value)}
                      required
                    />
                  </Col>

                  <Col md={6}>
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      value={formDetails.phone}
                      onChange={(e) => onFormUpdate("phone", e.target.value)}
                    />
                  </Col>

                  <Col md={12}>
                    <textarea
                      rows="6"
                      placeholder="Your Message"
                      value={formDetails.message}
                      onChange={(e) => onFormUpdate("message", e.target.value)}
                      required
                    />
                  </Col>

                  <Col md={12}>
                    <button type="submit" className="contact-btn">
                      <span>{buttonText}</span>
                    </button>
                  </Col>

                  {status.message && (
                    <Col md={12}>
                      <p className={status.success ? "success" : "danger"}>
                        {status.message}
                      </p>
                    </Col>
                  )}
                </Row>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
