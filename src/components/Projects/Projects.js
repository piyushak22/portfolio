import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Netflix from "../../Assets/Projects/Netflix-Symbol.png";
import swiggy from "../../Assets/Projects/swiggy.jpg";
import cv from "../../Assets/Projects/computervision.jpg";
import chatify from "../../Assets/Projects/data-analysis.jpg";
import mask from "../../Assets/Projects/masknomask.jpg";
import hotel from "../../Assets/Projects/blackclover.png";
import resume from "../../Assets/Projects/dreamer-jan-18.png"
import chatAI from "../../Assets/Projects/chatAI.jpg"
import mi from "../../Assets/Projects/Mandelpart2_red.png"
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={resume}
              isBlog={false}
              title="Emotion Recognition Using Physiological Signals "
              description="Developed an emotion recognition model utilizing physiological signals using Python from k-Emo Con dataset. (heart rate, Blood Volume Pulse [BVP], and Electrodermal Activity [EDA]).
                            Preprocessed and extracted key features from raw physiological data, synchronized with timestamps and incorporated emotion annotations from 32 participants.
                            Achieved an accuracy rate of 74% in classifying emotional states, contributing to advancements in affective computing and human-computer interaction."
              ghLink="https://github.com/piyushak22/Emotion-Recognition-Using-Physiological-Signals-"
              isvideoPresent = {true}
              isGitHubPresent = {true}

        
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hotel}
              isBlog={false}
              title="MUD Game"
              description="Developed a Command Line MUD Game using Python, creating an interactive and engaging text-based multiplayer experience.
              Implemented efficient data structures and game mechanics, ensuring smooth gameplay and scalability for multiple players."
              ghLink="https://github.com/piyushak22/MUD-game"
              isvideoPresent = {true}
              isGitHubPresent = {true}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mi}
        
              
              title="Kolmogorov-Complexity-for-text-classification "
              description="developed a parameter-free text classification method using compression algorithms to approximate Kolmogorov complexity. This approach eliminates separate training and testing phases. LZMA-based methods demonstrated superior accuracy, while Naive Bayes classifiers are efficient for resource-constrained scenarios. This methodology balances accuracy and computational efficiency in text classification tasks."  
              ghLink="https://github.com/piyushak22/Kolmogorov-Complexity-for-text-classification"
              isGitHubPresent = {true}         
              isvideoPresent = {false}  
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
