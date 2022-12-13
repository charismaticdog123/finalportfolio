import { Link, useMatch, useResolvedPath } from "react-router-dom"
// used this tutorial: https://www.youtube.com/watch?v=SLfhMt5OUPI
import { Container, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function NavigationBar() {
  return (
    <nav className="nav">
    <Container className="home-content">
     <Row>
       <Col md={3} className="home-header font-link ">
       <Link to="/home" className="site-title">
      <img class="site-logo" href="/home" src="images/mango.png" alt="mango" width="30%"    ></img>
      </Link>
       </Col>
       <Col md={9} className="home-header font-link ">

       <ul style={{ justifyContent: 'right', alignItems: 'right' }}>
        {/* <Link to="/intro">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/about">About</Link> */}
        {/* <a href="#intro">Home</a> */}
        <a href="/projects"><h4>Projects</h4></a>
        <br></br>
        <br></br>
        <br></br>

        <a href="/about"><h4>About</h4></a>

      </ul></Col>
     </Row>
   </Container>
   
      
    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}