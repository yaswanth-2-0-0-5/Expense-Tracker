// import React from 'react';
// import { Link } from 'react-router-dom';
// import styles from './Navbar.module.css';


// function Navbar() {
//   return (
//     <nav className={styles.navbar}>
//       <div className={styles.left}>
//         {/* <img src="../assets/loggo.png" alt="Logo" className={styles.logo} /> */}
//         <img src="/assets/loggo.png" alt="Logo" className={styles.logo} />
//         <h1 className={styles.title}>Expense Tracker</h1>
//       </div>
//       <ul className={styles.navList}>
//         <li className={styles.navItem}><Link to="/" className={styles.navLink}>Home</Link></li>
//         <li className={styles.navItem}><Link to="/about" className={styles.navLink}>About</Link></li>
//         <li className={styles.navItem}><Link to="/contact" className={styles.navLink}>Contact</Link></li>
//         <li className={styles.navItem}><Link to="/login" className={styles.navLink}>Login</Link></li>
//         <li className={styles.navItem}><Link to="/register" className={styles.navLink}>Register</Link></li>
//         {/* <li className={styles.navItem}><Link to="/admin">Admin</Link></li> */}
//       </ul>
//     </nav>
//   );
// }

// export default Navbar;


import React, { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSignOutAlt, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './Navbar.module.css';
import logo from '../assets/loggo.png'; // Adjust the path according to your project structure

function Navbar() {
  const [accountDropdownOpen, setAccountDropdownOpen] = useState(false);
  const accountDropdownRef = useRef(null);
  const navigate = useNavigate();

  const toggleAccountDropdown = () => {
    setAccountDropdownOpen((prevOpen) => !prevOpen);
  };

  const handleLogout = () => {
    // Add your logout logic here
    console.log('Logged out');
    toast.success('Logged out successfully!');
    setAccountDropdownOpen(false);
    setTimeout(() => {
      navigate('/login');
    }, 2000); // Adjust the timeout as needed
  };

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.left}>
          <img src={logo} alt="Logo" className={styles.logo} />
          <h1 className={styles.title}>Expense Tracker</h1>
        </div>
        <ul className={styles.navList}>
          <li className={styles.navItem}><Link to="/" className={styles.navLink}>Home</Link></li>
          <li className={styles.navItem}><Link to="/about" className={styles.navLink}>About</Link></li>
          <li className={styles.navItem}><Link to="/contact" className={styles.navLink}>Contact</Link></li>
          <li className={styles.navItem}><Link to="/login" className={styles.navLink}>Login</Link></li>
          <li className={styles.navItem}><Link to="/register" className={styles.navLink}>Register</Link></li>
          <li className={styles.accountDropdown} ref={accountDropdownRef}>
            <FontAwesomeIcon icon={faUser} onClick={toggleAccountDropdown} />
            {accountDropdownOpen && (
              <div className={styles.dropdownMenu}>
                <Link to="/adlogin" onClick={() => setAccountDropdownOpen(false)}>
                  <FontAwesomeIcon icon={faUserCircle} /> Admin
                </Link>
                <div onClick={handleLogout} className={styles.dropdownItem}>
                  <FontAwesomeIcon icon={faSignOutAlt} /> Logout
                </div>
              </div>
            )}
          </li>
        </ul>
      </nav>
      <ToastContainer />
    </>
  );
}

export default Navbar;
