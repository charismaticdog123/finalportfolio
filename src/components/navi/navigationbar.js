import { Link, useMatch, useResolvedPath } from "react-router-dom"
// used this tutorial: https://www.youtube.com/watch?v=SLfhMt5OUPI
import { Container, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function NavigationBar() {
  return (
    <div className="nav">
      <Row>
      <Col lg={3} className="home-header nav-font ">
     <ul >
      <Link to="/">
     <img class="site-logo" href="/home" src="images/mango.png" alt="mango" width="150%"></img>
      </Link>
     </ul>

      </Col>

        <Col lg={11} className="nav-font">

     <ul >

      <div className="nav-font">
        <Link className="nav-font" to="work">WORK</Link>
        <Link className="nav-font" to="play">PLAY</Link>
        <Link className="nav-font" to="about">ABOUT</Link>
      </div>
        
     </ul>
     </Col>
     </Row>
  </div>
  )}