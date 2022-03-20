import React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
// import SpeedDial from "@mui/material/SpeedDial";
// import SpeedDialIcon from "@mui/material/SpeedDialIcon";
// import SpeedDialAction from "@mui/material/SpeedDialAction";
// import GitHubIcon from "@mui/icons-material/GitHub";
// import InfoIcon from "@mui/icons-material/Info";
import { Link } from 'react-router-dom';
import "./SingleProjects.css";
// import { Language } from "@mui/icons-material";
// import { CgArrowLongRight } from "react-icons/cg";
import './Projects.css';
import { RiGithubLine, RiInformationLine, RiExternalLinkLine, RiAddLine } from "react-icons/ri";
import phono from '../../../images/phono.png';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Projects = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="">
      <div className="container">
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              textColor="secondary"
              indicatorColor="secondary"
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab
                sx={{ color: "info.main" }}
                label="Mern stack"
                {...a11yProps(0)}
              />
              <Tab
                sx={{ color: "info.main" }}
                label="Front End"
                {...a11yProps(1)}
              />
              <Tab label="All" {...a11yProps(2)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <div className="row p-container">
              <div className="col-md-10 mx-auto col-sm-12 p-2">
                <div className="d-md-flex justify-content-between align-items-center">
                  <div className="w-100">
                    <div className="p-img">
                  <div className="p-details"></div>
                  <div className="p-btn">
                  <h1 className="text-success"><RiAddLine/></h1>
                  </div>
                  {/* <Box
                  sx={{
                    height: 480,
                    transform: "translateZ(0px)",
                    flexGrow: 1,
                  }}
                >
                  <SpeedDial 
                    ariaLabel="SpeedDial basic example"
                    sx={{ position: "absolute", bottom: 16, right: 16 }}
                    icon={<SpeedDialIcon />}
                  >
                 
                  <SpeedDialAction className="btn-custom"
                        icon= {<a className="text-decoration-none text-light" rel="noreferrer" target="_blank" href="https://phono-3a490.web.app/"><Language /></a>}
                        tooltipTitle= "Live Demo"
                      />
                  <SpeedDialAction className="btn-custom "
                        icon= {<Link className="text-light" to="/phono" ><InfoIcon /></Link>}
                        tooltipTitle= "See Details"
                      />
                  <SpeedDialAction className="btn-custom"
                        icon= {<a className="text-decoration-none text-light" rel="noreferrer" target="_blank" href="https://github.com/Sharif33/phono"><GitHubIcon /></a>}
                        tooltipTitle= "Source Code"
                      />
                  
                  
                  </SpeedDial>
                </Box> */}
                  
                </div>
                {/* <Link className="text-decoration-none" to="/phono"><div className="p-2 d-flex justify-content-center align-items-center border-js shadow bg-dark">
                    <h5 className="text-light pt-1">PHONO</h5>
                    <span><CgArrowLongRight className="border-js arrow text-light rounded-circle fs-1 mx-2 p-2"/></span>
                  </div></Link> */}
                  </div>
                    <div>
                      <img className="img-none img-fluid shadow" src={phono} alt="" />
                    </div>
                  <div className="p-section">
                    <small className="text-sky font-monospace">Fullstack project</small>
                    <h3 className='text-lightest-slate'><span className='text-warning fw-bold'>PH</span><span className="text-danger fw-bold">|O|</span><span className="text-warning fw-bold">NO</span></h3>
                    <div className="text-light-slate rounded project-details">
                      <p>Full-Stack web application including customize admin panel as well as search and filter option with <span className="text-sky">MERN</span>. Used <span className="text-sky">Firebase</span> for login system. Used <span className="text-sky">Stripe</span> for payment and <span className="text-sky">Material UI & Bootstrap5</span> for styles.</p>
                    </div>
                    <div className="pt-3 pb-1 text-light-slate font-monospace">
                      <small><span className="mx-2 ">React</span> <span className="mx-2 ">MongoDB</span> <span className="mx-2 ">Node Js</span> <span className="mx-2 ">Firebase</span> <span className="mx-2 ">Stripe</span></small>
                    </div>
                    <div>
                      <a className="text-decoration-none text-lightest-slate mx-2 fs-3" rel="noreferrer" target="_blank" href="https://github.com/Sharif33/phono"><RiGithubLine title= "Source Code" className="icon-hover" /></a>

                      <a className="text-decoration-none text-lightest-slate mx-2 fs-3" rel="noreferrer" target="_blank" href="https://phono-3a490.web.app/"><RiExternalLinkLine title= "Live Demo" className="icon-hover" /></a>
                      
                      <Link className="text-lightest-slate fs-3 ms-2" to="/phono" ><RiInformationLine title= "See Deatails"  className="icon-hover"/></Link>

                    </div>
                  </div>
                  
                </div>
                
              </div>
              <div className="col-md-6 p-2 ">
                <div className="rounded p-img2"></div>
              </div>
              <div className="col-md-6 p-2">
                <div className=" p-img rounded"></div>
              </div>
            </div>
          </TabPanel>
          <TabPanel value={value} index={1}>
            Item Two
          </TabPanel>
          <TabPanel value={value} index={2}>
            Item Three
          </TabPanel>
        </Box>
      </div>
    </div>
  );
};

export default Projects;
