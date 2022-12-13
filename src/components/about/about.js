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

            {/* <h2 style={{ fontSize: "2.1em", paddingBottom: "20px", color: "black"}}> */}
            <h1 className="project-heading">
          <strong className="yellow" ><center>
          Thanks for visiting! {" "}
          <span className="wave" role="img" aria-labelledby="wave">
              👋
                </span></center></strong>
              
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