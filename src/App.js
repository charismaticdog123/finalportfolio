

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

// function App() {


//   return (
//     <Router>
//       {/* <Preloader load={load} /> */}
//       <div className="App" >
//         <NavigationBar />
//         {/* <Scroller /> */}
//         <Routes>
//           <Route path="/" element={<Home />} />
//            <Route path="projects" element={<Projects />} />
//           <Route path="/about" element={<About />} />
//           <Route path="*" element={<Navigate to="/"/>} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;
// function App() {
//   return (
    
// <div>
// <Intro></Intro>
//        <Projects></Projects>
//        <About></About>
//         <NavigationBar />
//       {/* <div className="container">
//         <Routes>
//           <Route path="intro" element={<Home />} />
//           <Route path="projects" element={<Projects />} />
//           <Route path="about" element={<About />} /> 
        
//         </Routes>
//       </div> */}
// </div>

//   )
// }

// export default App


// export default function App() {
//   return (
//     <div>
//     <div>
//       <NavigationBar></NavigationBar>
//       <Intro></Intro>
//       <Projects></Projects>
//       <About></About>
//     </div>
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route path="intro" element={<Home />} />
//           <Route path="projects" element={<Projects />} />
//           <Route path="about" element={<About />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//     </div>
//   );
// }

// ReactDOM.render(<App />, document.getElementById("root"));

function App() {

  return (
    // <GoodReads></GoodReads>
    // <TipFlip></TipFlip>

    <div>
      <NavigationBar />
        <div className="container">
         <Routes>
         <Route path="/" element={<LandingPage />} />
           <Route path="/intro" element={<Home />} />
           <Route path="/projects" element={<Projects />} />
           <Route path="/about" element={<About />} /> 
           <Route path="/goodreads" element={<GoodReads />} /> 
           <Route path="/tipflip" element={<TipFlip />} /> 
           <Route path="/fillerpage" element={<FillerPage />} /> 
           

         </Routes>
         {/* <Intro></Intro> */}
      {/* <Projects></Projects> */}
      {/* <About></About>  */}
       </div> 
    </div>

    
    );
}

export default App;