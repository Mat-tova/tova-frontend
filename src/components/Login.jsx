import {Box, Button, TextField, Typography} from '@mui/material';
import asiaMcLogo from '../assets/asia-mc-logo.png'; // Assuming the logo is in the assets folder
import React from 'react';
import {useNavigate} from 'react-router-dom'; // Import useNavigate hook

function Login() {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const navigate = useNavigate(); // Initialize useNavigate hook

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleLogin = () => {
        // Basic email validation
        if (!email.includes('@')) {
            alert('Please enter a valid email address');
            return;
        }

        // Basic password validation
        if (password.length < 6) {
            alert('Password must be at least 6 characters long');
            return;
        }

        // Assuming a successful login, navigate to the user profile page
        navigate('/user-profile'); // Replace '/user-profile' with the actual route to the user profile page
    };

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            backgroundColor: '#f5f5f5'
        }}>
            <Box sx={{
                textAlign: 'left',
                padding: '20px',
                borderRadius: '10px',
                backgroundColor: '#fff',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
            }}>
                <Typography variant="h4" sx={{mb: 2, color: '#333', fontWeight: 'bold'}}>Welcome</Typography>
                <Typography sx={{mb: 8, color: '#666'}}>Log in to your ASIA
                    account.</Typography> {/* Increased margin bottom for spacing */}
                <Typography sx={{mb: 1, color: '#333'}}>Email/Phone number</Typography>
                <TextField id="email" variant="outlined" placeholder="email address/phone number"
                           sx={{mb: 2, width: {xs: '100%', md: '100%', lg: '100%'}, backgroundColor: '#fff'}}
                           value={email}
                           onChange={handleEmailChange}/> {/* Made the text input wider for all screen sizes */}
                <Typography sx={{mb: 1, color: '#333'}}>Password</Typography>
                <TextField id="password" variant="outlined" type="password" placeholder="Password"
                           sx={{mb: 2, width: {xs: '100%', md: '100%', lg: '100%'}, backgroundColor: '#fff'}}
                           value={password}
                           onChange={handlePasswordChange}/> {/* Made the text input wider for all screen sizes */}
                <p style={{color: 'grey'}}>Forgot the password?</p> {/* Made the "Forgot the password?" text grey */}
                <Box sx={{display: 'flex', justifyContent: 'center', width: '100%'}}>
                    <Button variant="contained" sx={{
                        width: {xs: '50%', md: '50%', lg: '50%'},
                        mb: 2,
                        backgroundColor: '#dca65f',
                        color: '#fff',
                        fontWeight: 'bold'
                    }} onClick={handleLogin}>Login</Button> {/* Changed button color to orange */}
                </Box>
                <img src={asiaMcLogo} alt="Asia MC Logo" style={{
                    width: '300px',
                    height: 'auto',
                    marginBottom: '20px',
                    display: 'block',
                    marginLeft: 'auto',
                    marginRight: 'auto'
                }}/>
            </Box>
        </Box>
    )
}

export default Login;