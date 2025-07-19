import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'; // Optional: or use Home.css if you have one

function Home() {
  return (
    <div className="auth-container">
      <h1>Welcome to the Password Manager App</h1>
      <p>Please login or sign up to get started.</p>
      <div style={{ marginTop: '20px' }}>
        <Link to="/login" className="btn-link">Login</Link>
        {' '}|{' '}
        <Link to="/signup" className="btn-link">Signup</Link>
      </div>
    </div>
  );
}

export default Home;
