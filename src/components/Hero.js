import React from 'react';
import { Box, Button, Typography } from '@mui/material';
export default function Hero() {
  return (
    <Box
      sx={{
        position: 'relative', // Make sure the parent is relative for absolute positioning inside it
        width: '90%',
        maxWidth: '1050px',
        height: '450px',
        margin: '8rem auto 0',
        borderRadius: '0 0 100px 0',
        border: '2px dashed rgba(255, 255, 255, 0.6)',
        backgroundColor: '#1B143F',
        overflow: 'visible', // Allow elements inside to overflow (e.g., rocket image)
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
          fontWeight: 'bold',
          zIndex: 10,
          fontSize: { xs: '25px', md: '40px' },
          textAlign: 'center',
          width: '90%',
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
          fontSize: { xs: '14px', sm: '17px', lg: '18px' },
          textAlign: 'center',
          zIndex: 10,
          fontWeight: 'bold',
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
            padding: '10px 24px',
            border: '2px solid white',
            borderRadius: '30px 0px 30px 0px',
            '&:hover': { backgroundColor: '#E2E2E2' },
          }}
        >
          Join as Student
        </Button>
        <Button
          sx={{
            backgroundColor: 'transparent',
            color: 'white',
            padding: '10px 24px',
            border: '2px solid white',
            borderRadius: '30px 0px 30px 0px',
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

      {/* Rocket Image
      <img
        src="images/spacecraft.png"
        alt="Rocket Launch"
        style={{
          position: 'absolute',
          top: '-70px', // Adjust this to place it above the dashed square
          left: '50%',
          transform: 'translateX(-50%)',
          width: '300px',
          zIndex: 10, // Ensure it appears above the dashed square
        }}
      /> */}
    </Box>
  );
}
