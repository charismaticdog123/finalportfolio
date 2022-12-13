import React from "react";
import Card from "react-bootstrap/Card";
import { Container, Row, Col } from "react-bootstrap";


function AboutCard() {
  return (
 
        <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0 font-link">
          <p style={{ textAlign: "justify", color: "black" }}>
          I’m <span className="dark-yellow"><b>filler</b></span>, a designer interested in weaving <span className="dark-yellow"><b>storytelling</b></span>, <span className="dark-yellow"><b>design</b></span>, and <span className="dark-yellow"><b>engineering</b></span> into meaningful interactions and communication. I make things because I like hearing stories.
          <br></br>
          <br></br>

I’m currently a filler at Brown University studying Computer Science and Economics, but with a giant love for creative nonfiction writing. Currently, I’m a a Design Research intern at IBM, and previously a Software Engineer Intern at WarnerMedia HBO Max. 
<br></br>
          <br></br>
When I’m not on my computer, I can be found gardening, cooking eggs, or dancing!
<br></br>
          <br></br>
Feel free to reach out to talk design, agrotech, writing, anything!, through my email filler.
            
                  </p>
                  
        </blockquote>
        {/* style={{ marginLeft: "108rem",justifyContent: 'right', alignItems: 'right' }} */}

      </Card.Body>
      
    </Card>
    

          

    
  );
}

export default AboutCard;