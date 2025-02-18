import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import Techstack from "../About/Techstack";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description" id="about">
            <h1 style={{ fontSize: "2.6em" }}>
           <span className="purple"> About </span> Me
            </h1>
            <p className="home-about-body">
              Masters : Data Science - Distinction
              <br />
              Bachelors : Electronics And Telecommunication Engineering - Distinction
              
              <br />
  
          
              <br />
              <br />
              Software Developer and aspiring Data Scientist with over a year of experience in designing and deploying high-performance web and backend applications. Demonstrated ability to integrate and optimize RESTful APIs and microservices, improving scalability and operational efficiency. Experienced in AI, machine learning and data engineering.

            </p>
           
          </Col>
        

        </Row>
        <Row >
          <h1 className="tech-stack"><span className="purple">Tech Stack</span></h1>
          <Techstack />
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/piyushak22"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="mailto:khodepiyusha@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaEnvelope />
                </a>
              </li>
              
              
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/piyusha-khode-28a0431b7/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
