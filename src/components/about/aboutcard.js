import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify", color: "black" }}>
          I’m <span className="dark-yellow"><b>CharismaticDog123</b></span>, a designer interested in weaving <span className="dark-yellow"><b>storytelling</b></span>, <span className="dark-yellow"><b>design</b></span>, and <span className="dark-yellow"><b>engineering</b></span> into meaningful interactions and communication. I make things because I like hearing stories.
          <br></br>
          <br></br>

I’m currently a redacted at Brown University studying Computer Science and Economics, but with a giant love for creative nonfiction writing. Currently, I’m a a Design Research intern at IBM, and previously a Software Engineer Intern at WarnerMedia HBO Max. 
<br></br>
          <br></br>
When I’m not on my computer, I can be found gardening, cooking eggs, or dancing!
<br></br>
          <br></br>
Feel free to reach out to talk design, agrotech, writing, anything!, through my email redacted.
            
                  </p>
        </blockquote>

         
      </Card.Body>
    </Card>
  );
}

export default AboutCard;