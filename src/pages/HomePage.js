import React from 'react';
import { Link } from 'react-router-dom';
import PopularItems from '../components/PopularItems';
import './HomePage.css';

function HomePage() {
  return (
    <div className="homepage">
      <section className="welcome">
        <h1>Welcome to Happy Tummy!</h1>
        <p>Discover our popular dishes loved by everyone.</p>
        <h2>Popular Items</h2>
      </section>
      <PopularItems />
      <Link to="/menu" className="view-menu-link">View Full Menu</Link>
    </div>
  );
}

export default HomePage;
