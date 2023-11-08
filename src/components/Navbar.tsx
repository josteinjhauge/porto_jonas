import { AppBar, Box, Button, Container, CssBaseline, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Menu, MenuItem, Toolbar, Typography } from '@mui/material';
import { useState } from 'react';
import AirIcon from '@mui/icons-material/Air';
import MenuIcon from '@mui/icons-material/Menu';

type NavbarProps = {
    window?: () => Window
}
const drawerWidth = 240;
const navItems = ['Home', 'About', 'Contact'];

export const Navbar = ({window}: NavbarProps) => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    }

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{textAlign: 'center'}}>
            <Typography variant='h6' sx={{my: 2}}>
                Title
            </Typography>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton sx={{textAlign: 'center'}}>
                            <ListItemText primary={item} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    )
    const container = window !== undefined ? () => window().document.body : undefined

    return (
        <Box sx={{display: 'flex'}}>
            <CssBaseline />
            <AppBar component="nav">
                <Toolbar>
                    <IconButton 
                    aria-label="open drawer"
                     onClick={handleDrawerToggle}
                     color="inherit"
                     edge="start"
                     sx={{mr: 2, display: { sm: 'none'} }}
                     >
                      <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div"
                    sx={{flexGrow: 1, display: {xs: 'none', sm: 'block'} }} 
                    color="initial">
                        Title
                    </Typography>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        {navItems.map((item) => (
                        <Button key={item} sx={{ color: '#fff' }}>
                            {item}
                        </Button>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>
            <nav>
                <Drawer
                container={container}
                variant='temporary'
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true
                }}
                sx={{ display: {xs: 'block', sm: 'none'},
            '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth}}}
                >
                    {drawer}
                </Drawer>
            </nav>
        </Box>
    )
}
