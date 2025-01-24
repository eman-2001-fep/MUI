import React from 'react';
import Header from './components/Header'; 
import Hero from './components/Hero'; 
import Partners from './components/Partners';
import FeaturedCourses from './components/FeaturedCourses';
import Categories from './components/Categories'; 
import Testimonial from './components/Testimonial'; 
import News from './components/News'; 
import JoinUs from './components/JoinUs'; 
import Footer from './components/Footer'; 


import './index.css';  

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
      <JoinUs/>
      <Footer/>
      </div>
  );
}

export default App;
