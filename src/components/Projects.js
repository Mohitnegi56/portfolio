import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";

// Import project images
import projImg1 from "../assets/img/banner-bg.png";
import projImg2 from "../assets/img/banner-bg.png";
import projImg3 from "../assets/img/banner-bg.png";
import projImg4 from "../assets/img/banner-bg.png";
import projImg5 from "../assets/img/banner-bg.png";

export const Projects = () => {
  // All Projects
  const allProjects = [
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
      url: "https://document-copilot-iuapphdsyiwqpsjksjuaj5q.streamlit.app/",
    },
    {
      title: "LangGraph AI Chatbot",
      description: "LangGraph, Multi-Agent AI",
      imageUrl: projImg4,
      url: "https://chatbot-cqhq4vpuraen6vxo4g4nt4.streamlit.app/",
    },
    {
      title: "Zomato Delivery App frontend",
      description: "React, Node.js, Express, MongoDB",
      imageUrl: projImg5,
      url: "https://tomato-delivery-frontend-16al.onrender.com",
    },
    {
      title: "Zomato Delivery App backend",
      description: "React, Node.js, Express, MongoDB",
      imageUrl: projImg5,
      url: "https://tomato-delivery-backend-q5bh.onrender.com",
    },
    {
      title: "Zomato Delivery App admin panel",
      description: "React, Node.js, Express, MongoDB",
      imageUrl: projImg5,
      url: "https://tomato-delivery-admin-a3to.onrender.com",
    },
  ];

  // Filtered Categories
  const featuredProjects = allProjects.filter(
    (project) =>
      project.title === "WhatsApp Chat Analyzer" ||
      project.title === "Book Recommendation System" ||
      project.title === "Enterprise Knowledge Copilot" ||
      project.title === "LangGraph AI Chatbot"
  );

  const dataScienceProjects = allProjects.filter(
    (project) =>
      project.title === "WhatsApp Chat Analyzer" ||
      project.title === "Book Recommendation System"
  );

  const aiMlProjects = allProjects.filter(
    (project) =>
      project.title === "Enterprise Knowledge Copilot" ||
      project.title === "LangGraph AI Chatbot"
  );

  const dataAnalystProjects = allProjects.filter(
    (project) =>
      project.title === "WhatsApp Chat Analyzer"
  );

  const webDevelopmentProjects = allProjects.filter(
    (project) =>
      project.title === "Book Recommendation System" ||
      project.title === "Zomato Delivery App frontend" || project.title === "Zomato Delivery App backend" || project.title === "Zomato Delivery App admin panel"
  );

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
                Development.
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
                      AI & ML
                    </Nav.Link>
                  </Nav.Item>

                  <Nav.Item>
                    <Nav.Link eventKey="fourth">
                      Data Analyst
                    </Nav.Link>
                  </Nav.Item>

                  <Nav.Item>
                    <Nav.Link eventKey="fifth">
                      Web Development
                    </Nav.Link>
                  </Nav.Item>
                </Nav>

                <Tab.Content>
                  {/* Featured Projects */}
                  <Tab.Pane eventKey="first">
                    <Row>
                      {featuredProjects.map((project, index) => (
                        <ProjectCard
                          key={index}
                          {...project}
                        />
                      ))}
                    </Row>
                  </Tab.Pane>

                  {/* Data Science */}
                  <Tab.Pane eventKey="second">
                    <Row>
                      {dataScienceProjects.map((project, index) => (
                        <ProjectCard
                          key={index}
                          {...project}
                        />
                      ))}
                    </Row>
                  </Tab.Pane>

                  {/* AI & ML */}
                  <Tab.Pane eventKey="third">
                    <Row>
                      {aiMlProjects.map((project, index) => (
                        <ProjectCard
                          key={index}
                          {...project}
                        />
                      ))}
                    </Row>
                  </Tab.Pane>

                  {/* Data Analyst */}
                  <Tab.Pane eventKey="fourth">
                    <Row>
                      {dataAnalystProjects.map((project, index) => (
                        <ProjectCard
                          key={index}
                          {...project}
                        />
                      ))}
                    </Row>
                  </Tab.Pane>

                  {/* Web Development */}
                  <Tab.Pane eventKey="fifth">
                    <Row>
                      {webDevelopmentProjects.map((project, index) => (
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
