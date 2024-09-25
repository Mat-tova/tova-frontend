import React from 'react';
import {Box} from '@mui/material';
import TypographyWithAnswer from './TypographyWithAnswer';
import TopAppNavigation from "./TopAppNavigation.jsx";
import BottomAppNavigation from "./BottomAppNavigation.jsx";


function StarredLiked() {
    return (
        <div>
            <TopAppNavigation/>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: {xs: 5, md: 10},
                gap: 16 // Added spacing between typographies
            }}>
                <TypographyWithAnswer question="People you starred & Liked" answer="Anyone that you starred on our platform."/>
                <TypographyWithAnswer question="People starred or Liked you" answer="When our member are into you, they will appear here."/>
            </Box>
            <BottomAppNavigation/>
        </div>
    )
}

export default StarredLiked;