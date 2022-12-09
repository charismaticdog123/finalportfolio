import React from "react";
import Card from "react-bootstrap/Card";
import { Image } from "react-bootstrap";
import Button from "react-bootstrap/Button";

function Blender() {
  return (
    <div>
    <h1><b><strong>Soft World</strong></b></h1>

   <p class="project-p subtitle"><i>Exploring isometric low-poly characters and settings!</i></p>
   <h3>A Bánh Mì Ốp La Breakfast</h3>
   <img src="images/kitchen.png" alt="blender render of kitchen" width="50%" height="50%"    style={{ marginLeft: "30rem",justifyContent: 'center', alignItems: 'center' }}></img>

   <h3>Mushie</h3>
   <img src="images/mushie.png" alt="blender render of mushie" width="50%" height="50%"    style={{ marginLeft: "30rem", justifyContent: 'center', alignItems: 'center' }}></img>


  
    </div>
    
  );
}
export default Blender;