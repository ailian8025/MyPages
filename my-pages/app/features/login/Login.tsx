import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Email:', email);
        console.log('Password:', password);
        // Add your login logic here
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <Box
                className="p-6 bg-white rounded-lg shadow-md"
                sx={{ width: 400 }}
            >
                <Typography variant="h5" className="mb-4 text-center">
                    Login
                </Typography>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <TextField
                        label="Email"
                        variant="outlined"
                        fullWidth
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                        label="Password"
                        type="password"
                        variant="outlined"
                        fullWidth
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        fullWidth
                        className="mt-4"
                    >
                        Submit
                    </Button>
                </form>
            </Box>
        </div>
    );
};

export default Login;