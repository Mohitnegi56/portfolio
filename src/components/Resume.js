import { Container, Row, Col } from "react-bootstrap";
import { Download, Eye } from "react-bootstrap-icons";
import resumePdf from "../assets/resume/mohitresume.pdf";

export const Resume = () => {
  return (
    <section className="resume" id="resume">
      <Container>
        <Row className="justify-content-center">
          <Col lg={8}>
            <div className="resume-bx text-center">
              <span className="resume-tagline">My Resume</span>

              <h2>Professional Experience & Skills</h2>

              <p>
                Download my resume to explore my technical skills,
                projects, education, and experience in Data Science,
                Machine Learning, AI, and Web Development.
              </p>

              <div className="resume-buttons">
                <a
                  href={resumePdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="resume-btn"
                >
                  <Eye size={20} />
                  View Resume
                </a>

                <a
                  href={resumePdf}
                  download="one_page_resume.pdf"
                  className="resume-btn"
                >
                  <Download size={20} />
                  Download Resume
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
