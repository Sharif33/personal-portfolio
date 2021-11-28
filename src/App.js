import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./components/pages/Home/Contact";
import Home from "./components/pages/Home/Home";
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
        </Routes>
      </Router>
    </div>
  );
}

export default App;
