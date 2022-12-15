

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


{/* <Canvas camera={{ fov: 18 }}>
        <ambientLight intensity={1.25} />
        <Suspense fallback={null}>
        <Model />
        </Suspense>
        <Environment preset="sunset" />
        <OrbitControls />
      </Canvas> */}
     
      <NavigationBar />
        <div className="container">
         <Routes>
         <Route path="/finalportfolio" element={<LandingPage />} />

         <Route exact path="/" element={<LandingPage />} />
         {/* <Route path="/finalportfolio/home" element={<LandingPage />} /> */}
         <Route path="/home" element={<LandingPage />} />

           {/* <Route path="/finalportfolio/intro" element={<Home />} /> */}
           <Route path="/intro" element={<Home />} />
           {/* <Route path="/finalportfolio/work" element={<Projects />} /> */}
           <Route path="/work" element={<Projects />} />

           {/* <Route path="/finalportfolio/play" element={<Play />} /> */}
           <Route path="/play" element={<Play />} />

           {/* <Route path="/finalportfolio/about" element={<About />} />  */}
           <Route path="/about" element={<About />} /> 

           {/* <Route path="/finalportfolio/goodreads" element={<GoodReads />} /> */}
           <Route path="/goodreads" element={<GoodReads />} /> 

           {/* <Route path="/finalportfolio/tipflip" element={<TipFlip />} />  */}
           <Route path="/tipflip" element={<TipFlip />} /> 

           {/* <Route path="/finalportfolio/fillerpage" element={<FillerPage />} />  */}
           <Route path="/fillerpage" element={<FillerPage />} /> 

           {/* <Route path="/finalportfolio/blender" element={<Blender />} />  */}
           <Route path="/blender" element={<Blender />} /> 

           {/* <Route path="/finalportfolio/slingshot" element={<Slingshot />} />  */}
           <Route path="/slingshot" element={<Slingshot />} /> 



           

         </Routes>
       </div> 
    
    </div>
    

    
    );
}

export default App;