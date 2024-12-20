// src/pages/HomePage.js
import React from 'react';
import BannerCarousel from '../components/BannerCarousel'; // Correct path
import PopularItems from '../components/PopularItems';
import './HomePage.css';

function HomePage() {
  return (
    <div className="homepage">
       <section className="welcome">
        <h1>Welcome to Happy Tummy!</h1>
        <p>Discover our popular dishes loved by everyone.</p>
        <h2></h2>
      </section>
      {/* Banner Carousel */}
      <BannerCarousel />
      
      {/* Popular Items Section */}
      <h2>Popular Items</h2>
     
      <PopularItems />
    </div>
  );
}

export default HomePage;
