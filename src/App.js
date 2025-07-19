import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Signup from './pages/Signup';
import Login from './pages/Login';
import PasswordManager from './pages/PasswordManager';
import Home from './pages/Home'; // Make sure Home.js exists
import './pages/Login.css'; // Shared styling

function App() {
  return (
    <Router>
      <div className="auth-container">
        <nav style={{ marginBottom: '20px' }}>
          <Link to="/" style={{ marginRight: '10px' }}>Home</Link>
          <Link to="/signup" style={{ marginRight: '10px' }}>Signup</Link>
          <Link to="/login" style={{ marginRight: '10px' }}>Login</Link>
          <Link to="/passwords">Password Manager</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/passwords" element={<PasswordManager />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
