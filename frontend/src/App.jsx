import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import axios from "axios";
import { Toaster } from "react-hot-toast";
import HomePage from "./components/HomePage";
import ServicesPage from "./components/ServicesPage";
import ContactPage from "./components/ContactPage";
import AboutPage from "./components/AboutPage";
import Login from "./components/Login";
import Signup from "./components/Signup";
import AdminDashboard from "./components/AdminDashboard";
import "./App.css";

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      axios.get('http://localhost:4000/api/v1/auth/me', { headers: { Authorization: `Bearer ${token}` } })
       .then(response => setUser(response.data.user))
       .catch(() => localStorage.removeItem("token"));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  // Protected route component for admin-only access
  const AdminRoute = ({ children }) => {
    if (!user) return <Navigate to="/login" />;
    if (user.role !== 'admin') return <Navigate to="/home" />;
    return children;
  };

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/signup" element={<Signup setUser={setUser} />} />
        <Route path="/home" element={<HomePage user={user} onLogout={handleLogout} />} />
        <Route path="/services" element={<ServicesPage user={user} onLogout={handleLogout} />} />
        <Route path="/contact" element={<ContactPage user={user} onLogout={handleLogout} />} />
        <Route path="/about" element={<AboutPage user={user} onLogout={handleLogout} />} />
        <Route 
          path="/admin-dashboard" 
          element={
            <AdminRoute>
              <AdminDashboard user={user} onLogout={handleLogout} />
            </AdminRoute>
          } 
        />
        <Route path="/" element={user ? <Navigate to="/home" /> : <Navigate to="/login" />} />
      </Routes>
      <Toaster />
    </Router>
  );
};

export default App;