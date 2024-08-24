import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './AdminContactPage.css';

const AdminContactPage = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/contact/messages');
        setMessages(response.data);
      } catch (error) {
        console.error('Failed to fetch contact messages:', error);
      }
    };

    fetchMessages();
  }, []);

  return (
    <div className={styles.adminContactPage}>
      <h2>Contact Messages</h2>
      <table className={styles.messageTable}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody>
          {messages.map(message => (
            <tr key={message.id}>
              <td>{message.name}</td>
              <td>{message.email}</td>
              <td>{message.phone}</td>
              <td>{message.message}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminContactPage;
