import { Container, Row, Col } from "react-bootstrap";
import { Award, BoxArrowUpRight } from "react-bootstrap-icons";

export const Certificates = () => {
  const certsList = [
    {
      title: "Oracle Agentic AI Foundations Associate",
      issuer: "Oracle",
      link: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=A1D38207F872FD8EA4925609725DD0C1C14A60141074B32F5FCA842C501E93AE",
      type: "Professional Certification"
    },
    {
      title: "GenAI Powered Data Analytics Job Simulation",
      issuer: "Tata (Forage)",
      link: "https://www.theforage.com/completion-certificates/ifobHAoMjQs9s6bKS/gMTdCXwDdLYoXZ3wG_ifobHAoMjQs9s6bKS_MNFsmejYz6qjdp3he_1782670129652_completion_certificate.pdf",
      type: "Simulation Credentials"
    },
    {
      title: "AI - Data Engineering Analyst",
      issuer: "Skill India Digital Hub & NASSCOM",
      link: "https://skill-india-dev.s3.ap-south-1.amazonaws.com/certificate_generic/uploaded_elements/2026062821444482/certificate_30abc684-c033-40a9-836b-caa3d4b7be33.pdf?response-content-disposition=inline&response-content-type=application%2Fpdf&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20260629T033719Z&X-Amz-SignedHeaders=host&X-Amz-Expires=2000&X-Amz-Credential=AKIA3OJCFBJTPLAN4OGU%2F20260629%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Signature=40d7d166c6c8b9f2e400a5aa830877a3beb3fa9a51b1ec25827cf0ea5119ecd0",
      type: "Professional Certification"
    },
    {
      title: "Data Analysis with Python",
      issuer: "freeCodeCamp",
      link: "https://www.freecodecamp.org/certification/mohit_negi_leo10/data-analysis-with-python-v7",
      type: "Core Skill Certification"
    },
    {
      title: "InnovateX (2nd Runner-Up)",
      issuer: "GDG IIIT Kalyani",
      link: "https://certificate.givemycertificate.com/c/a9cada43-6f2c-437e-b1f5-94a6981edf8f",
      type: "Hackathon Award"
    },
    {
      title: "InnovateX Participation",
      issuer: "GDG IIIT Kalyani",
      link: "https://certificate.givemycertificate.com/c/e61701e6-6ff9-47ab-92c4-0d5a63e85897",
      type: "Event Recognition"
    },
    {
      title: "Maze Solver (2nd Runner-Up)",
      issuer: "IIIT Kalyani",
      link: "https://unstop.com/certificate-preview/31a5ae7a-2449-4af8-b810-524d2a1301a0?utm_campaign=site-emails",
      type: "Robotics Award"
    },
    {
      title: "AI Tools Workshop",
      issuer: "CertX",
      link: "https://certx.in/certificate/0270772f-3809-4400-b29b-1e1c61cd0997482397",
      type: "Workshop Completion"
    }
  ];

  return (
    <section className="certificates" id="certificates">
      <Container>
        <Row className="justify-content-center">
          <Col lg={12}>
            <div className="certificates-bx text-center">
              <span className="certificates-tagline">My Credentials</span>
              <h2>Certifications & Achievements</h2>
              <p className="mb-5 text-muted max-w-xl mx-auto">
                Explore my verified academic and professional certifications in AI, Data Engineering, and Robotics.
              </p>

              <Row className="justify-content-center">
                {certsList.map((cert, index) => (
                  <Col md={6} lg={4} xl={3} className="mb-4" key={index}>
                    <div className="cert-card p-4 h-100 rounded-4">
                      <div className="cert-icon-wrapper mb-3">
                        <Award size={26} className="cert-badge-icon" />
                      </div>
                      <span className="cert-type">{cert.type}</span>
                      <h3 className="cert-title mt-2 mb-3">{cert.title}</h3>
                      <span className="cert-issuer">{cert.issuer}</span>
                      
                      <div className="cert-action mt-auto pt-4">
                        <a
                          href={cert.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cert-link-btn"
                        >
                          Verify Credential <BoxArrowUpRight size={14} className="ms-2" />
                        </a>
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
