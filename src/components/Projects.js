import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";

// Import project images
import projImg1 from "../assets/img/banner-bg.png";
import projImg2 from "../assets/img/banner-bg.png";
import projImg3 from "../assets/img/banner-bg.png";
import projImg4 from "../assets/img/banner-bg.png";

export const Projects = () => {
  const projects = [
  {
    title: "WhatsApp Chat Analyzer",
    description: "Python, NLP, Streamlit",
    imageUrl: projImg1,
    url: "https://whatsappanalyser-7mxtgbpbvxsytrdynkujd5.streamlit.app/",
  },
  {
    title: "Book Recommendation System",
    description: "Machine Learning, Pandas, Flask",
    imageUrl: projImg2,
    url: "https://book-recommender-system-5olv.onrender.com/",
  },
  {
    title: "Enterprise Knowledge Copilot",
    description: "RAG, LangChain, Vector Database",
    imageUrl: projImg3,
    url: "https://chatbot-cqhq4vpuraen6vxo4g4nt4.streamlit.app/",
  },
  {
    title: "LangGraph AI Chatbot",
    description: "LangGraph, Multi-Agent AI",
    imageUrl: projImg4,
    url: "https://chatbot-cqhq4vpuraen6vxo4g4nt4.streamlit.app/",
  },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <div className="project-bx">
              <h2>Projects</h2>
              <p>
                Explore a selection of projects that demonstrate my expertise
                in Data Science, Machine Learning, Data Analytics, and Web
                Development. Each project is focused on solving real-world
                challenges through intelligent models, insightful dashboards,
                and scalable applications.
              </p>

              <Tab.Container
                id="projects-tabs"
                defaultActiveKey="first"
              >
                <Nav
                  variant="pills"
                  className="nav-pills mb-5 justify-content-center align-items-center"
                  id="pills-tab"
                >
                  <Nav.Item>
                    <Nav.Link eventKey="first">
                      Featured Projects
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">
                      Data Science
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">
                      AI & LLMs
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="fourth">
                      Web development
                    </Nav.Link>
                  </Nav.Item>
                </Nav>

                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <Row>
                      {projects.map((project, index) => (
                        <ProjectCard
                          key={index}
                          {...project}
                        />
                      ))}
                    </Row>
                  </Tab.Pane>

                  <Tab.Pane eventKey="second">
                    <Row>
                      {projects.map((project, index) => (
                        <ProjectCard
                          key={index}
                          {...project}
                        />
                      ))}
                    </Row>
                  </Tab.Pane>

                  <Tab.Pane eventKey="third">
                    <Row>
                      {projects.map((project, index) => (
                        <ProjectCard
                          key={index}
                          {...project}
                        />
                      ))}
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="fourth">
                    <Row>
                      {projects.map((project, index) => (
                        <ProjectCard
                          key={index}
                          {...project}
                        />
                      ))}
                    </Row>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};