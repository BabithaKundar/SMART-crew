import React, { useState } from 'react';
import './AdminPage.css';


function AdminPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [newDish, setNewDish] = useState({
    name: '',
    price: '',
    description: '',
    image: '',
    spicy: false,
    glutenFree: false,
    vegetarian: false,
    nonVegetarian: false,
    category: '',
  });

  const categories = ['Starters', 'Main Course', 'Desserts', 'Beverages'];

  const handleLogin = () => {
    if (username === 'admin' && password === 'admin123') {
      setIsLoggedIn(true);
    } else {
      alert('Invalid credentials');
    }
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setNewDish((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleAddDish = () => {
    console.log('New dish added:', newDish);
    alert('Dish added successfully!');
    setNewDish({
      name: '',
      price: '',
      description: '',
      image: '',
      spicy: false,
      glutenFree: false,
      vegetarian: false,
      nonVegetarian: false,
      category: '',
    });
  };

  return (
    <div className="admin-page">
      {!isLoggedIn ? (
        <div>
          <h2>Admin Login</h2>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Login</button>
        </div>
      ) : (
        <div>
          <h2>Admin Dashboard</h2>
          <h3>Add New Dish</h3>
          <input
            type="text"
            name="name"
            placeholder="Dish Name"
            value={newDish.name}
            onChange={handleInputChange}
          />
          <input
            type="number"
            name="price"
            placeholder="Price"
            value={newDish.price}
            onChange={handleInputChange}
          />
          <textarea
            name="description"
            placeholder="Description"
            value={newDish.description}
            onChange={handleInputChange}
          ></textarea>
          <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={newDish.image}
            onChange={handleInputChange}
          />
          <div className="label">
            <label>
              <input
                type="checkbox"
                name="spicy"
                checked={newDish.spicy}
                onChange={handleInputChange}
              />{' '}
              Spicy
            </label>
            <label>
              <input
                type="checkbox"
                name="glutenFree"
                checked={newDish.glutenFree}
                onChange={handleInputChange}
              />{' '}
              Gluten Free
            </label>
            <label>
              <input
                type="checkbox"
                name="vegetarian"
                checked={newDish.vegetarian}
                onChange={handleInputChange}
              />{' '}
              Vegetarian
            </label>
            <label>
              <input
                type="checkbox"
                name="nonVegetarian"
                checked={newDish.nonVegetarian}
                onChange={handleInputChange}
              />{' '}
              Non-Vegetarian
            </label>
          </div>
          <select
            name="category"
            value={newDish.category}
            onChange={handleInputChange}
          >
            <option value="">Select Category</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
          <button onClick={handleAddDish}>Add Dish</button>
        </div>
      )}
    </div>
  );
}

export default AdminPage;
