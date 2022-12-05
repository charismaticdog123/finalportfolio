import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import homeLogo from "../../Assets/home-main.svg";
import Particle from "./Particle";
import Description from "./description";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <p style={{ fontSize: "2.1em", paddingBottom: 15 }} className="heading">
                Hallo, I'm a <strong className="main-name"> bean</strong>!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                🥭
                </span>
              </p>

              {/* <p className="heading-name">
                I'm a
                <strong className="main-name"> bean</strong>!
              </p> */}

              <p style={{  fontSize: ".6em", padding: 50, textAlign: "left" }}>
                <Description />
              </p>
            </Col>

            {/* <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col> */}
          </Row>
        </Container>
      </Container>
      {/* <Home2 /> */}
    </section>
  );
}

export default Home;