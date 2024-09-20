import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Avatar, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import SearchIcon from '@mui/icons-material/Search';
import johnPicture from '../assets/matt.png';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';

function UserProfile() {
    const navigate = useNavigate();

    return (
        <div>
            <AppBar position="static" sx={{ backgroundColor: '#084f51', width: '100%' }}>
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu" sx={{ display: { xs: 'flex', md: 'flex' } }}>
                        <Avatar src="/static/images/avatar/1.jpg" />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex' } }}>
                        
                    </Typography>
                    <IconButton color="inherit" onClick={() => navigate('/search')} aria-label="search" sx={{ display: { xs: 'flex', md: 'flex' } }}>
                        <SearchIcon />
                    </IconButton>
                    <IconButton color="inherit" onClick={() => navigate('/edit-profile')} aria-label="edit" sx={{ display: { xs: 'flex', md: 'flex' } }}>
                        <EditIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', justifyContent: 'center', marginTop: '20px', position: 'relative', width: '100%' }}>
                <Avatar src={johnPicture} sx={{ width: { xs: 300, md: 450 }, height: { xs: 300, md: 450 }, position: 'relative', zIndex: 1, borderRadius: 0 }} />
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginLeft: { xs: 0, md: 20 } }}>
                    <Typography variant="h5" component="div" sx={{ marginTop: '10px' }}>
                        Matt
                    </Typography>
                    <Typography variant="body1" component="div" sx={{ marginTop: '10px' }}>
                        Music, PetsLife
                    </Typography>
                </Box>
            </Box>
            <BottomNavigation showLabels sx={{ width: '100%', position: 'fixed', bottom: 0, zIndex: 1000 }}>
                <BottomNavigationAction label="Home" icon={<HomeIcon />} onClick={() => navigate('/')} />
                <BottomNavigationAction label="Profile" icon={<PersonIcon />} onClick={() => navigate('/user-profile')} />
            </BottomNavigation>
        </div>
    )
}

export default UserProfile;