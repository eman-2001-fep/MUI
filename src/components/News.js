import React from 'react';
import { Box, Typography, Grid, Card, CardMedia, CardContent } from '@mui/material';


import NewsCard1 from '../images/news_card1.png';
import NewsCard2 from '../images/news_card2.png';
import NewsCard3 from '../images/news_card3.png';

export default function News() {
  const news = [
    {
      image: NewsCard1,
      title: '5 Graphic Design Skills That Will Strengthen Your Creativity',
      date: 'Apr 9, 2020',
    },
    {
      image: NewsCard2,
      title: '5 Graphic Design Skills That Will Strengthen Your Creativity',
      date: 'Apr 9, 2020',
    },
    {
      image: NewsCard3,
      title: '5 Graphic Design Skills That Will Strengthen Your Creativity',
      date: 'Apr 9, 2020',
    },
  ];

  return (
    <Box sx={{ py: 5, px: { xs: 3, md: 12 } }}>
      {/* Section Header */}
      <Box sx={{ textAlign: 'center', color: '#FFFFFF', my: 5 }}>
        <Typography
          variant="h6"
          sx={{ fontWeight: 'bold', mb: 2 }}
        >
          About latest tips, news and course
        </Typography>
        <Typography
          sx={{ color: '#D9ECFF' , fontSize:10}}
        >
          Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et<br />
          dolore magna aliqua. Quis ipsum ultrices
        </Typography>
      </Box>

      {/* News Cards */}
      <Grid
        container
        spacing={1}
        justifyContent="center"
        alignItems="center"
        sx={{ mx: 'auto' }}
      >
        {news.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                bgcolor: 'transparent',
                boxShadow: 'none',
                color: '#FFFFFF',
             
              }}
            >
              <CardMedia
                component="img"
                image={item.image}
                alt={item.title}
                sx={{
                  width: '85%',
                  borderRadius: '15px',
                  
                }}
              />
              <CardContent sx={{ px: 0, pt: 2 }}>
              <Typography
                  variant="body1"
                  sx={{
                    fontWeight: 'bold',
                    fontSize: '0.6rem',
                    mb: 1,
                    whiteSpace: 'normal', 
                    wordWrap: 'break-word', 
                    overflow: 'visible', 
                  }}
                >
                  {item.title}
                </Typography>

                <Typography
                  sx={{ fontSize: '0.5rem', color: '#D9ECFF' }}
                >
                  {item.date}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
