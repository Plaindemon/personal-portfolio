import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png";

function Skills() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>
                Front-End Skills: HTML, CSS, and JavaScript React.js and Redux
                UI libraries such as Material UI and Bootstrap Back-End Skills:
                Node.js and Express.js MongoDB and Mongoose RESTful API design
                Server-side rendering Testing Skills: Jest and Enzyme Deployment
                and Version Control Skills: Git Deployment tools such as Heroku,
                AWS, and Docker Other Skills: Familiarity with Agile
                methodologies Strong problem-solving and analytical skills
                Ability to work independently or as part of a team Excellent
                communication and collaboration skills
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <img src={meter1} />
                  <h5>Web Development</h5>
                </div>
                <div className="item">
                  <img src={meter2} />
                  <h5>Brand Identity</h5>
                </div>
                <div className="item">
                  <img src={meter3} />
                  <h5>Logo Design</h5>
                </div>
                <div className="item">
                    <img src={meter1}/>
                    <h5>Web Development</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} alt=""/>
    </section>
  );
}

export default Skills;
