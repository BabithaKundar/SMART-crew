import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../context/CartContext';  // Correct path

import './CategoryPage.css';

function CategoryPage() {
  const { category } = useParams();
  const { addToCart } = useContext(CartContext);

  const categoryItems = {
    starters: [
      { id: 1, name: 'Spring Rolls', price: 120, review: 4.5, img: '/img/spring-rolls.jpg' },
      { id: 2, name: 'Paneer Tikka', price: 150, review: 4.8, img: '/img/paneer-tikka.jpg' },
    ],
    // Add other categories...
  };

  const items = categoryItems[category.toLowerCase()] || [];

  return (
    <div className="category-page">
      <h1>{category.charAt(0).toUpperCase() + category.slice(1)}</h1>
      <div className="items">
        {items.length > 0 ? (
          items.map((item) => (
            <div key={item.id} className="item-card">
              <img src={item.img} alt={item.name} />
              <h3>{item.name}</h3>
              <p>₹{item.price}</p>
              <p>⭐ {item.review}</p>
              <button onClick={() => addToCart(item)}>Add to Cart</button>
            </div>
          ))
        ) : (
          <p>No items found for this category.</p>
        )}
      </div>
    </div>
  );
}

export default CategoryPage;
