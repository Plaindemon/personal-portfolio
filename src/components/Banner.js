import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/laptop2.gif";
import "animate.css";
import TrackVisibility from "react-on-screen";
import resumePdf from "../assets/pdf/Ben-Resume-2023.pdf";
function Banner() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Web Developer", "Web Designer", "Software Engineer"];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <div className="bannerImg">
      <section className="banner " id="home">
        <Container >
          <Row className="align-items-center">
            <Col xs={12} md={6} xl={7}>
              
                  <div
                    className="bannerContainer"
                    
                  >
                    <span className="tagline">Welcome to my Portfolio</span>
                    <h1>
                      {`Hi I'm Benjamin`}
                      <br></br>
                      <span className="wrap">{text}</span>
                    </h1>
                    <p>
                      Hello! I'm a Full Stack MERN Web Developer with expertise
                      in building dynamic and scalable web applications. My
                      experience in front-end development includes working with
                      React.js, Redux, and Bootstrap to create intuitive user
                      interfaces. In the back-end, I specialize in Node.js,
                      Express.js, and MongoDB to design and develop robust APIs,
                      manage data, and ensure seamless server-side
                      functionality. I also have experience with various testing
                      frameworks, such as Jest and Enzyme, to ensure that my
                      code is well-tested and error-free. I'm passionate about
                      keeping up with the latest industry trends and
                      technologies to deliver high-quality, efficient, and
                      user-friendly web applications. I'm excited to collaborate
                      with businesses and clients to turn their visions into
                      reality!
                    </p>
                    <button onClick={() => console.log("connect")}>
                      Let's Connect <ArrowRightCircle size={25} />
                    </button>
                    <button onClick={() => console.log("connect")}>
                      <a href={resumePdf} className="resume-btn">
                        Resume
                      </a>{" "}
                      <ArrowRightCircle size={25} />
                    </button>
                  </div>
               
            </Col>
            <Col xs={12} md={6} xl={5}>
              <img src={headerImg} alt="Header" />
            </Col>
          </Row>
        </Container>
      </section>
    </ div>
  );
}

export default Banner;
