import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom'; 
import React from 'react';
import cartIcon from '../images/Cart_icon.svg';
import profileIcon from '../images/Profile_icon.svg';
import searchIcon from '../images/Search_icon.svg';

export default function Header() {
  return (
    <>
    <AppBar
      elevation={0}
      position="static"
      sx={{
        backgroundColor: '#1B143F',
        color: 'white',
        boxShadow: 'none',
        padding: '0 30px',
      }}
    >
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: { xs: 'column', sm: 'row' }, 
          gap: 2, 
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: 800,
            fontSize: '1.1rem',
          }}
        >
          Education<span style={{ fontWeight: 500 }}>Temp</span>
        </Typography>

        <Box sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', sm: 'row' },
          gap: 0, 
          alignItems: { xs: 'center', sm: 'flex-start' }, 
        }}>
          <Button
            component={Link}
            to="/"
            sx={{
              color: 'white',
              textTransform: 'none',
              '&:hover': { textDecoration: 'underline' },
            }}
          >
            Home
          </Button>
          <Button
            component={Link}
            to="/courses"
            sx={{
              color: 'white',
              textTransform: 'none',
              '&:hover': { textDecoration: 'underline' },
            }}
          >
            Courses
          </Button>
          <Button
            component={Link}
            to="/blog"
            sx={{
              color: 'white',
              textTransform: 'none',
              '&:hover': { textDecoration: 'underline' },
            }}
          >
            Blog
          </Button>
          <Button
            component={Link}
            to="/shop"
            sx={{
              color: 'white',
              textTransform: 'none',
              '&:hover': { textDecoration: 'underline' },
            }}
          >
            Shop
          </Button>
        </Box>

        <Box sx={{
          display: 'flex', 
          flexDirection: { xs: 'column', sm: 'row' }, 
          alignItems: 'center',
          gap: 2,
        }}>
          <Box sx={{ display: 'flex', gap: 1 }}>
            <img src={cartIcon} alt="Cart Icon" style={{ width: '15px' }} />
            <img src={profileIcon} alt="Profile Icon" style={{ width: '15px' }} />
            <img src={searchIcon} alt="Search Icon" style={{ width: '15px' }} />
          </Box>

          <Box sx={{ display: 'flex', gap: 1 }}>
            <Button
              sx={{
                color: 'white',
                textTransform: 'none',
                '&:hover': { textDecoration: 'underline' },
              }}
            >
              Login
            </Button>
            <Button
              sx={{
                backgroundColor: 'transparent',
                color: 'white',
                padding: '5px 20px',
                textTransform: 'none',
                borderRadius: '30px 0px 30px 0px',
                border: '2px solid white',
                '&:hover': {
                  backgroundColor: '#1B1430',
                },
              }}
            >
              Sign Up
            </Button>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
    <Box
        sx={{
          borderBottom: '0.8px dashed #FFFFFF99', 
          margin:"5px 50px"
        }}
      />
    </>
    
  );
}
