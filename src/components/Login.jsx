import React, { useState } from 'react';
import '../App.css';

function Login({ onLoginSuccess }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Simple validation mock
    if (!username || !password) {
      setError('Please fill in all fields');
      return;
    }

    // Simulate Token Generation containing userId and role
    // In real apps, this is base64 encoded JSON (Header.Payload.Signature)
    const simulatedPayload = {
      userId: "usr_" + Math.floor(Math.random() * 1000),
      role: username.toLowerCase() === 'admin' ? 'Administrator' : 'Standard User'
    };
    
    const simulatedToken = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.${btoa(JSON.stringify(simulatedPayload))}.sig_mock_token`;

    // Store token securely in localStorage
    localStorage.setItem('authToken', simulatedToken);
    localStorage.setItem('userRole', simulatedPayload.role);

    // Pass role back to App component
    onLoginSuccess(simulatedPayload.role);
  };

  return (
    <div className="card">
      <h2>User Login</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label>Username (Type 'admin' for Admin role):</label>
          <input 
            type="text" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            placeholder="Enter username"
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            placeholder="Enter password"
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;