
import React from "react";
import About from "./about/about";
import Projects from "./projects/projects";
import Home from "./intro/intro";

function LandingPage() {

    return (
  
      <div>
        {/* <NavigationBar /> */}
         
           {/* <Intro></Intro> */}
           <div id="intro"><Home /></div>
      <div id="projects"><Projects /></div>
      <div id="about"><About /></div>
      </div>
  
      
      );
  }
  
  export default LandingPage;