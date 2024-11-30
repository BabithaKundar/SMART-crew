import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import './PopularItems.css';

function PopularItems() {
  const { addToCart } = useContext(CartContext);

  const popularItems = [
    { id: 1, name: 'Butter Chicken', price: 350, review: 4.8, img: 'https://www.jocooks.com/wp-content/uploads/2019/07/instant-pot-butter-chicken-1-4.jpg' },
    { id: 2, name: 'Paneer Tikka', price: 300, review: 4.5, img: 'https://www.krumpli.co.uk/wp-content/uploads/2021/09/Paneer-Tikka-Kebabs-05.jpg' },
    { id: 3, name: 'Biryani', price: 300, review: 4.9, img: 'https://cdn.shortpixel.ai/client/q_lossy,ret_img,w_1200,h_1799/https://norecipes.com/wp-content/uploads/2017/05/chicken-biryani-12-1200x1799.jpg' },
    { id: 3, name: 'Veg Thali', price: 400, review: 5.0, img: 'https://media.istockphoto.com/id/1158578874/photo/indian-hindu-veg-thali-food-platter-selective-focus.jpg?s=170667a&w=0&k=20&c=Gv5P0ARukE4Eo9g-9OOQA5O4cJKS9lA3Teg5R3u_6UU=' },
    { id: 3, name: 'Italian Pizza', price: 250, review: 4.7, img: 'https://th.bing.com/th/id/OIP.97JNdcdByQ2QQmZLO7xIkgHaEK?rs=1&pid=ImgDetMain' },
  ];

  
  return ( 
    <div className="popular-items">
      
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
