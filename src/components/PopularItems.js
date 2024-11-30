import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import './PopularItems.css';

function PopularItems() {
  const { addToCart } = useContext(CartContext);

  const popularItems = [
    { id: 1, name: 'Butter Chicken', price: 350, review: 4.8, img: '/img/butter-chicken.jpg' },
    { id: 2, name: 'Paneer Tikka', price: 300, review: 4.5, img: '/img/paneer-tikka.jpg' },
    { id: 3, name: 'Biryani', price: 400, review: 4.9, img: '/img/biryani.jpg' },
  ];

  
  return (
    <div className="popular-items">
      <h2>Popular Items</h2>
      <div className="items-container">
        {popularItems.map((item) => (
          <div key={item.id} className="item-card">
            <img src={item.img} alt={item.name} />
            <h3>{item.name}</h3>
            <p>₹{item.price}</p>
            <p>⭐ {item.review}</p>
            <button onClick={() => {
              addToCart(item); // Add item to cart
              alert(`${item.name} has been added to the cart!`); // Show alert message
            }}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PopularItems;
