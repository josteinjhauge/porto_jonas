import { AppBar, Box, Button, Container, IconButton, Menu, MenuItem, Toolbar, Typography } from '@mui/material';
import { useState } from 'react';
import AirIcon from '@mui/icons-material/Air';
import MenuIcon from '@mui/icons-material/Menu';

type NavbarProps = {
}

export const Navbar = ({ }: NavbarProps) => {
    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
    const pages = ["test1", "test2", "test3"] as string[]

    const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget)
    }
    const handleCloseMenu = () => {
        setAnchorElNav(null)
    }
    return (
        <>
            <AppBar position="static">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <AirIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                        <Typography variant="h6"
                            noWrap
                            component="a"
                            href="#app-bar"
                            sx={{
                                mr: 2, display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none'
                            }}>
                            Hersje
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="menu button"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenMenu}
                                color="inherit">
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="enu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left'
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                {pages.map((page) => (
                                    <MenuItem key={page} onClick={handleCloseMenu}>
                                        <Typography textAlign="center">{page}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                        <AirIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                        <Typography variant="h5" noWrap component="a"
                            href="#app-bar"
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none'
                            }}
                        >
                            Herjse
                    </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            {pages.map((page) => (
                                <Button key={page}
                                    onClick={handleCloseMenu}
                                    sx={{ my: 2, color: 'white', display: 'block' }}>
                                    {page}
                                </Button>
                            ))}
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    )
}
