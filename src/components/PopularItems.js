import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import './PopularItems.css';

function PopularItems() {
  const { addToCart } = useContext(CartContext);
  const [selectedItem, setSelectedItem] = useState(null);

  const popularItems = [
    { id: 1, name: 'Butter Chicken', price: 350, review: 4.8, description: 'Rich and creamy butter chicken.', img: 'https://th.bing.com/th/id/OIP.RclwKeJLb0kn77xFUO2USAHaE8?rs=1&pid=ImgDetMain'  },
    { id: 2, name: 'Paneer Tikka', price: 300, review: 4.5, description: 'Delicious grilled paneer cubes.', img: 'https://www.krumpli.co.uk/wp-content/uploads/2021/09/Paneer-Tikka-Kebabs-05.jpg' },
    { id: 3, name: 'Biryani', price: 300, review: 4.9, description: 'Aromatic and flavorful biryani.', img: 'https://th.bing.com/th/id/OIP.0m_i2umfs514vjJ_T3djMQHaEK?rs=1&pid=ImgDetMain' },
    { id: 4, name: 'Veg Thali', price: 400, review: 5.0, description: 'Complete Indian veg meal.', img: 'https://th.bing.com/th/id/OIP.No0S6Oa-qAyHr0fDJgQ0wwHaEt?rs=1&pid=ImgDetMain' },
    { id: 5, name: 'Italian Pizza', price: 250, review: 4.7, description: 'Authentic Italian pizza.', img: 'https://th.bing.com/th/id/OIP.97JNdcdByQ2QQmZLO7xIkgHaEK?rs=1&pid=ImgDetMain' },
  ];

  const handleClick = (item) => {
    setSelectedItem(item);
  };

  const handleClose = () => {
    setSelectedItem(null);
  };

  return (
    <div className="popular-items">
     
      <div className="carousel">
        {popularItems.map((item) => (
          <div key={item.id} className="carousel-item">
            <img src={item.img} alt={item.name} onClick={() => handleClick(item)} />
            <div className="caption">
              <h3>{item.name}</h3>
              <p>₹{item.price}</p>
              <p>⭐ {item.review}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for Item Details */}
      {selectedItem && (
        <div className="item-modal">
          <div className="modal-content">
            <button className="close-button" onClick={handleClose}>✖</button>
            <img src={selectedItem.img} alt={selectedItem.name} />
            <h2>{selectedItem.name}</h2>
            <p>{selectedItem.description}</p>
            <p>Price: ₹{selectedItem.price}</p>
            <p>⭐ {selectedItem.review}</p>
            <button onClick={() => addToCart(selectedItem)}>Add to Cart</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default PopularItems;
