import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import spacecraft from '../images/spacecraft.png';

export default function Hero() {
  return (
    <Box
      sx={{
        position: 'relative', 
        fontFamily:'Montserrat',
        width: '90%',
        maxWidth: '1050px',
        height: '450px',
        margin: '4rem auto 0',
        borderRadius: '0 0 100px 0',
        border: '2px dashed rgba(255, 255, 255, 0.6)',
        backgroundColor: '#1B143F',
        overflow: 'visible', 
      }}
    >
      {/* Heading */}
      <Typography
        variant="h4"
        sx={{
          position: 'absolute',
          top: '-40px',
          left: '50%',

          transform: 'translateX(-50%)',
          backgroundColor: '#1B143F',
          padding: '0.5rem 1rem',
          fontWeight: '700',
          zIndex: 10,
          fontSize: { xs: '25px', md: '35px' },
          textAlign: 'center',
          width: '70%',
        }}
      >
        Good coaching is good teaching
      </Typography>

      {/* Paragraph */}
      <Typography
        sx={{
          position: 'absolute',
          top: '8%',
          left: '50%',
          transform: 'translateX(-50%)',
          fontSize: 14,
          fontWeight:800,
          textAlign: 'center',
          zIndex: 10,
          padding: { xs: '0 1rem', sm: '0 1.5rem' },
        }}
      >
        In a coaching role, you ask the questions and rely more on your staff, who become the
        <br /> experts, to provide the information.
      </Typography>

      {/* Buttons */}
      <Box
        sx={{
          position: 'absolute',
          top: '45%',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 10,
          display: 'flex',
          justifyContent: 'center',
          gap: 2,
        }}
      >
        <Button
          sx={{
            backgroundColor: 'transparent',
            color: 'white',
            // width:'40px',
            padding: '5px 24px',
            border: '2px solid white',
            textTransform: 'none',
            borderRadius: '0px 30px 0px 30px',
            '&:hover': { backgroundColor: '#E2E2E2' },
          }}
        >
          Join as Student
        </Button>
        <Button
          sx={{
            backgroundColor: 'transparent',
            color: 'white',
            // width:'15px',
            padding: '5px 24px',
            border: '2px solid white',
            textTransform: 'none',
            borderRadius: '0px 30px 0px 30px',
            '&:hover': { backgroundColor: '#E2E2E2' },
          }}
        >
          Join as Instructor
        </Button>
      </Box>

      {/* Glow Circle */}
      <Box
        sx={{
          position: 'absolute',
          top: '60%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(8, 79, 199, 0.5) 0%, rgba(8, 79, 199, 0) 70%)',
          filter: 'blur(40px)',
          zIndex: 0,
        }}
      />

      {/* Rocket Image */}
      <img
        src={spacecraft}
        alt="Rocket Launch"
        style={{
          position: 'absolute',
          top: '50%', 
          left: '50%',
          transform: 'translateX(-50%)',
          width: '400px',
          zIndex: 15, 
        }}
      />
    </Box>
  );
}
