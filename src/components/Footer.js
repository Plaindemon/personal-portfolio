import { Container, Row, Col } from "react-bootstrap";
import MailchimpForm  from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon4 from "../assets/img/mail-icon.svg";


function  Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
            <a href="https://www.linkedin.com/in/benjamin-chaplin-516142142/"><img src={navIcon1} alt=""></img></a>
                <a href="https://github.com/Plaindemon"><img src={navIcon2} alt=""></img></a>
                <a href="mailto:plaindemon@gmail.com, bchaplin525@gmail.com"><img src={navIcon4} alt=""></img></a>
            </div>
            <p>Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;