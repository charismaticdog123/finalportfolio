import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import homeLogo from "../../Assets/home-main.svg";
import Particle from "./Particle";
import Description from "./description";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Model } from "../../Proj1_kitchen2";

function Home() {
  return (
    <section>
                {/* <div className="App">
    <Canvas style={{ justifyContent: 'center', alignItems: 'center'}}>
    <ambientLight intensity={1} />
      <OrbitControls />
    <mesh>
    <boxGeometry />
    <meshStandardMaterial color="#E49B0F"/>
  </mesh>
    </Canvas>
  </div> */}
   <Container fluid className="home-section" id="home">
   
   <Container className="home-content">
     <Row>
       <Col className="home-header font-link ">
       {/* <p  className="heading2">
           Hallo,
         </p>     */}
         
         <p style={{ paddingTop:"10rem"}} className="heading">
          
          Hallo, <br></br>
          

        I'm <a className="main-name"> filler</a>!{" "} <span className="wave" role="img" aria-labelledby="wave">
      <img class="site-logo" src="images/mango.png" alt="mango" width="100%"    ></img>
               
               </span>
         </p>    
         </Col>
         </Row>
         </Container>
         </Container>
      <Container fluid className="home-section" id="home">
   
        <Container className="home-content">
          <Row>
            <Col md={6} className="home-header font-link ">
              <p className="small-heading" style={{  fontSize: ".6em", textAlign: "left" }}>
              currently, designer @IBM
              <br></br>
          previously, swe @HBO
          <br></br>
          occasionally, cs and econ student @BrownUniversity
          <br></br>
          always, a storyteller and mango enthusiast @LosAngeles
              </p>
            </Col>
   

            <Col md={6} style={{ paddingRight: 2 }}>
        
            </Col>

              {/* <div className="App">
    <Canvas style={{ justifyContent: 'center', alignItems: 'center'}}>
    <ambientLight intensity={1} />
      <OrbitControls />
    <mesh>
    <boxGeometry />
    <meshStandardMaterial color="#E49B0F"/>
  </mesh>
    </Canvas>
  </div> */}


          {/* <ModelViewer scale="10" modelPath={"public/images/3D/proj1_kitchen.glb"} /> */}
          </Row>

          
        </Container>
      
      </Container>
{/* from https://unused-css.com/blog/animated-down-arrow/ */}
      <div class="down-arrow"></div>
      <br></br>
    </section>
  );
}

export default Home;