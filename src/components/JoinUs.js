import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import trophyImage from '../images/gold-silver-bronze-trophy-cup-floating-podium-purple-background-champion-sport-first-second-third-places-winning-prizes-champions-celebration-concept-3d-render-illustration-removebg-preview 1.png'; 

export default function JoinUs() {
  return (
    <Box
      component="section"
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center',
        justifyContent: 'space-between',
        maxWidth: '1200px',
        mx: 8,
        p: 3,
        gap: 2,
      }}
    >
      {/* Text Section */}
      <Box sx={{ maxWidth: '600px', textAlign: { xs: 'left', md: 'left' } }}>
        <Typography
          sx={{ color: '#A99CFF', fontWeight: 'bold', mb: 2 , fontSize:12}}
        >
          Join Dominie At Best
        </Typography>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 'bold',
            mb: 3,
            fontSize: { xs: '1rem', md: '1.2rem' },
            lineHeight: 1.4,
          }}
        >
          The number one factor in relevance <br /> drives out resistance.
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: '#B7CBFA', fontSize: '0.8rem', lineHeight: 1 }}
        >
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
          non proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </Typography>
        {/* Button */}
        <Box sx={{ textAlign: { xs: 'center', md: 'left' }, mt: 4 }}>
          <Button
            variant="outlined"
            sx={{
              color: 'white',
              border: '2px solid white',
              borderRadius: '25px 0 25px 0',
              py: 1,
              px: 4,
              fontSize:10,
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
              },
            }}
          >
            Learn More
          </Button>
        </Box>
      </Box>

      {/* Image Section */}
      <Box
        sx={{
          maxWidth: { xs: '100%', md: '400px' },
          mx: 'auto',
        }}
      >
        <img
          src={trophyImage}
          alt="Trophies"
          style={{ width: '100%', height: 'auto' }}
        />
      </Box>
    </Box>
  );
}
