import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './AdminPage.css';

function AdminPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/register');
        setUsers(response.data);
      } catch (error) {
        console.error('Failed to fetch users:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className={styles.adminContainer}>
      <h2>User Management</h2>
      <table className={styles.userTable}>
        <thead>
          <tr>
            <th>Username</th>
            <th>Email</th>
            <th>Mobile Number</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.mobileNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminPage;
