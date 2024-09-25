import React from 'react';
import { Typography } from '@mui/material';

function TypographyWithAnswer({ question, answer }) {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '10px 0' }}>
            <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', color: 'text.primary' }}>
                {question}
            </Typography>
            <Typography variant="body1" component="div" sx={{ marginTop: '5px', color: 'text.secondary' }}>
                {answer}
            </Typography>
        </div>
    );
}

export default TypographyWithAnswer;