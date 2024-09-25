import React from 'react';
import {BottomNavigation, BottomNavigationAction} from '@mui/material';
import {useNavigate} from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home.js";
import ChatIcon from "@mui/icons-material/ChatBubbleOutline.js";
import LikeIcon from "@mui/icons-material/FavoriteBorder.js";
import TravelIcon from "@mui/icons-material/FlightTakeoff.js";

function BottomAppNavigation() {
    const navigate = useNavigate();

    return (
        <BottomNavigation showLabels sx={{width: '100%', position: 'fixed', bottom: 0, zIndex: 1000}}>
            <BottomNavigationAction label="Home" icon={<HomeIcon/>} onClick={() => navigate('/user-profile')}/>
            <BottomNavigationAction label="Chat" icon={<ChatIcon/>}/>
            <BottomNavigationAction label="Like" icon={<LikeIcon/>} onClick={() => navigate('/liked')}/>
            <BottomNavigationAction label="Travel" icon={<TravelIcon/>} onClick={() => navigate('/travel')}/>
        </BottomNavigation>
    );
}

export default BottomAppNavigation;