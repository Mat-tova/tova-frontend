import React from 'react';
import {AppBar, Avatar, IconButton, Toolbar, Typography} from '@mui/material';
import SearchIcon from "@mui/icons-material/Search.js";
import EditIcon from "@mui/icons-material/Edit.js";
import SendIcon from "@mui/icons-material/Send.js";
import {useNavigate} from "react-router-dom";

function TopAppNavigation() {
    const navigate = useNavigate();

    return (
        <AppBar position="static" sx={{ backgroundColor: '#084f51', width: '100%' }}>
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu" sx={{ display: { xs: 'flex', md: 'flex' } }}>
                    <Avatar src="/static/images/avatar/1.jpg" />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex' }, fontFamily: 'cursive', color: 'white', textAlign: 'center' }}>
                    Asia
                </Typography>
                <IconButton color="inherit" onClick={() => navigate('/search')} aria-label="search" sx={{ display: { xs: 'flex', md: 'flex' } }}>
                    <SearchIcon />
                </IconButton>
                <IconButton color="inherit" onClick={() => navigate('/edit-profile')} aria-label="edit" sx={{ display: { xs: 'flex', md: 'flex' } }}>
                    <EditIcon />
                </IconButton>
                <IconButton color="inherit" aria-label="send" sx={{ display: { xs: 'flex', md: 'flex' } }}>
                    <SendIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}

export default TopAppNavigation;