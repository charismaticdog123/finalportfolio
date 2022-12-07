import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import {Link, Route} from "react-router-dom";
import GoodReads from "./pages/goodreads";

function ProjectCards(props) {
  return (

    <Card className="project-card-view">
      {/* <Card.Img variant="top" src={props.imgPath} alt="card-img" /> */}
      <a class="card-block stretched-link " href={props.link}>
      <Card.Body>

        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify", color: "black" }}>
          {props.description}
        </Card.Text>
        <Button variant="primary" href={props.ghLink} target="_blank">
          {props.isBlog ? "Blog" : "GitHub"}
        </Button>
        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            {"Demo"}
          </Button>
        )}
      </Card.Body>
      </a>
    </Card>
    // </Link>
  );
}
export default ProjectCards;