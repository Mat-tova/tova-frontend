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
                <TypographyWithAnswer question="Members that are currently in your city.." answer="Check if they still have time to meet"/>
                <TypographyWithAnswer question="Members that are travelling to your city.." answer="Book ahead of time for opportunity sharing!"/>
            </Box>
            <BottomAppNavigation/>
        </div>
    )
}

export default StarredLiked;