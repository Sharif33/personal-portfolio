import * as React from 'react';
// import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';

import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';

import List from '@mui/material/List';

import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import { Avatar} from '@mui/material';

import {Outlet, Link, NavLink } from 'react-router-dom';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import AddTaskOutlinedIcon from '@mui/icons-material/AddTaskOutlined';
import rashed from '../../../images/rashed-logo.png';
import './Dashboard.css';

const drawerWidth = 220;

const Dashboard = (props) => {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div className='bg-skill-back'>
                    <NavLink className="navbar-brand fw-bold fs-4 p-3 m-auto text-warning" to="/home">SHARIF M RASHED</NavLink>
                    <Toolbar/>
            <Box  sx={{p:1}}>
                <h6 className='ps-4 fw-bold text-sky font-custom'>MANAGEMENT</h6>
                           
               <List>    
                <NavLink className='btn btn-hover' style={({isActive})=> ({color: isActive ? '#E94235' : '#ccd6f6', textDecoration: isActive ?'none' : 'none',backgroundColor: isActive ? 'rgba(0, 171, 85, 0.08)': ''})} to={`/Sdashboard`}> <span className='me-2'><HomeIcon /></span>  Overview</NavLink>
               </List>
                
               <List>    
                <NavLink className='btn btn-hover' style={({isActive})=> ({color: isActive ? '#38D373' : '#ccd6f6', textDecoration: isActive ?'none' : 'none',backgroundColor: isActive ? 'rgba(0, 171, 85, 0.08)': ''})} to={`/Sdashboard/manageProjects`}> <span className='me-2'><AddTaskOutlinedIcon /></span>  Manage Projects</NavLink>
               </List> 

               <List>
               <NavLink className='btn btn-hover' style={({isActive})=> ({color: isActive ? '#38D373' : '#ccd6f6', textDecoration: isActive ?'none' : 'none',backgroundColor: isActive ? 'rgba(0, 171, 85, 0.08)': ''})}  to={`/Sdashboard/addProject`}><span className='me-2'><AddCircleOutlineOutlinedIcon /></span>  Add Projects</NavLink>
               </List>                           
            </Box>
            
           
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <>
        
        <Box sx={{ display: 'flex', backgroundColor:'#0A192F' }}>
            
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar className='bg-dash bg-skill-back'>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Dashboard       
                    </Typography>
                <Box sx={{ ml: "auto", display: 'flex' }}>
                    <div className="dropdown mx-2">
                                        <Avatar id="navbarDropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false" alt="" src={rashed} />
                            <ul className="dropdown-menu border-0 shadow" aria-labelledby="navbarDropdownMenuLink">
                                        <li className=" dropdown-item ">
                                        <Link className='text-dark' style={{textDecoration:'none'}} to="/home"><small>Home</small></Link>
                                        </li>
                
                            </ul>
                    </div>                    
                </Box>

                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                
                <Toolbar />
                 <Outlet></Outlet>
            </Box>
           
        </Box>
        </>
    );
};

export default Dashboard;