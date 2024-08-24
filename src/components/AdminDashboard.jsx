import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AdminDashboard.css';
import SuperadminImage from '../assets/ya.jpg';
import adminImage from '../assets/back.jpg';

const adminUsers = [
  {
    name: 'YASWANTH',
    role: 'Super Admin',
    email: 'yaswanth@gmail.com',
    photo: SuperadminImage,
  },
  {
    name: 'Sanjay',
    role: 'Admin',
    email: 'Sanjay@example.com',
    photo: adminImage,
  },
  // Add more admin users as needed
];

const AdminDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [users, setUsers] = useState([]);
  const [contactMessages, setContactMessages] = useState([]);
  const [activeSection, setActiveSection] = useState(''); // State to track active section (Users/Admin Users/Contact Reports)
  const [error, setError] = useState(null);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/users'); // Replace with your backend URL
      setUsers(response.data);
      setActiveSection('users'); // Set active section to 'users'
    } catch (error) {
      setError('Failed to fetch users');
    }
  };

  const fetchContactMessages = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/contact'); // Replace with your backend URL
      setContactMessages(response.data);
      setActiveSection('contactReports'); // Set active section to 'contactReports'
    } catch (error) {
      setError('Failed to fetch contact messages');
    }
  };

  const showAdminUsers = () => {
    setActiveSection('adminUsers'); // Set active section to 'adminUsers'
  };

  const formatLoginTime = (timestamp) => {
    if (!timestamp) return 'Never';
    const date = new Date(timestamp);
    return date.toLocaleString(); // Convert to normal date-time format
  };

  // Sort users by last login time in descending order
  const sortedUsers = users.sort((a, b) => {
    const timeA = new Date(a.lastLoginTime).getTime();
    const timeB = new Date(b.lastLoginTime).getTime();
    return timeB - timeA; // Descending order
  });

  return (
    <div className="admin-dashboard">
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <button onClick={toggleSidebar} className="toggle-button">
          ☰
        </button>
        <div className="sidebar-content">
          {/* Admin Users Section */}
          <div className="sidebar-item">
            <h2 onClick={showAdminUsers}>Admin Users</h2>
          </div>

          {/* Regular Users Section */}
          <div className="sidebar-item">
            <h2 onClick={fetchUsers}>Users</h2>
          </div>

          {/* Contact Reports Section */}
          <div className="sidebar-item">
            <h2 onClick={fetchContactMessages}>Contact Reports</h2>
          </div>
        </div>
      </div>

      <div className={`dashboard-container ${isSidebarOpen ? 'shifted' : ''}`}>
        <h1>Admin Dashboard</h1>

        {/* Conditionally render based on activeSection */}
        {activeSection === 'adminUsers' && (
          <div className="admin-users">
            {adminUsers.map((user, index) => (
              <div key={index} className="admin-user-card">
                <img src={user.photo} alt={user.name} className="admin-user-photo" />
                <div className="admin-user-info">
                  <h2>{user.name}</h2>
                  <p>{user.role}</p>
                  <p>{user.email}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeSection === 'users' && (
          <div className="regular-users">
            {error && <p>{error}</p>}
            {sortedUsers.length > 0 ? (
              <div className="user-list">
                {sortedUsers.map((user, index) => (
                  <div key={index} className="user-card">
                    <div className="user-info">
                      <h3>{user.username}</h3>
                      <p>{user.email}</p>
                      <p>Last Login Time: {formatLoginTime(user.lastLoginTime)}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p>No users available</p>
            )}
          </div>
        )}

        {activeSection === 'contactReports' && (
          <div className="contact-reports">
            {error && <p>{error}</p>}
            {contactMessages.length > 0 ? (
              <div className="contact-message-list">
                {contactMessages.map((message, index) => (
                  <div key={index} className="contact-message-card">
                    <h3>{message.name}</h3>
                    <p>Email: {message.email}</p>
                    <p>Phone: {message.phone}</p>
                    <p>Message: {message.message}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p>No contact messages available</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
