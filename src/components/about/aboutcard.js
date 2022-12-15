import React from "react";
import Card from "react-bootstrap/Card";
import { Container, Row, Col } from "react-bootstrap";


function AboutCard() {
  return (
    <Container fluid className="about-section">
    <Container>
      
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
    <Col md={6} sm={1} >
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0 font-link">
    <br></br>

          <p style={{ textAlign: "justify", color: "black" }}>
          I’m <span className="dark-yellow"><b>Mango</b></span>, a designer interested in weaving <span className="dark-yellow"><b>storytelling</b></span>, <span className="dark-yellow"><b>design</b></span>, and <span className="dark-yellow"><b>engineering</b></span> into meaningful interactions and communication. <span className="dark-yellow"><b>I make things because I like hearing stories</b></span>.
          <br></br>
          <br></br>

I’m currently a '22.5er at Brown University studying Computer Science and Economics, but with a giant love for creative nonfiction writing. Currently, I’m a a Designer at IBM, and previously a Software Engineer Intern at WarnerMedia HBO Max. 
<br></br>
          <br></br>
When I’m not on my computer, I can be found gardening, dancing, or cooking eggs (real or 3D on Blender) —>
<br></br>
          <br></br>
Feel free to reach out to talk design, agrotech, writing, anything!, through my email filler.
            
                  </p>
                  
        </blockquote>

      </Card.Body>
      
    </Card>
     
      </Col>
      <Col md={1} ></Col>
      <Col md={4} >
    {/* <img className="response-img center" src="images/tree3.png" alt="blender render of mushie" width="100%" ></img> */}

     <img src="images/transparentkitchen.png" alt="profile pic" width="150%" height="150%"></img>

      </Col>
      </Row>
      </Container>
      </Container>
       
    

          

    
  );
}

export default AboutCard;