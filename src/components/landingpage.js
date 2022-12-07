
import React from "react";
import About from "./about/about";
import Projects from "./projects/projects";
import Home from "./intro/intro";

function LandingPage() {

    return (
  
      <div>
        {/* <NavigationBar /> */}
         
           {/* <Intro></Intro> */}
           <Home></Home>
        <Projects></Projects>
        <About></About> 
      </div>
  
      
      );
  }
  
  export default LandingPage;