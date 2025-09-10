import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <p>&copy; 2025 EventEase. All rights reserved.</p>
      <div className="newsletter">
        <div className="input-group">
          <input type="email" placeholder="Enter your email" />
          <button>Subscribe</button>
        </div>
        <p>Stay updated with our latest events</p>
      </div>
    </footer>
  );
};

export default Footer;