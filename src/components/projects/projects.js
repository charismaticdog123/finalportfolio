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
        <h1 className="project-heading">
          <strong className="yellow" ><center>Projects</center></strong>
        </h1>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard 
              isBlog={false}
              title="Goodreads Redesign"
              description="Responsive redesign of the Goodreads user profile page."
              link="/goodreads"
              demoLink="https://chatify-49.web.app/"
              
            />

          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={bitsOfCode}
              isBlog={false}
              title="Slingshot"
              description="Iterative high fidelity prototype of Slingshot, a startup that automates medical bill reduction."
              link="/slingshot"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={editor}
              isBlog={false}
              title="Tip Flip"
              description="Exploring personas of the tip flip screen in coffee shops."
              link="/tipflip"        
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={leaf}
              isBlog={false}
              title="Low Poly Designs"
              description="Isometric low-poly characters and scenes created on Blender."
              link="/blender"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={suicide}
              isBlog={false}
              title="IBM"
              description="User research for onboarding for Enterprise Performance Management product. [cs]"
              link="/fillerpage"
              />
              </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={emotion}
              isBlog={false}
              title="HBO"
              description="Engineered curated content pages, “Spotlight Pages” for content discovery team. [cs]"
              link="/fillerpage"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;