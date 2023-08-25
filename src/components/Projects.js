import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import ProjectCards from "./ProjectCards";
import projImg1 from "../assets/img/\project-2.jpeg";
import projImg2 from "../assets/img/Blog.png";
import projImg3 from "../assets/img/noname.jpg";
import projImg4 from "../assets/img/weather-trails.gif";
import colorSharp2 from "../assets/img/color-sharp2.svg";

import messageApp from "../assets/img/message-app2.jpg";
import happyPuppy from "../assets/img/happy-puppy.jpg";
import multiChoice from "../assets/img/multiple-choice.png";

import noteTaker from "../assets/img/note-taker.jpg"

import "animate.css";
import TrackVisibility from "react-on-screen";

function Projects() {
  const projects = [
    {
      title: "Randonnee",
      description: "Climb with friends!",
      imgUrl: projImg1,
      appUrl: "https://enigmatic-bayou-07532.herokuapp.com/"
    },
    {
      title: "Message App",
      description: "Sending messages to friends",
      imgUrl: messageApp,
      appUrl: "https://routes-project.tech/"
    },
    {
      title: "R-O-U-T-E-S",
      description: "Ski, Snowboard, Run with friends!",
      imgUrl: projImg3,
      appUrl: "https://shrouded-anchorage-74722.herokuapp.com/"
    },
    
  ];

  const projects2 = [
    {
      title: "Note Taker",
      description: "Write notes, save and delete old notes",
      imgUrl: noteTaker,
      appUrl: "https://aqueous-chamber-16548.herokuapp.com/"
    },
    {
      title: "Blog",
      description: "Blog with multi-user functionality",
      imgUrl: projImg2,
      appUrl: "https://sleepy-thicket-53058.herokuapp.com/"
    },
    {
      title: "Happy Puppy Adventures",
      description: "Dog care website for small business",
      imgUrl: happyPuppy,
      appUrl: "https://happypuppyadventures.onrender.com/services"
    },
  ]

  const projects3 = [
    {
      title: "Weather Trails",
      description: "Checks the weather and 5 day forecast and can search National Parks",
      imgUrl: projImg4,
    },
    {
      title: "Multiple Choice Quiz",
      description: "Small Javascript Multiple choice quiz",
      imgUrl: multiChoice,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ]

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__pulse" : ""
                  }
                >
                  <h2>Projects</h2>
                  {/* <p>
                    A brief look at the projects I have worked on and completed during my coursework and after. 
                  </p> */}
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCards key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                      <Row>
                          {projects2.map((projects2, index) => {
                            return <ProjectCards key={index} {...projects2} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                      <Row>
                          {projects3.map((projects3, index) => {
                            return <ProjectCards key={index} {...projects3} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt=""></img>
    </section>
  );
}

export default Projects;
