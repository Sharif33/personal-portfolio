import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/pages/AboutMe/About";
import Contact from "./components/pages/Home/Contact";
import Home from "./components/pages/Home/Home";
import Project from "./components/pages/Project/Project";
import Header from "./components/pages/Share/Header";

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Project />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
