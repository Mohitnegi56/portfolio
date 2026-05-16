import { Container, Col, Row } from "react-bootstrap";
import logo from "../assets/img/logo.webp";
import navIcon1 from "../assets/img/nav-icon1.jpg";
import navIcon2 from "../assets/img/nav-icon2.jpg";
import navIcon3 from "../assets/img/nav-icon3.webp";
import { SiCodeforces } from "react-icons/si";
import { SiKaggle } from "react-icons/si";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-item-center">
          <Col sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a
                href="https://linkedin.com/in/mohit-negi-3a1368319"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={navIcon1} alt="LinkedIn" />
              </a>

              <a
                href="https://github.com/Mohitnegi56"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={navIcon2} alt="GitHub" />
              </a>

              <a
                href="https://codeforces.com/profile/Mohit_Negi17?locale=en"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={navIcon3} alt="Instagram" />
              </a>

              <a
                href="https://codeforces.com/profile/Mohit_Negi17?locale=en"
                target="_blank"
                rel="noopener noreferrer"
                className="codeforces-icon"
              >
                <SiCodeforces />
              </a>
              <a href="https://www.kaggle.com/mohitnegi1007" target="_blank" rel="noopener noreferrer" className="codeforces-icon">
                <SiKaggle />
              </a>
            </div>
            <p>Copyright 2026. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
