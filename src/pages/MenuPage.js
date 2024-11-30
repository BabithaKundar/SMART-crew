import React, { useState, useContext } from 'react';
import { CartContext } from '../context/CartContext'; // Ensure this import is correct
import './MenuPage.css';

function MenuPage() {
  const { addToCart } = useContext(CartContext);

  // Categories with images and items
  const categories = [
    {
      name: 'Starters',
      img: '/img/starters.jpg',
      items: [
        { id: 1, name: 'Paneer Tikka', price: 300, review: 4.5, img: '/img/paneer-tikka.jpg' },
        { id: 2, name: 'Spring Rolls', price: 250, review: 4.2, img: '/img/spring-rolls.jpg' },
      ],
    },
    {
      name: 'Main Course',
      img: '/img/main-course.jpg',
      items: [
        { id: 3, name: 'Butter Chicken', price: 350, review: 4.8, img: '/img/butter-chicken.jpg' },
        { id: 4, name: 'Biryani', price: 400, review: 4.9, img: '/img/biryani.jpg' },
      ],
    },
    {
      name: 'Desserts',
      img: '/img/desserts.jpg',
      items: [
        { id: 5, name: 'Cheese Cake', price: 250, review: 4.7, img: '/img/cheesecake.jpg' },
        { id: 6, name: 'Chocolate Mousse', price: 200, review: 4.6, img: '/img/chocolate-mousse.jpg' },
      ],
    },
    {
      name: 'Beverages',
      img: '/img/beverages.jpg',
      items: [
        { id: 7, name: 'Mango Lassi', price: 120, review: 4.4, img: '/img/mango-lassi.jpg' },
        { id: 8, name: 'Coca-Cola', price: 50, review: 4.1, img: '/img/coca-cola.jpg' },
      ],
    },
    // Add other categories here as needed
  ];

  // State to store the selected category's items
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <div className="menu-page">
      <h2>Menu</h2>
      
      {/* Scrollable categories bar */}
      <div className="categories-bar">
        {categories.map((category, index) => (
          <div 
            key={index} 
            className="category-box"
            onClick={() => setSelectedCategory(category)}
          >
            <img src={category.img} alt={category.name} className="category-img" />
            <p>{category.name}</p>
          </div>
        ))}
      </div>

      {/* Show items when a category is selected */}
      {selectedCategory && (
        <div className="items-container">
          <h3>{selectedCategory.name}</h3>
          {selectedCategory.items.map((item) => (
            <div key={item.id} className="item-card">
              <img src={item.img} alt={item.name} />
              <h3>{item.name}</h3>
              <p>₹{item.price}</p>
              <p>⭐ {item.review}</p>
              <button onClick={() => {
                addToCart(item); // Add item to cart
                alert(`${item.name} has been added to the cart!`); // Show alert
              }}>
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MenuPage;
