import React from 'react';
import styles from './ProfilePage.module.css';


const ProfilePage = () => {
  return (
    <div className={styles.profileContainer}>
      <div className={styles.profileHeader}>
        <img
          src="https://via.placeholder.com/100"
          alt="Profile"
          className={styles.profilePicture}
        />
        <div className={styles.profileDetails}>
          <h2>John Doe</h2>
          <p>johndoe@example.com</p>
          <p>New York, USA</p>
        </div>
      </div>

      <div className={styles.section}>
        <h3>Account Settings</h3>
        <div className={styles.sectionContent}>
          <p><strong>Username:</strong> johndoe</p>
          <p><strong>Email:</strong> johndoe@example.com</p>
          <p><strong>Phone:</strong> +1 123 456 7890</p>
          <p><strong>Address:</strong> 123 Main Street, New York, NY 10001</p>
        </div>
      </div>

      <div className={styles.section}>
        <h3>Recent Activities</h3>
        <div className={styles.sectionContent}>
          <p>Logged in from a new device on 5th August 2024</p>
          <p>Updated profile picture on 1st August 2024</p>
          <p>Changed password on 25th July 2024</p>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
