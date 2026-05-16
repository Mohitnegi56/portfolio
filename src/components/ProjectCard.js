import { Col } from "react-bootstrap";

export const ProjectCard = ({
  title,
  description,
  imageUrl,
  url,
}) => {
  return (
    <Col sm={6} lg={6}>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="project-link"
      >
        <div className="proj-imgbx">
          <img
            src={imageUrl}
            alt={title}
            className="img-fluid"
          />

          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </div>
      </a>
    </Col>
  );
};