import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SearchProvider } from './context/SearchContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import MenuPage from './pages/MenuPage';
import AdminPage from './pages/AdminPage';
import OrderPage from './pages/OrderPage';
import CartPage from './pages/CartPage';
import ContactUsPage from './pages/ContactUsPage';
import CategoryPage from './pages/CategoryPage';
import AboutPage from './pages/AboutPage';
import AuthPage from './pages/AuthPage';
import ProfilePage from './pages/ProfilePage';
import FeedbackPage from './pages/FeedbackPage';
import SignupPage from './pages/SignupPage';
import './App.css';

function App() {
  // Define categories state and setCategories function
  const [categories, setCategories] = useState([
    {
      name: 'Starters',
      img: 'https://example.com/starters.jpg',
      items: [],
    },
    {
      name: 'Main Course',
      img: 'https://example.com/maincourse.jpg',
      items: [],
    },
    {
      name: 'Desserts',
      img: 'https://example.com/desserts.jpg',
      items: [],
    },
    {
      name: 'Beverages',
      img: 'https://example.com/beverages.jpg',
      items: [],
    },
  ]);

  // Function to add a dish to the correct category
  const addDish = (newDish) => {
    setCategories((prevCategories) => {
      return prevCategories.map((category) =>
        category.name === newDish.category
          ? { ...category, items: [...category.items, newDish] }
          : category
      );
    });
  };

  return (
    <SearchProvider>
      <Router>
        <div className="app">
          <Navbar />
          <main className="content">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route
                path="/menu"
                element={<MenuPage categories={categories} />}
              />
              <Route path="/menu/:category" element={<CategoryPage />} />
              <Route path="/order" element={<OrderPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/contact-us" element={<ContactUsPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/auth" element={<AuthPage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/feedback" element={<FeedbackPage />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route
                path="/admin"
                element={<AdminPage onAddDish={addDish} />}
              />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </SearchProvider>
  );
}

export default App;
