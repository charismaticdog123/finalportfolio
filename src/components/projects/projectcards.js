import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import {Link, Route} from "react-router-dom";
import GoodReads from "./pages/goodreads";

function ProjectCards(props) {
  return (

    <Card className="project-card-view">
      {/* <Card.Img variant="top" src={props.imgPath} alt="card-img" width="100%" height="100%"    style={{ justifyContent: 'center', alignItems: 'center' }}/> */}
      <a class="card-block stretched-link " href={props.link}>
      <Card.Body >

        <Card.Title class="card-title"><strong>{props.title}</strong></Card.Title>
        <Card.Text style={{ textAlign: "justify", color: "black" }}>
          {props.description}
        </Card.Text>
      
      </Card.Body>
      </a>
    </Card>
    // </Link>
  );
}
export default ProjectCards;