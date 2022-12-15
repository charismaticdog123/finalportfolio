

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
import Play from "./components/projects/pages/play";
import { Canvas } from "@react-three/fiber";
import ModelViewer from "./blendermods/modelviewer";
import { Model } from "./blendermods/Tree2";
import { Environment, OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
function App() {

  return (

 





    <div>

     
      <NavigationBar />
        <div className="container">
         <Routes>
         {/* <Route path="/finalportfolio" element={<LandingPage />} /> */}

         <Route path="/" element={<LandingPage />} />
         <Route path="/home" element={<LandingPage />} />

           <Route path="/intro" element={<Home />} />
           <Route path="/work" element={<Projects />} />

           <Route path="/play" element={<Play />} />

           <Route path="/about" element={<About />} /> 

           <Route path="/goodreads" element={<GoodReads />} /> 

           <Route path="/tipflip" element={<TipFlip />} /> 

           <Route path="/fillerpage" element={<FillerPage />} /> 

           <Route path="/blender" element={<Blender />} /> 

           <Route path="/slingshot" element={<Slingshot />} /> 



           

         </Routes>
       </div> 
    
    </div>
    

    
    );
}

export default App;