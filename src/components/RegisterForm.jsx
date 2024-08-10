// // src/components/RegisterForm.jsx
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import styles from './RegisterForm.module.css';
// import background from '../assets/register.jpg'; // Your background image path
// import googleLogo from '../assets/google.png'; // Path to Google logo
// import facebookLogo from '../assets/facebook.png'; // Path to Facebook logo
// import twitterLogo from '../assets/twitter.png'; // Path to Twitter logo

// function RegisterForm() {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     username: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//     mobileNumber: ''
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle registration logic here
//     navigate('/'); // Redirect to Home Page after successful registration
//   };

//   return (
//     <div className={styles.registerContainer}>
//       <div className={styles.imageContainer}>
//         <img src={background} alt="Background" className={styles.backgroundImage} />
//       </div>
//       <div className={styles.formContainer}>
//         <h2>Create Account</h2>
//         <form onSubmit={handleSubmit}>
//           <input 
//             type="text" 
//             name="username" 
//             placeholder="Username" 
//             value={formData.username} 
//             onChange={handleChange} 
//             required 
//           />
//           <input 
//             type="email" 
//             name="email" 
//             placeholder="Email ID" 
//             value={formData.email} 
//             onChange={handleChange} 
//             required 
//           />
//           <input 
//             type="password" 
//             name="password" 
//             placeholder="Password" 
//             value={formData.password} 
//             onChange={handleChange} 
//             required 
//           />
//           <input 
//             type="password" 
//             name="confirmPassword" 
//             placeholder="Confirm Password" 
//             value={formData.confirmPassword} 
//             onChange={handleChange} 
//             required 
//           />
//           <input 
//             type="tel" 
//             name="mobileNumber" 
//             placeholder="Mobile Number" 
//             value={formData.mobileNumber} 
//             onChange={handleChange} 
//             required 
//           />
//           <button type="submit" className={styles.registerButton}>Register</button>
//         </form>
//         <div className={styles.socialLogin}>
//           <p>Or register with:</p>
//           <div className={styles.socialIcons}>
//             <img src={googleLogo} alt="Google" onClick={() => window.location.href = 'https://accounts.google.com'} />
//             <img src={facebookLogo} alt="Facebook" onClick={() => window.location.href = 'https://www.facebook.com'} />
//             <img src={twitterLogo} alt="Twitter" onClick={() => window.location.href = 'https://twitter.com'} />
//           </div>
//         </div>
//         <div className={styles.loginRedirect}>
//           Already have an account? <span onClick={() => navigate('/login')}>Log in</span>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default RegisterForm;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from './RegisterForm.module.css';
import background from '../assets/back.jpg'; // Your background image path
import googleLogo from '../assets/google.png'; // Path to Google logo
import facebookLogo from '../assets/facebook.png'; // Path to Facebook logo
import twitterLogo from '../assets/twitter.png'; // Path to Twitter logo

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

    try {
      const response = await axios.post('http://localhost:8080/api/register', formData);
      if (response.status === 200) {
        // Registration successful, navigate to login page
        navigate('/login');
      }
    } catch (error) {
      // Handle registration failure
      setErrorMessage(error.response?.data || 'Registration failed. Please try again.');
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
        <div className={styles.socialLogin}>
          <p>Or register with:</p>
          <div className={styles.socialIcons}>
            <img src={googleLogo} alt="Google" onClick={() => window.location.href = 'https://accounts.google.com'} />
            <img src={facebookLogo} alt="Facebook" onClick={() => window.location.href = 'https://www.facebook.com'} />
            <img src={twitterLogo} alt="Twitter" onClick={() => window.location.href = 'https://twitter.com'} />
          </div>
        </div>
        <div className={styles.loginRedirect}>
          Already have an account? <span onClick={() => navigate('/login')}>Log in</span>
        </div>
      </div>
    </div>
  );
}

export default RegisterForm;

