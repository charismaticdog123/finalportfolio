import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AboutCard from "./aboutcard.js";


function About() {
  return (
    <Container fluid className="about-section font-link">
      
       
          

            {/* <h2 style={{ fontSize: "2.1em", paddingBottom: "20px", color: "black"}}> */}
            <h1 className="project-heading">
          <strong className="yellow" >
          Thanks for visiting! {" "}
          <span className="wave" role="img" aria-labelledby="wave">
              👋
                </span></strong>
            </h1>
            <AboutCard></AboutCard>
         
   
    </Container>
  );
}

export default About;