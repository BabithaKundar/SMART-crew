import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SearchProvider } from './context/SearchContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import MenuPage from './pages/MenuPage';

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
  return (
    <SearchProvider>
    <Router>
      <div className="app">
        <Navbar />
        <main className="content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/menu/:category" element={<CategoryPage />} />
            <Route path="/order" element={<OrderPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/contact-us" element={<ContactUsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/feedback" element={<FeedbackPage />} />
            <Route path="/signup" element={<SignupPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
    </SearchProvider>
  );
}

export default App;
