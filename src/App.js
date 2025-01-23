import React from 'react';
import Header from './components/Header'; // Import the Header component
import Hero from './components/Hero'; // Import the Header component
import Partners from './components/Partners';
import FeaturedCourses from './components/FeaturedCourses';
import './index.css';  // Import global styles here

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Partners/>
      <FeaturedCourses/>
    </div>
  );
}

export default App;
