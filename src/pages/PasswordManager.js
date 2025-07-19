import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // optional styling

function PasswordManager() {
  const [website, setWebsite] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [savedPasswords, setSavedPasswords] = useState([]);

  const navigate = useNavigate();
  const userEmail = JSON.parse(localStorage.getItem('user'))?.email;

  // Redirect to login if not logged in
  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn !== 'true') {
      navigate('/login');
    } else {
      // Load passwords for logged-in user
      const userPasswords = JSON.parse(localStorage.getItem(`passwords_${userEmail}`)) || [];
      setSavedPasswords(userPasswords);
    }
  }, [navigate, userEmail]);

  const generatePassword = () => {
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()';
    let newPassword = '';
    for (let i = 0; i < 12; i++) {
      newPassword += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    setPassword(newPassword);
  };

  const savePassword = () => {
    if (website && username && password) {
      const newEntry = { website, username, password };
      const updatedList = [...savedPasswords, newEntry];
      setSavedPasswords(updatedList);
      setWebsite('');
      setUsername('');
      setPassword('');

      // Save per user
      localStorage.setItem(`passwords_${userEmail}`, JSON.stringify(updatedList));
    }
  };

  return (
    <div className="form-container">
      <h2>Password Manager</h2>
      <input
        type="text"
        placeholder="Website"
        value={website}
        onChange={(e) => setWebsite(e.target.value)}
      />
      <input
        type="text"
        placeholder="Username or Email"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <div style={{ display: 'flex', gap: '10px' }}>
        <input
          type="text"
          placeholder="Generated Password"
          value={password}
          readOnly
        />
        <button onClick={generatePassword}>Generate</button>
      </div>
      <button onClick={savePassword}>Save Password</button>

      <h3>Saved Passwords</h3>
      <ul>
        {savedPasswords.map((entry, index) => (
          <li key={index}>
            <strong>{entry.website}</strong> - {entry.username} - {entry.password}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PasswordManager;
