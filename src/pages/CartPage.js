import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext'; // Correct path
import './CartPage.css';

function CartPage() {
  const { cart, removeFromCart } = useContext(CartContext);

  // Calculate total price based on totalPrice field of each item (which includes customization)
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.totalPrice * item.quantity, 0);
  };

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      {cart.length > 0 ? (
        <div className="cart-items">
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.img} alt={item.name} />
              <div>
                <h3>{item.name}</h3>
                <p>₹{item.totalPrice} x {item.quantity}</p> {/* Display updated price */}
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            </div>
          ))}
          <h2>Total: ₹{calculateTotal()}</h2> {/* Display the total with updated prices */}
        </div>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
}

export default CartPage;
