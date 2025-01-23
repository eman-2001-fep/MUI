import React from 'react';
import { Box, Typography, Grid, Card, CardMedia, CardContent } from '@mui/material';

import Card1 from '../images/card_1.png';
import Card2 from '../images/card_2.png';
import Card3 from '../images/card_3.png';
import Card4 from '../images/card_4.png';
import Card5 from '../images/card_5.png';
import Card6 from '../images/card_6.png';

const courses = [
  {
    image: Card1,
    title: 'Motion Graphics: Create a Nice Typography Animation',
    category: 'Web Development',
    students: '5,957 students',
    duration: '01h 49m',
    price: '$36',
  },
  {
    image: Card2,
    title: 'Motion Graphics: Create a Nice Typography Animation',
    category: 'Web Development',
    students: '5,957 students',
    duration: '01h 49m',
    price: '$36',
  },
  {
    image: Card3,
    title: 'Motion Graphics: Create a Nice Typography Animation',
    category: 'Web Development',
    students: '5,957 students',
    duration: '01h 49m',
    price: '$36',
  },
  {
    image: Card4,
    title: 'Motion Graphics: Create a Nice Typography Animation',
    category: 'Web Development',
    students: '5,957 students',
    duration: '01h 49m',
    price: '$36',
  },
  {
    image: Card5,
    title: 'Motion Graphics: Create a Nice Typography Animation',
    category: 'Web Development',
    students: '5,957 students',
    duration: '01h 49m',
    price: '$36',
  },
  {
    image: Card6,
    title: 'Motion Graphics: Create a Nice Typography Animation',
    category: 'Web Development',
    students: '5,957 students',
    duration: '01h 49m',
    price: '$36',
  },
];

export default function FeaturedCourses() {
  return (
    <Box sx={{ maxWidth: 1200, mx: 5, px: 4, py: 6 }}>
      <Typography
        align="center"
        sx={{ color: '#CBC2FF', fontWeight: 'bold', mb: 1,fontSize:15}}
      >
        Join Dominie At Best
      </Typography>
      <Typography
        variant="h5"
        align="center"
        sx={{ fontWeight: 'bold', mb: 4 }}
      >
        Featured Courses
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {courses.map((course, index) => (
          <Grid item xs={12} sm={4}  key={index}>
            <Card
              sx={{
                bgcolor: '#2D2752',
                color: 'white',
                borderRadius: 2,
                overflow: 'hidden',
                transition: 'transform 0.3s, box-shadow 0.3s',
                position: 'relative', // Ensure parent has relative position
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: 3,
                },
              }}
            >
              <CardMedia component="img" image={course.image} alt={course.title} sx={{width: '100%',
              height: '130px',}} />
              <Box
                sx={{
                  position: 'absolute',
                  top: '50%',
                  right: 10,
                  transform: 'translateY(-50%)',
                  bgcolor: '#473f81',
                  color: 'white',
                  width: 35,
                  height: 35,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '50%',
                  fontWeight: 'bold',
                  fontSize:10,
                  zIndex: 10, // Ensure it's on top of other elements
                }}
              >
                {course.price}
              </Box>
              <CardContent sx={{ p: 3 }}>
                <Typography
                  variant="body2"
                  sx={{ color: '#B7CBFA', fontWeight: 'bold', mb: 1 ,fontSize: '0.6rem',}}
                >
                  {course.category}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{ fontSize: '0.8rem', fontWeight: 'bold', mb: 2 }}
                >
                  {course.title}
                </Typography>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontSize: '0.6rem',
                    fontWeight: 'bold',
                    color: '#B7CBFA',
                  }}
                >
                  <span>{course.students}</span>
                  <span>{course.duration}</span>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
