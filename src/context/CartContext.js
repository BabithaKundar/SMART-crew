// import React, { createContext, useState } from 'react';

// export const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cart, setCart] = useState([]);

//   // Add to cart function
//   const addToCart = (item) => {
//     setCart((prevCart) => {
//       const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
//       if (existingItem) {
//         return prevCart.map((cartItem) =>
//           cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
//         );
//       } else {
//         const updatedCart = [...prevCart, { ...item, quantity: 1 }];
//         // Show an alert when item is added
//         alert(`${item.name} has been added to the cart!`);
//         return updatedCart;
//       }
//     });
//   };

//   // Remove from cart function
//   const removeFromCart = (itemId) => {
//     setCart((prevCart) => {
//       const updatedCart = prevCart.filter((cartItem) => cartItem.id !== itemId);
//       // Show an alert when item is removed
//       alert('Item has been removed from the cart!');
//       return updatedCart;
//     });
//   };

//   return (
//     <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// };
import React, { createContext, useState } from 'react';

// Create the CartContext
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]); // Define setCart here

  // Add to cart function
  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        );
      } else {
        const updatedCart = [...prevCart, { ...item, quantity: 1 }];
        // Show alert only for new items
        alert(`${item.name} has been added to the cart!`);
        return updatedCart;
      }
    });
  };

  // Remove from cart function
  const removeFromCart = (itemId) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter((cartItem) => cartItem.id !== itemId);
      // Show alert when item is removed
      alert('Item has been removed from the cart!');
      return updatedCart;
    });
  };

  // Return the context provider
  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

