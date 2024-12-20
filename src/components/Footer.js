import React from 'react';
import './Footer.css';
import { FaInstagram, FaFacebook } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <p>© 2024 Happy Tummy. All Rights Reserved.</p>
      <div className="social-icons">
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="social-icon" />
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="social-icon" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
