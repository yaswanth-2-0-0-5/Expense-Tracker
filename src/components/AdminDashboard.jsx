// src/AdminDashboard.jsx
import React from 'react';
import './AdminDashboard.css';


const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>
      <div className="dashboard-container">
        <div className="column">
          <h2>Users</h2>
          {/* Add content for Users */}
        </div>
        <div className="column">
          <h2>Free Plan Users</h2>
          {/* Add content for Free Plan Users */}
        </div>
        <div className="column">
          <h2>Basic Plan Users</h2>
          {/* Add content for Basic Plan Users */}
        </div>
        <div className="column">
          <h2>Premium Plan Users</h2>
          {/* Add content for Premium Plan Users */}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
