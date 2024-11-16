import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from './RegisterForm.module.css';
import background from '../assets/back.jpg'; // Your background image path

function RegisterForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    mobileNumber: ''
  });
  
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(''); // Clear previous error message on form submission

    try {
      const response = await axios.post('http://localhost:8080/api/register', formData);
      if (response.status === 201) {
        // Registration successful, navigate to login page
        navigate('/login');
      }
    } catch (error) {
      const errMessage = error.response?.data || 'Registration failed. Please try again.';
      setErrorMessage(errMessage);
    }
  };

  return (
    <div className={styles.registerContainer}>
      <div className={styles.imageContainer}>
        <img src={background} alt="Background" className={styles.backgroundImage} />
      </div>
      <div className={styles.formContainer}>
        <h2>Create Account</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email ID"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="mobileNumber"
            placeholder="Mobile Number"
            value={formData.mobileNumber}
            onChange={handleChange}
            required
          />
          <button type="submit" className={styles.registerButton}>Register</button>
        </form>
        {errorMessage && <p className={styles.error}>{errorMessage}</p>}
        <div className={styles.loginRedirect}>
          Already have an account? <span onClick={() => navigate('/login')}>Log in</span>
        </div>
      </div>
    </div>
  );
}

export default RegisterForm;
