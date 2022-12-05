import React from "react";
// import './styling/about.css';
import { Container, Row, Col } from "react-bootstrap";
import AboutCard from "./aboutcard.js";


function About() {
  return (
    <Container fluid className="about-section">
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px", color: "black"}}>
              Thanks for visiting!
            </h1>
            <AboutCard></AboutCard>
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
          </Col>
        </Row>




      </Container>
    </Container>
  );
}

export default About;