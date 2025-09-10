import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ user, onLogout }) => {
  const [showProfileCard, setShowProfileCard] = useState(false);

  const toggleProfileCard = () => {
    setShowProfileCard(!showProfileCard);
  };

  return (
    <nav className="navbar">
      <div className="nav-brand">
        <Link to="/home">EventEase</Link>
      </div>
      
      <ul className="nav-links">
        <li><NavLink to="/home" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink></li>
        <li><NavLink to="/services" className={({ isActive }) => isActive ? "active" : ""}>Services</NavLink></li>
        <li><NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>Contact</NavLink></li>
        <li><NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>About</NavLink></li>
        
        {user ? (
          <>
            {user.role === 'admin' && (
              <li><NavLink to="/admin-dashboard" className={({ isActive }) => isActive ? "active" : ""}>Dashboard</NavLink></li>
            )}
            <li className="profile-section">
              <button className="profile-btn" onClick={toggleProfileCard}>
                <span className="profile-icon">👤</span>
                <span>{user.email.split('@')[0]}</span>
              </button>
              
              {showProfileCard && (
                <div className="profile-card">
                  <div className="profile-header">
                    <div className="profile-avatar">
                      {user.email.charAt(0).toUpperCase()}
                    </div>
                    <div className="profile-info">
                      <h4>{user.email.split('@')[0]}</h4>
                      <p className="profile-email">{user.email}</p>
                      <span className={`role-badge ${user.role}`}>
                        {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
                      </span>
                    </div>
                  </div>
                  <hr />
                  <button className="logout-btn" onClick={onLogout}>
                    Logout
                  </button>
                </div>
              )}
            </li>
          </>
        ) : (
          <>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">Signup</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;