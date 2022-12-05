

import React from "react";
import Intro from "./components/intro/intro";
import About from "./components/about";
import Projects from "./components/projects/projects";


import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {

  return (
    <div>
      <Intro></Intro>
      <Projects></Projects>
      <About></About>

    </div>
    );
}

export default App;