import React from 'react';
import { Box, Grid, Typography, Avatar } from '@mui/material';

// Importing images
import RocketImage from '../images/rocket-launch-laptop-flying-rocket-icon-business-startup-project-concept 2.png';
import Profile1 from '../images/profile_1.png';
import Profile2 from '../images/profile_2.png';
import Profile3 from '../images/profile_3.png';
import Profile4 from '../images/profile_4.png';
import Profile5 from '../images/profile_5.png';

export default function Testimonial() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column-reverse', md: 'row' },
        justifyContent: 'space-between',
        alignItems: 'center',
        bgcolor: '#2D2752',
        borderRadius: 3,
        py: 8,
        mx:8,
        my:8
      }}
    >
      {/* Left Section (Image) */}
      <Box
        sx={{
          width: { xs: '100%', md: '50%' },
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <img
          src={RocketImage}
          alt="Rocket Launch"
          style={{ width: '100%', maxWidth: '90%' }}
        />
      </Box>

      {/* Right Section (Content) */}
      <Box
        sx={{
          width: { xs: '100%', md: '50%' },
          textAlign: { xs: 'center', md: 'left' },
          px: { xs: 2, md: 5 },
        }}
      >
        {/* Title */}
        <Typography
          variant="subtitle2"
          sx={{
            color: '#B3B3B3',
            fontWeight: 'bold',
            mb: 2,
            textAlign: { xs: 'center', md: 'center' },
          }}
        >
          Testimonials
        </Typography>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 'bold',
            mb: 5,
            textAlign: { xs: 'center', md: 'center' },
          }}
        >
          What our students say?
        </Typography>

        {/* Profiles */}
        <Grid container justifyContent="center" gap={3} sx={{ mb: 5 }}>
          {[Profile1, Profile2, Profile3, Profile4, Profile5].map((profile, index) => (
            <Avatar
              key={index}
              src={profile}
              alt={`Profile ${index + 1}`}
              sx={{
                width: { xs: 48, md: 50 },
                height: { xs: 48, md: 50 },
              }}
            />
          ))}
        </Grid>

        {/* Testimonial Text */}
        <Box textAlign="center">
          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1,fontSize:13 }}>
            Ramjan Al Aink
          </Typography>
          <Typography
            sx={{ color: '#B3B3B3', mb: 1 ,fontSize:12}}
          >
            Bostsolf.co
          </Typography>
          <Typography
            sx={{
              color: '#B3B3B3',
              lineHeight: 1.6,
              fontSize:12
            }}
          >
            One ipsum dolor sit amet, elit, sed do eiusmod tempor ut labore et
            dolore magna aliqua. Quis ipsum ultrices gravida. Risus dolore magna
            aliqua. Quis ipsum ultrices gravida.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
