import React from 'react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#f8f9fa', padding: '20px', textAlign: 'center' }}>
      <div>
        <h3>EventAura</h3>
        <p>Your all-in-one event management solution.</p>
      </div>
      <div style={{ marginTop: '10px' }}>
        <a href="/about" style={{ margin: '0 10px' }}>About Us</a>
        <a href="/contact" style={{ margin: '0 10px' }}>Contact</a>
        <a href="/privacy" style={{ margin: '0 10px' }}>Privacy Policy</a>
      </div>
      <div style={{ marginTop: '20px' }}>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px' }}>Facebook</a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px' }}>Twitter</a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px' }}>Instagram</a>
      </div>
      <div style={{ marginTop: '20px', fontSize: '14px', color: '#6c757d' }}>
        © 2024 EventAura. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;