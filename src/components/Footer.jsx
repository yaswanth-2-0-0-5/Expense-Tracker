// Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css'; // Import the CSS module

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <h4>About Us</h4>
          <p>We strive to make managing your finances simple and intuitive. Our app is designed to provide you with valuable insights and tools to help you achieve your financial goals.</p>
        </div>
        <div className={styles.footerSection}>
          <h4>Quick Links</h4>
          <ul className={styles.quickLinks}>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact Us</a></li>
            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
            <li><Link to="/terms-and-conditions">Terms of Service</Link></li>
          </ul>
        </div>
        <div className={styles.footerSection}>
          <h4>Subscriptions</h4>
          <p>Unlock Premium Features<br/>Upgrade to our plans for advanced tools and insights.</p>
          <form className={styles.newsletterForm}>
            <input type="email" placeholder="Enter your email" required />
            <Link to="/subscribe" className={styles.loginButton}>Subscribe</Link>
          </form>
        </div>
        <div className={styles.footerSection}>
          <h4>Follow Us</h4>
          <div className={styles.socialMedia}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>Facebook</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>Twitter</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>Instagram</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>LinkedIn</a>
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>&copy; {new Date().getFullYear()} Expense Tracker. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
