// import React from 'react';
// import styles from './MiddleHome.module.css'; // Import the CSS module


// const MiddleHome = ({ handleLearnMoreClick }) => {
//   return (
//     <div className={styles.middleContent}>
//       <div className={styles.middleContentInner}>
//         <h2>Manage Your Expenses Smartly</h2>
//         <p>With our Expense Tracker, you can easily categorize and track your expenses, set budgets, and get insights into your spending habits.</p>
        
//         <div className={styles.features}>
//           <h3>Features:</h3>
//           <ul>
//             <li>Easy categorization of expenses</li>
//             <li>Real-time spending analytics</li>
//             <li>Budget tracking and alerts</li>
//             <li>Secure and private data handling</li>
//             <li>Customizable reports</li>
//           </ul>
//         </div>

//         <div className={styles.testimonials}>
//           <h3>What Our Users Say:</h3>
//           <div className={styles.testimonial}>
//             <p>"This app has transformed the way I manage my finances. It's simple and intuitive!"</p>
//             <span>- Alex J.</span>
//           </div>
//           <div className={styles.testimonial}>
//             <p>"A must-have tool for anyone looking to get their spending under control."</p>
//             <span>- Sarah K.</span>
//           </div>
//         </div>
//         <button className={styles.learnMoreButton} onClick={handleLearnMoreClick}>
//           Learn More
//         </button>
//       </div>
//     </div>
//   );
// };

// export default MiddleHome;


import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import styles from './MiddleHome.module.css'; // Import the CSS module

const MiddleHome = () => {
  const navigate = useNavigate(); // Initialize navigate

  const handleLearnMoreClick = () => {
    navigate('/about'); // Navigate to the About page
  };

  return (
    <div className={styles.middleContent}>
      <div className={styles.middleContentInner}>
        <h2>Manage Your Expenses Smartly</h2>
        <p>With our Expense Tracker, you can easily categorize and track your expenses, set budgets, and get insights into your spending habits.</p>
        
        <div className={styles.features}>
          <h3>Features:</h3>
          <ul>
            <li>Easy categorization of expenses</li>
            <li>Real-time spending analytics</li>
            <li>Budget tracking and alerts</li>
            <li>Secure and private data handling</li>
            <li>Customizable reports</li>
          </ul>
        </div>

        <div className={styles.testimonials}>
          <h3>What Our Users Say:</h3>
          <div className={styles.testimonial}>
            <p>"This app has transformed the way I manage my finances. It's simple and intuitive!"</p>
            <span>- Alex J.</span>
          </div>
          <div className={styles.testimonial}>
            <p>"A must-have tool for anyone looking to get their spending under control."</p>
            <span>- Sarah K.</span>
          </div>
        </div>
        <button className={styles.learnMoreButton} onClick={handleLearnMoreClick}>
          Learn More
        </button>
      </div>
    </div>
  );
};

export default MiddleHome;
