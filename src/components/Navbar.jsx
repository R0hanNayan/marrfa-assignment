import React from 'react';
import { AppBar, Toolbar, Box } from '@mui/material';

const Navbar = () => {
    return (
        <AppBar
            position="static"
            sx={{
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                padding: '0 16px',
            }}
        >
            <Toolbar>
                <Box
                    component="img"
                    src="../../assets/logo.png" 
                    alt="Company Logo"
                    sx={{
                        cursor:'pointer',
                        height: 40,
                        marginRight: 2,
                    }}
                />
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
