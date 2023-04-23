import React, {useState, useEffect} from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom"
import logo from "../assets/img/logo2.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/github-icon.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from "../assets/img/mail-icon.svg";
import navIcon5 from "../assets/img/phone-solid.svg";
import "../App.css";

function NavBarComponent() {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect (() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }
  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="/about">
            <img src={logo} alt="Logo"></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" >
            <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            
            <Nav.Link href="/home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="/about" className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('about')}>About me</Nav.Link>

            <Nav.Link href="/skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="/projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
                <a href="https://www.linkedin.com/in/benjamin-chaplin-516142142/"><img src={navIcon1} alt=""></img></a>
                <a href="https://github.com/Plaindemon"><img src={navIcon2} alt=""></img></a>
                <a href="tel:440-251-8038"><img src={navIcon5} alt=""></img></a>
                <a href="mailto:plaindemon@gmail.com, bchaplin525@gmail.com"><img src={navIcon4} alt=""></img></a>

                <a href="https://www.instagram.com/plaindemon/"><img src={navIcon3} alt=""></img></a>
            </div>
            <a  href="/contact"><button className="vvd" onClick={() => console.log('connect')}><span>Let's Connect</span></button></a>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarComponent;
