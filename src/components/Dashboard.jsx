import React from 'react';
import '../App.css';

function Dashboard({ role, onLogout }) {
  const token = localStorage.getItem('authToken');

  return (
    <div className="card">
      <h3>Protected Dashboard</h3>
      <p style={{ color: '#16a34a', fontWeight: 'bold' }}>✓ Access Granted: You are authenticated.</p>
      
      <div className="form-group">
        <label>Your Role:</label>
        <p style={{ fontSize: '16px', fontWeight: '600', color: '#2563eb' }}>{role || 'Standard User'}</p>
      </div>

      <div className="form-group">
        <label>Stored Simulated JWT Token:</label>
        <div className="token-box">{token}</div>
      </div>

      <button className="logout-btn" onClick={onLogout}>Logout</button>
    </div>
  );
}

export default Dashboard;