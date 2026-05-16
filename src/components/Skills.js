import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>Skills</h2>
                            <p>
  My skill set spans Data Analysis, Machine Learning, Artificial
  Intelligence, and Full-Stack Development. I specialize in Python, SQL,
  Power BI, and React, with a focus on building data-driven products,
  predictive models, and impactful dashboards.
</p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                  <h5>AI & ML Engineer</h5>
                                </div>
                                <div className="item">
                                  
                                  <h5>Data Analysts</h5>
                                </div>
                                <div className="item">
                                  
                                  <h5>Data Scientist</h5>
                                </div>
                                <div className="item">
                                
                                  <h5>Web Developer</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}