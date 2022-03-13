import React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import GitHubIcon from "@mui/icons-material/GitHub";
import InfoIcon from "@mui/icons-material/Info";
import { Link } from 'react-router-dom';
import "./SingleProjects.css";
import { Language } from "@mui/icons-material";
import { CgArrowLongRight } from "react-icons/cg";

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
              <div className="col-md-4 p-2">
                <div className="p-img rounded-top shadow">
                  <div className="p-details"></div>
                  <div className="p-btn">
                  <h1 className="text-success">+</h1>
                  </div>
                  <Box
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
                </Box>
                  
                </div>
                <Link className="text-decoration-none" to="/phono"><div className="p-2 d-flex justify-content-center align-items-center border-js shadow bg-dark">
                    <h5 className="text-light pt-1">PHONO</h5>
                    <span><CgArrowLongRight className="border-js arrow text-light rounded-circle fs-1 mx-2 p-2"/></span>
                  </div></Link>
              </div>
              <div className="col-md-4 p-2 ">
                <div className="rounded p-img2"></div>
              </div>
              <div className="col-md-4 p-2">
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
