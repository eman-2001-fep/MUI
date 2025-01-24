import React from 'react';
import { Box, Typography, Grid,Button, Card, CardMedia, CardContent } from '@mui/material';

// Import images
import category1 from '../images/category_1.png';
import category2 from '../images/category_2.png';
import category3 from '../images/category_3.png';
import category4 from '../images/category_4.png';
import category5 from '../images/category_5.png';
import category6 from '../images/category_6.png';

const categories = [
  {
    image: category1,
    title: 'Digital Marketing',
    courses: '25 Courses',
  },
  {
    image: category2,
    title: 'Graphic Design',
    courses: '85 Courses',
  },
  {
    image: category3,
    title: 'Art & Humanities',
    courses: '76 Courses',
  },
  {
    image: category4,
    title: 'Personal Development',
    courses: '22 Courses',
  },
  {
    image: category5,
    title: 'IT and Software',
    courses: '110 Courses',
  },
  {
    image: category6,
    title: 'Web Development',
    courses: '16 Courses',
  },
];

export default function Categories() {
  return (
    <Box sx={{ my: 8, mx: 8 }}>
       {/* Button */}
       <Box sx={{ textAlign: 'center', mb: 5 }}>
        <Button
          variant="outlined"
          sx={{
            color: 'white',
            borderColor: 'white',
            borderRadius: '30px 0px 30px 0px',
            py: 1,
            px: 4,
            transition: 'background-color 0.3s',
            '&:hover': {
              bgcolor: 'rgba(148, 163, 184, 0.5)', // slate-400 equivalent
              borderColor: 'white',
            },
          }}
        >
          Learn More
        </Button>
      </Box>
      <Typography
        variant="h6"
        align="center"
        sx={{ fontWeight: 'bold', mb: 7 , mt: 5 }}
      >
        Top Categories
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {categories.map((category, index) => (
          <Grid item xs={12} sm={6} md={4} lg={4} key={index}>
          <Card
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 2,
                bgcolor: 'transparent',
                border: '1px solid rgba(255, 255, 255, 0.6)',
                borderRadius: 2,
                py: 2,
                px: 2,
                transition: 'transform 0.3s, box-shadow 0.3s',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: 3,
                },
              }}
            >
              <CardMedia
                component="img"
                image={category.image}
                alt={category.title}
                sx={{ width: 56, height: 40}}
              />
              <CardContent sx={{ textAlign: 'left', p: 0 }}>
                <Typography
                  sx={{ color: 'white', fontWeight: 'bold', mb: 0.5  , fontSize:15 , textWrap:'nowrap'}}
                >
                  {category.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: 'rgba(255, 255, 255, 0.6)' }}
                >
                  {category.courses}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
