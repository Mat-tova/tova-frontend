import React, {useState} from 'react';
import {Avatar, BottomNavigation, BottomNavigationAction, Box, IconButton, Typography} from '@mui/material';
import {useNavigate} from 'react-router-dom';
import MusicIcon from '@mui/icons-material/MusicNote';
import PetsIcon from '@mui/icons-material/Pets';
import HomeIcon from '@mui/icons-material/Home';
import ChatIcon from '@mui/icons-material/ChatBubbleOutline';
import LikeIcon from '@mui/icons-material/FavoriteBorder';
import TravelIcon from '@mui/icons-material/FlightTakeoff';
import StarIcon from '@mui/icons-material/Star';
import MessageIcon from '@mui/icons-material/Message'; // Added MessageIcon
import FavoriteIcon from '@mui/icons-material/Favorite'; // Added FavoriteIcon
import malyssaPicture from '../assets/john.jpg';
import TypographyWithAnswer from './TypographyWithAnswer';
import TopAppNavigation from './TopAppNavigation.jsx';
import BottomAppNavigation from "./BottomAppNavigation.jsx";

function MainPage() {
    const navigate = useNavigate();
    const [data, setData] = useState({
        name: "John",
        bounds: ["Music", "PetsLife"],
        bio: "Born in Poland, raised in the Netherlands. I love to travel and explore new places. am a big fan of music and pets.",
        interests: "I am a big fan of music and pets.",
        languages: "English, Dutch, Polish",
        location: "Amsterdam, Netherlands"
    });

    return (
        <div>
            <TopAppNavigation/>
            <Box sx={{
                display: 'flex',
                flexDirection: {xs: 'column', md: 'row'},
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: '20px',
                position: 'relative',
                width: '100%'
            }}>
                <Avatar src={malyssaPicture} sx={{
                    width: {xs: 300, md: 450},
                    height: {xs: 300, md: 450},
                    position: 'relative',
                    zIndex: 1,
                    borderRadius: 0
                }}>
                    <StarIcon sx={{position: 'absolute', bottom: 0, right: 0, color: 'gold'}}/>
                </Avatar>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginLeft: {xs: 0, md: 20}
                }}>
                    <Typography variant="h5" component="div" sx={{marginTop: '10px'}}>
                        {data.name}
                    </Typography>
                    <Typography variant="body1" component="div" sx={{marginTop: '10px'}}>
                        Things you can bond over
                    </Typography>
                    <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                        {data.bounds.map((bound) => (
                            <IconButton key={bound} aria-label={bound.toLowerCase()}>
                                {bound === "Music" ? <MusicIcon/> : <PetsIcon/>}
                                {bound}
                            </IconButton>
                        ))}
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop: {xs: 5, md: 10}
                    }}>
                        <TypographyWithAnswer question="My Bio:" answer={data.bio}/>
                        <TypographyWithAnswer question="My Interests:" answer={data.interests}/>
                        <TypographyWithAnswer question="My Languages:" answer={data.languages}/>
                        <TypographyWithAnswer question="My Location:" answer={data.location}/>
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop: '10px'
                    }}>
                        <IconButton aria-label="message">
                            <MessageIcon sx={{color: 'black'}}/>
                        </IconButton>
                        <IconButton aria-label="heart">
                            <FavoriteIcon sx={{color: 'black'}}/>
                        </IconButton>
                        <IconButton aria-label="star">
                            <StarIcon sx={{color: 'black'}}/>
                        </IconButton>
                    </Box>
                </Box>
            </Box>
            <BottomAppNavigation/>
        </div>
    )
}

export default MainPage;