import { useState, useEffect } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../assets/img/logo.webp";
import navIcon1 from "../assets/img/nav-icon1.jpg";
import navIcon2 from "../assets/img/nav-icon2.jpg";
import navIcon3 from "../assets/img/nav-icon3.webp";
import { SiCodeforces } from "react-icons/si";
import { SiKaggle } from "react-icons/si";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  // Update active navigation link
  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  // Detect scroll position
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    // Cleanup event listener
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="logo" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </Nav.Link>

            <Nav.Link
              href="#skills"
              className={
                activeLink === "skills" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("skills")}
            >
              Skills
            </Nav.Link>

            <Nav.Link
              href="#projects"
              className={
                activeLink === "projects" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("projects")}
            >
              Projects
            </Nav.Link>
            <Nav.Link
              href="#resume"
              className={
                activeLink === "resume" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("resume")}
            >
              Resume
            </Nav.Link>
          </Nav>

          <span className="navbar-text">
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
              <a
                href="https://www.kaggle.com/mohitnegi1007"
                target="_blank"
                rel="noopener noreferrer"
                className="codeforces-icon"
              >
                <SiKaggle />
              </a>
            </div>

            <button className="vvd" onClick={() => (window.location.href = '#connect')}>
                            <span>Let's Connect</span>
                        </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
