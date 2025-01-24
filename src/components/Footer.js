import React from 'react';
import { Box, Typography, Link, Divider } from '@mui/material';
import { Twitter, Facebook, Instagram } from '@mui/icons-material';
import { Phone, LocationOn, Email } from '@mui/icons-material';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'rgba(64, 58, 101, 0.5)',
        px: 3,
        py: 6,
      }}
    >
      {/* Main Footer Content */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-between',
          gap: { xs: 4, md: 10 },
          mx: 'auto',
          maxWidth: '1200px',
        }}
      >
        {/* Left Section */}
        <Box sx={{ mx: 5, }} >
          <Typography
            sx={{
              fontWeight: '900',
              textAlign: { xs: 'center', md: 'left' },
              fontSize:20
            }}
          >
            Education<span style={{ fontWeight: '500' }}>Temp</span>
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontWeight: '100',
              fontSize:12,
              mt: 2,
              color: '#fffff',
              lineHeight: '1.2',
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Typography>
        </Box>

        {/* Quick Links Section */}
        <Box>
          <Typography
            sx={{
              fontWeight: 'bold',
              textAlign: { xs: 'center', md: 'left' },
              mb: 2,
              fontSize:15,
            }}
          >
            Quick Links
          </Typography>
          <Box
            component="ul"
            sx={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: 3,
              listStyleType: 'none',
              p: 0,
              textAlign: { xs: 'center', md: 'left' },
              fontSize:12,

            }}
          >
            <li>
              <Link href="#" underline="none" sx={{ color: '#ffffff' }}>
                About
              </Link>
            </li>
            <li>
              <Link href="#" underline="none" sx={{ color: '#ffffff' }}>
                Blog
              </Link>
            </li>
            <li>
              <Link href="#" underline="none" sx={{ color: '#ffffff' }}>
                Course
              </Link>
            </li>
            <li>
              <Link href="#" underline="none" sx={{ color: '#ffffff' }}>
                Contact
              </Link>
            </li>
          </Box>
        </Box>

        {/* Contact Us Section */}
        <Box>
          <Typography
            sx={{
              fontWeight: 'bold',
              textAlign: { xs: 'center', md: 'left' },
              mb: 2,
              fontSize:15,

            }}
          >
            Contact Us
          </Typography>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
              gap: 7,
              textAlign: { xs: 'center', sm: 'left' },
            }}
          >
  {/* Phone */}
  <Typography
    sx={{
      gridColumn: '1',
      gridRow: '1',
      fontSize: '0.5rem', 
      display: 'flex',
      alignItems: 'center', 
    }}
  >
    <Phone fontSize="small" sx={{ mr: 1 }} />
    <Link
      href="tel:+12095550104"
      underline="none"
      sx={{ color: '#ffffff', fontSize: 'inherit' }} 
    >
      (209) 555-0104
    </Link>
  </Typography>

  {/* Email */}
  <Typography
    sx={{
      gridColumn: '2',
      gridRow: '1',
      fontSize: '0.6rem', 
      display: 'flex',
      alignItems: 'center', 
    }}
  >
    <Email fontSize="small" sx={{ mr: 1 }} />
    <Link
      href="mailto:michelle.rivera@example.com"
      underline="none"
      sx={{ color: '#ffffff', fontSize: 'inherit' }} 
    >
      michelle.rivera@example.com
    </Link>
  </Typography>

  {/* Location */}
  <Typography
    sx={{
      gridColumn: '1 / span 2',
      gridRow: '2',
      fontSize: '0.5rem', 
      display: 'flex',
      alignItems: 'center', 
    }}
  >
    <LocationOn fontSize="small" sx={{ mr: 1 }} />
    <Link
      href="https://www.google.com/maps?q=2715+Ash+Dr,+San+Jose,+South+Dakota+83475"
      underline="none"
      sx={{ color: '#ffffff', fontSize: 'inherit' }} 
      target="_blank"
      rel="noopener"
    >
      2715 Ash Dr. San Jose, South Dakota 83475
    </Link>
  </Typography>
</Box>

        </Box>
      </Box>

      {/* Divider */}
      <Divider sx={{ my: 4, borderColor: '#ffffff50' }} />

      {/* Footer Bottom */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-between',
          alignItems: 'center',
          px: 3,
          py: 2,
          maxWidth: '1200px',
          mx: 'auto',
          gap: 2,
        }}
      >
        <Typography
          sx={{ color: '#ffffff', textAlign: 'center' , fontSize:12}}
        >
          Copyright 2023 | All Rights Reserved
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 ,fontSize:10}}>
          <Link href="#" sx={{ color: '#ffffff' }}>
            <Twitter />
          </Link>
          <Link href="#" sx={{ color: '#ffffff' }}>
            <Facebook />
          </Link>
          <Link href="#" sx={{ color: '#ffffff' }}>
            <Instagram />
          </Link>
        </Box>
      </Box>
    </Box>
  );
}
