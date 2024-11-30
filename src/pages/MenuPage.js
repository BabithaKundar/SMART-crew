import React, { useState, useContext } from 'react';
import { CartContext } from '../context/CartContext'; // Ensure this import is correct
import './MenuPage.css';

function MenuPage() {
  const { addToCart } = useContext(CartContext);

  // Categories with images and items
  const categories = [
    {
      name: 'Starters',
      img: 'https://images.immediate.co.uk/production/volatile/sites/30/2016/11/deep-fried-brussels-d3d9a88.jpg?quality=45&resize=2000,1818',
      items: [
        { id: 1, name: 'Paneer Tikka', price: 300, review: 4.5, img: 'https://www.krumpli.co.uk/wp-content/uploads/2021/09/Paneer-Tikka-Kebabs-05.jpg' },
        { id: 2, name: 'Spring Rolls', price: 250, review: 4.2, img: 'https://www.connoisseurusveg.com/wp-content/uploads/2022/04/baked-spring-rolls-sq.jpg' },
        { id: 3, name: 'Paneer Tikka', price: 300, review: 4.5, img: 'https://www.krumpli.co.uk/wp-content/uploads/2021/09/Paneer-Tikka-Kebabs-05.jpg' },
        { id: 4, name: 'Spring Rolls', price: 250, review: 4.2, img: 'https://www.connoisseurusveg.com/wp-content/uploads/2022/04/baked-spring-rolls-sq.jpg' },],
    },
    {
      name: 'Main Course',
      img: 'https://sandinmysuitcase.com/wp-content/uploads/2020/04/Popular-Indian-Cuisine.jpg',
      items: [
        { id: 5, name: 'Butter Chicken', price: 350, review: 4.8, img: 'https://th.bing.com/th/id/OIP.tzG0D-E7C0rdoaIXJPdA2QHaHa?rs=1&pid=ImgDetMain' },
        { id: 6, name: 'Biryani', price: 400, review: 4.9, img: 'https://cdn.shortpixel.ai/client/q_lossy,ret_img,w_1200,h_1799/https://norecipes.com/wp-content/uploads/2017/05/chicken-biryani-12-1200x1799.jpg' },
        { id: 7, name: 'Butter Chicken', price: 350, review: 4.8, img: 'https://th.bing.com/th/id/OIP.tzG0D-E7C0rdoaIXJPdA2QHaHa?rs=1&pid=ImgDetMain' },
        { id: 8, name: 'Biryani', price: 400, review: 4.9, img: 'https://cdn.shortpixel.ai/client/q_lossy,ret_img,w_1200,h_1799/https://norecipes.com/wp-content/uploads/2017/05/chicken-biryani-12-1200x1799.jpg' },],
    },
    {
      name: 'Desserts',
      img: 'https://th.bing.com/th/id/R.0d0414d2f9d001a1bf5ccfcaf2adcfea?rik=ehjPN4VY8HGxmA&riu=http%3a%2f%2fcdn2.tmbi.com%2fTOH%2fImages%2fPhotos%2f37%2f1200x1200%2fexps21585_THCA153054D10_15_4b.jpg&ehk=5M7Rmj5N%2b1euVev28yydLi9ifFzDTvDeF8xsvsiDJjg%3d&risl=&pid=ImgRaw&r=0',
      items: [
        { id: 9, name: 'Cheese Cake', price: 250, review: 4.7, img: 'https://static.timesofisrael.com/blogs/uploads/2021/06/GettyImages-1205169550.jpg' },
        { id: 10, name: 'Chocolate Mousse', price: 200, review: 4.6, img: 'https://th.bing.com/th/id/OIP.1cxj7ciFc3cI18O3wump7QAAAA?rs=1&pid=ImgDetMain' },
        { id: 11, name: 'Cheese Cake', price: 250, review: 4.7, img: 'https://static.timesofisrael.com/blogs/uploads/2021/06/GettyImages-1205169550.jpg' },
        { id: 12, name: 'Chocolate Mousse', price: 200, review: 4.6, img: 'https://th.bing.com/th/id/OIP.1cxj7ciFc3cI18O3wump7QAAAA?rs=1&pid=ImgDetMain' },],
    },
    {
      name: 'Beverages',
      img: 'https://images.squarespace-cdn.com/content/v1/5fffb5be41e64f18218cdc10/91c2310a-25bc-4255-a6fb-6b9cce663b4b/IMG_1277.jpg?format=1500w',
      items: [
        { id: 13, name: 'Mango Lassi', price: 120, review: 4.4, img: 'https://th.bing.com/th/id/OIP.xpvyVy-U8LxqpDtCLZF2qAHaLH?rs=1&pid=ImgDetMain' },
        { id: 14, name: 'Watermelon juice', price: 50, review: 4.1, img: 'https://th.bing.com/th/id/OIP.O5FDx7b13AWZ5jEmJgy3IQAAAA?rs=1&pid=ImgDetMain' },
        { id: 15, name: 'Mango Lassi', price: 120, review: 4.4, img: 'https://th.bing.com/th/id/OIP.xpvyVy-U8LxqpDtCLZF2qAHaLH?rs=1&pid=ImgDetMain' },
        { id: 16, name: 'Watermelon juice', price: 50, review: 4.1, img: 'https://th.bing.com/th/id/OIP.O5FDx7b13AWZ5jEmJgy3IQAAAA?rs=1&pid=ImgDetMain' },],
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
          <h2>{selectedCategory.name}</h2>
          {selectedCategory.items.map((item) => (
            <div key={item.id} className="item-card">
              <img src={item.img} alt={item.name} />
              <h3>{item.name}</h3>
              <p>₹{item.price}</p>
              <p>⭐ {item.review}</p>
              <button onClick={() => {
                addToCart(item); // Add item to cart
                // alert(`${item.name} has been added to the cart!`); // Show alert
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
