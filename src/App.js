

import React from "react";
import About from "./components/about/about";
import Projects from "./components/projects/projects";
import Home from "./components/intro/intro";
import LandingPage from "./components/landingpage";


import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";


import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/navi/layout";

import { useState, useEffect } from "react";
import NavigationBar from "./components/navi/navigationbar";

import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

// Project Pages
import GoodReads from "./components/projects/pages/goodreads";
import TipFlip from "./components/projects/pages/tipflip";
import FillerPage from "./components/projects/pages/fillerpage";
import Blender from "./components/projects/pages/blender";
import Slingshot from "./components/projects/pages/slingshot";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Model } from "./Proj1_kitchen2";



function App() {

  return (

 





    <div>
     
      <NavigationBar />
      {/* <div id="intro"><Home /></div>
      <div id="projects"><Projects /></div>
      <div id="about"><About /></div> */}
        <div className="container">
         <Routes>
         <Route path="/" element={<LandingPage />} />
           {/* <Route path="/intro" element={<Home />} />
           <Route path="/projects" element={<Projects />} />
           <Route path="/about" element={<About />} />  */}
           <Route path="/goodreads" element={<GoodReads />} /> 
           <Route path="/tipflip" element={<TipFlip />} /> 
           <Route path="/fillerpage" element={<FillerPage />} /> 
           <Route path="/blender" element={<Blender />} /> 
           <Route path="/slingshot" element={<Slingshot />} /> 


           

         </Routes>
         {/* <Intro></Intro> */}
      {/* <Projects></Projects> */}
      {/* <About></About>  */}

      
       </div> 
      
    </div>
    

    
    );
}

export default App;