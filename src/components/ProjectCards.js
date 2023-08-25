import React from "react";
import { Col } from "react-bootstrap";

function ProjectCard({ title, description, imgUrl, appUrl }) {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <a href={appUrl}>
        <img src={imgUrl} alt=""/>
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div></a>
      </div>
    </Col>
  );
}

export default ProjectCard;
