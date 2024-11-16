// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import styles from './LoginForm.module.css';

// import background from '../assets/background.jpg'; // Your background image path
// import googleLogo from '../assets/google.png'; // Path to Google logo
// import facebookLogo from '../assets/facebook.png'; // Path to Facebook logo
// import twitterLogo from '../assets/twitter.png'; // Path to Twitter logo

// function LoginPage() {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//   });
//   const [errorMessage, setErrorMessage] = useState('');

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post('http://localhost:8080/api/login', formData);
//       if (response.status === 200) {
//         // Login successful, navigate to the next page
//         navigate('/new');
//       }
//     } catch (error) {
//       // Handle login failure
//       setErrorMessage(error.response?.data || 'Login failed. Please try again.');
//     }
//   };

//   return (
//     <div className={styles.loginPage}>
//       <div className={styles.background}></div>
//       <div className={styles.overlay}></div>
//       <div className={styles.loginContainer}>
//         <h2>Login to Your Account</h2>
//         <br />
//         <form onSubmit={handleSubmit} className={styles.loginForm}>
//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
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
//           <button type="submit" className={styles.loginButton}>Login</button>
//         </form>
//         {errorMessage && <p className={styles.error}>{errorMessage}</p>}
//         <div className={styles.socialLogin}>
//           <p>Or login with:</p>
//           <div className={styles.socialIcons}>
//             <img src={googleLogo} alt="Google" onClick={() => window.location.href = 'https://accounts.google.com'} />
//             <img src={facebookLogo} alt="Facebook" onClick={() => window.location.href = 'https://www.facebook.com'} />
//             <img src={twitterLogo} alt="Twitter" onClick={() => window.location.href = 'https://twitter.com'} />
//           </div>
//         </div>
//         <div className={styles.registerRedirect}>
//           Don't have an account? <span onClick={() => navigate('/register')}>Register</span>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default LoginPage;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from './LoginForm.module.css';

import background from '../assets/background.jpg';
import googleLogo from '../assets/google.png';
import facebookLogo from '../assets/facebook.png';
import twitterLogo from '../assets/twitter.png';

function LoginPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/api/login', formData);
      if (response.status === 200) {
        navigate('/new'); // Navigate to the VideoPage after successful login
      }
    } catch (error) {
      setErrorMessage(error.response?.data || 'Login failed. Please try again.');
    }
  };

  return (
    <div className={styles.loginPage}>
      <div className={styles.background}></div>
      <div className={styles.overlay}></div>
      <div className={styles.loginContainer}>
        <h2>Login to Your Account</h2>
        <form onSubmit={handleSubmit} className={styles.loginForm}>
          <input
            type="email"
            name="email"
            placeholder="Email"
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
          <button type="submit" className={styles.loginButton}>Login</button>
        </form>
        {errorMessage && <p className={styles.error}>{errorMessage}</p>}
        <div className={styles.socialLogin}>
          <p>Or login with:</p>
          <div className={styles.socialIcons}>
            <img src={googleLogo} alt="Google" onClick={() => window.location.href = 'https://accounts.google.com'} />
            <img src={facebookLogo} alt="Facebook" onClick={() => window.location.href = 'https://www.facebook.com'} />
            <img src={twitterLogo} alt="Twitter" onClick={() => window.location.href = 'https://twitter.com'} />
          </div>
        </div>
        <div className={styles.registerRedirect}>
          Don't have an account? <span onClick={() => navigate('/register')}>Register</span>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
