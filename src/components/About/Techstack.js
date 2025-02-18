import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
// Import FontAwesome styles
import '@fortawesome/fontawesome-svg-core/styles.css';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApi } from '@fortawesome/free-solid-svg-icons';
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiPostgresql,
  SiFlask,
  SiFastapi,
  SiOpencv,
  SiMysql,
  SiTensorflow,
  SiScikitlearn,
  SiHtml5,
  SiAndroid,
  SiCsharp
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
    <SiFlask />
    <h3>Flask</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">

        <DiJavascript1 />
        <h3>JavaScript</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiOpencv />
        <h3>OpenCV</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <h3>NodeJS</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <h3>React</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFastapi />
        <h3>FastAPI</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTensorflow />
        <h3>Tensorflow</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiScikitlearn />
        <h3>Scikit-learn </h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
        <h3>MongoDB</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
        <h3>MySQL</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <h3>Git</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
        <h3>Firebase</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAndroid />
        <h3>Android</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
        <h3>PostgresSQL</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
        <h3>Python</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCsharp />
        <h3>C#</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
        <h3>Java</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHtml5 />
        <h3>HTML5</h3>
      </Col>
    </Row>
  );
}

export default Techstack;
