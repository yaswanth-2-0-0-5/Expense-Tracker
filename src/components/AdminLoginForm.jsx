import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './AdminLogin.module.css';
import backgroundImage from '../assets/back.jpg'; // Import the image

const AdminLoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    const newErrors = {};

    if (!username) {
      newErrors.username = "Username is required";
    } else if (username.length < 8) {
      newErrors.username = "Username must be at least 4 characters long";
    }

    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      if (username === "yaswanth" && password === "yasuuu") {
        navigate("/admin");
      } else {
        alert("Invalid username or password.");
      }
    }
  };

  return (
    <div
      className={styles.loginPage}
      style={{ backgroundImage: `url(${backgroundImage})` }} // Apply the background image
    >
      <div className={styles.overlay}></div>
      <div className={styles.loginContainer}>
        <h2>Admin Login</h2>
        <form onSubmit={handleSubmit} className={styles.loginForm}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          {errors.username && <p className={styles.error}>{errors.username}</p>}
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {errors.password && <p className={styles.error}>{errors.password}</p>}
          <button type="submit" className={styles.loginButton}>Login</button>
        </form>
        {/* Optional Social Login and Register Redirect sections */}
      </div>
    </div>
  );
};

export default AdminLoginForm;
