import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AboutCard from "./aboutcard.js";


function About() {
  return (
    <Container fluid className="about-section font-link">
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

            <p style={{ fontSize: "2.1em", paddingBottom: "20px", color: "black"}}>
              Thanks for visiting! {" "}
              <span className="wave" role="img" aria-labelledby="wave">
              👋
                </span>
            </p>
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