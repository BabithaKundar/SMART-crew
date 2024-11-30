import React from 'react';
import { Link } from 'react-router-dom';
import PopularItems from '../components/PopularItems';
import './HomePage.css';

function HomePage() {
  return (
    <div className="homepage">
      <section className="welcome">
        <h1>Welcome to Foodie's Delight!</h1>
        <p>Discover our popular dishes loved by everyone.</p>
      </section>
      <PopularItems />
      <Link to="/menu" className="view-menu-link">View Full Menu</Link>
    </div>
  );
}

export default HomePage;
