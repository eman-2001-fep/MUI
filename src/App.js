import React from 'react';
import Header from './components/Header'; // Import the Header component
import Hero from './components/Hero'; // Import the Header component
import Partners from './components/Partners';
import FeaturedCourses from './components/FeaturedCourses';
import Categories from './components/Categories'; 
import Testimonial from './components/Testimonial'; 
import News from './components/News'; 


import './index.css';  // Import global styles here

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Partners/>
      <FeaturedCourses/>
      <Categories /> 
      <Testimonial/>
      <News/>
      </div>
  );
}

export default App;
