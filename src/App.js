import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/pages/AboutMe/About";
import Blogs from "./components/pages/Blogs/Blogs";
import Contact from "./components/pages/Home/Contact";
import Home from "./components/pages/Home/Home";
import Phono from "./components/pages/Project/Phono";
import Project from "./components/pages/Project/Project";
import SingleProject from "./components/pages/Project/SingleProject";
import Footer from "./components/pages/Share/Footer";
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
          <Route path="phono" element={<Phono/>} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="projects/project/:id" element={<SingleProject />} />
          <Route path="home/project/:id" element={<SingleProject />} />
          <Route path="/project/:id" element={<SingleProject />} />
        </Routes>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
