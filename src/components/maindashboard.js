import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useState } from 'react';
import axios from 'axios';
import GetAppIcon from '@mui/icons-material/GetApp';
import GetApiFunction from '../apiFunctions/getApiFunction';
import { NavLink } from 'react-router-dom';
import CarouselPage from '../components/carousal';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import InputIcon from '@mui/icons-material/Input';
import DeleteIcon from '@mui/icons-material/Delete';
import CommentIcon from '@mui/icons-material/Comment';





const drawerWidth = 240;

function ResponsiveDrawer(props) {







    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div style={{backgroundColor:"greenyellow", textDecoration:"none", color:"black"}}>
            
            <Toolbar />
            <Typography variant="h4">NAVBAR</Typography>
            <Divider />
            <List>




                <ListItem >
                    <NavLink to="/">
                        <ListItemButton color='success' >
                            <Typography variant="h6">Dashboard</Typography>
                            <ListItemIcon>
                                {<DashboardIcon />}
                            </ListItemIcon>
                            <ListItemText />
                        </ListItemButton>
                    </NavLink>
                </ListItem>

            </List>
            <Divider />


            
            <List>




                <ListItem >
                    <NavLink to="/getApiFunction">
                        <ListItemButton >
                            <Typography variant="h6">Get Api</Typography>
                            <ListItemIcon>
                                {<GetAppIcon />}
                            </ListItemIcon>
                            <ListItemText />
                        </ListItemButton>
                    </NavLink>
                </ListItem>

            </List>
            <Divider />


            <List>

                <ListItem >
                    <NavLink to="/postApiFunction">
                        <ListItemButton >
                            <Typography variant="h6">Post Api</Typography>
                            <ListItemIcon>
                                {<LocalPostOfficeIcon />}
                            </ListItemIcon>
                            <ListItemText />
                        </ListItemButton>
                    </NavLink>
                </ListItem>

            </List>
            <Divider />

            <Divider />
            <List>

                <ListItem >
                    <NavLink to="/putApiFunction">
                        <ListItemButton >
                            <Typography variant="h6">Put Api</Typography>
                            <ListItemIcon>
                                {<InputIcon/>}
                            </ListItemIcon>
                            <ListItemText />
                        </ListItemButton>
                    </NavLink>
                </ListItem>

            </List>
            <Divider />

            <Divider />
            <List>

                <ListItem >
                    <NavLink to="/delApiFunction">
                        <ListItemButton >
                            <Typography variant="h6">Delete Api</Typography>
                            <ListItemIcon>
                                {< DeleteIcon  />}
                            </ListItemIcon>
                            <ListItemText />
                        </ListItemButton>
                    </NavLink>
                </ListItem>

            </List>
            <Divider />

            <Divider />
            <List>

                <ListItem >
                    <NavLink to="/comments">
                        <ListItemButton >
                            <Typography variant="h6">Comments Api</Typography>
                            <ListItemIcon>
                                {<CommentIcon  />}
                            </ListItemIcon>
                            <ListItemText />
                        </ListItemButton>
                    </NavLink>
                </ListItem>

            </List>
            <Divider />

        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
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
                        API DASHBOARD
                    </Typography>
                  
                    
                </Toolbar>
            </AppBar>

                
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
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
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>










            <Box
               
                sx={{ width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                
                <Typography variant='h2' sx={{backgroundColor:"greenyellow", marginTop:"65px"}}>
                    WELCOME TO DASHBOARD

                </Typography>
                <Toolbar />
                <div style={{ justifyContent: "center" }}>
                    <Typography paragraph>

                        <div><CarouselPage /></div>


                    </Typography>
                    <Typography paragraph>

                    </Typography>
                </div>
            </Box>
        </Box>
    );
}

ResponsiveDrawer.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default ResponsiveDrawer;
