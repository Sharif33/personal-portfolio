import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/pages/AboutMe/About";
import Blogs from "./components/pages/Blogs/Blogs";
import Contact from "./components/pages/Home/Contact";
import Home from "./components/pages/Home/Home";
import BikeValley from "./components/pages/Project/BikeValley/BikeValley";
import Phono from "./components/pages/Project/Phono";
import Project from "./components/pages/Project/Project";
// import SingleProject from "./components/pages/Project/SingleProject";
import logo from './images/rashed-logo.png';
import Dashboard from "./components/pages/Dashboard/Dashboard";
import DashboardHome from "./components/pages/Dashboard/DashboardHome";
import AddProjects from "./components/pages/Dashboard/AddProjects";
import EditProjects from "./components/pages/Dashboard/EditProjects";
import ManageProjects from "./components/pages/Dashboard/ManageProjects";
import ScrollTop from "./components/pages/Share/ScrollTop";

function App() {
  const [ spinner, setSpinner ] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => setSpinner(false), 1500)
  }, []);
  return (
    <>
    {
      !spinner && 
    <div className="App">
      <Router>
      {/* <ScrollToTop smooth color="#112240" /> */}
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Project />} />
          <Route path="phono" element={<Phono/>} />
          <Route path="bike" element={<BikeValley/>} />
          <Route path="blogs" element={<Blogs />} />
          {/* <Route path="projects/project/:id" element={<SingleProject />} /> */}
          {/* <Route path="projects/:id" element={<SingleProject />} /> */}
          {/* <Route path="/project/:id" element={<SingleProject />} /> */}

          <Route path="Sdashboard" element={<Dashboard />}>
              <Route index element={<DashboardHome/>}/>
              <Route path={`/Sdashboard/addProject`} element={<AddProjects/>}/>
              <Route path={`/Sdashboard/manageProjects/:id`} element={<EditProjects/>}/>
              <Route path={`/Sdashboard/manageProjects`} element={<ManageProjects/>}/>
            </Route>

        </Routes>
        <ScrollTop/>
      </Router>
    </div>
    }
    {
      spinner && <div>
       <img className="img-fluid loader" src={logo} alt="" />
      </div>
    }
    
    </>
  );
}

export default App;
