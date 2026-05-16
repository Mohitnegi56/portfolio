import { useState, useEffect, useCallback } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/banner-bg.png";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(200);

  const period = 2000;

  const tick = useCallback(() => {
    const toRotate = [
      "Data Scientist",
      "Data Analyst",
      "AI & ML Engineer",
      "Web Developer",
    ];

    const i = loopNum % toRotate.length;
    const fullText = toRotate[i];

    const updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(100);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum((prev) => prev + 1);
      setDelta(200);
    }
  }, [text, isDeleting, loopNum]);

  useEffect(() => {
    const ticker = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(ticker);
  }, [tick, delta]);

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">
              Welcome to my portfolio
            </span>

            <h1>
              Hi, I'm Mohit Negi
              <span className="wrap">{text}</span>
            </h1>

            <p>
              Data Analyst and Data Science enthusiast with
              strong expertise in Python, SQL, and data
              visualization. Experienced in exploratory data
              analysis (EDA), machine learning, and building
              data-driven solutions.
            </p>

            <button
              onClick={() =>
                (window.location.href = "#connect")
              }
            >
              Let’s Connect
              <ArrowRightCircle size={25} />
            </button>
          </Col>

          <Col xs={12} md={6} xl={5}>
            <div className="banner-image-container">
              <img
                src={headerImg}
                alt="Banner"
                className="banner-img"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};