import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./projectcards";
import Particle from "../intro/Particle";
// import leaf from "../../Assets/Projects/leaf.png";
// import emotion from "../../Assets/Projects/emotion.png";
// import editor from "../../Assets/Projects/codeEditor.png";
// import chatify from "../../Assets/Projects/chatify.png";
// import suicide from "../../Assets/Projects/suicide.png";
// import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
      <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <Col md={2} sm={1} className="project-card">
             <div class="center-image">
               <img src="images/tree.png" alt="tree image" className="responsive-img"></img>
            </div>
            </Col>

      <Col md={1} sm={1} className="project-card">
            <h1 className="project-heading">
          <strong className="yellow" ><center>Work</center></strong>
        </h1>
            </Col>
       
            
            
            </Row>
   

       

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath="/images/kitchen.png"
              isBlog={false}
              title="Soft World"
              description="Isometric low-poly characters and scenes created on Blender."
              link="/blender"
              tools="🛠️ Blender"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard 
              isBlog={false}
              title="Goodreads Redesign"
              description="Responsive redesign of the Goodreads user profile page."
              link="/goodreads"    
              tools="🛠️ Figma, HTML/CSS"

            />

          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={bitsOfCode}
              isBlog={false}
              title="Slingshot"
              description="Iterative high fidelity prototype of Slingshot, a startup that automates medical bill reduction."
              link="/slingshot"
              tools="🛠️ Figma, HTML/CSS, Javascript, React"

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={editor}
              isBlog={false}
              title="Tip Flip"
              description="Exploring personas of the tip flip screen in coffee shops."
              link="/tipflip"
              tools="🛠️ Figma"

            />
          </Col>

     

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={suicide}
              isBlog={false}
              title="IBM"
              description="User research for onboarding for Enterprise Performance Management product. [cs]"
              link="/fillerpage"
              tools="👩‍💻 Design Research Intern"
              />
              </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={emotion}
              isBlog={false}
              title="HBO"
              description="Engineered curated content pages, “Spotlight Pages” for content discovery team. [cs]"
              link="/fillerpage"
              tools="👩‍💻 Software Engineer Intern"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;