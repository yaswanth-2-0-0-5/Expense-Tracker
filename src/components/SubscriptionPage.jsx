// import React from 'react';
// import './SubscriptionPage.css';

// const SubscriptionPage = () => {
//   return (
//     <div className="subscription-page">
//       <div className="header">
//         <h1>Join Our Premium Plan</h1>
//         <p>Unlock exclusive features and enhance your expense tracking experience.</p>
//       </div>
//       <div className="plans">
//         <div className="plan-card">
//           <h2>Basic Plan</h2>
//           <p>$5/month</p>
//           <ul>
//             <li>Track expenses</li>
//             <li>Monthly reports</li>
//             <li>Email support</li>
//           </ul>
//           <button className="subscribe-button">Subscribe Now</button>
//         </div>
//         <div className="plan-card">
//           <h2>Pro Plan</h2>
//           <p>$15/month</p>
//           <ul>
//             <li>Track expenses and income</li>
//             <li>Weekly and monthly reports</li>
//             <li>Priority email support</li>
//             <li>Export to CSV/PDF</li>
//           </ul>
//           <button className="subscribe-button">Subscribe Now</button>
//         </div>
//         <div className="plan-card">
//           <h2>Premium Plan</h2>
//           <p>$30/month</p>
//           <ul>
//             <li>All Pro Plan features</li>
//             <li>Multi-currency support</li>
//             <li>Customizable alerts</li>
//             <li>Integration with bank accounts</li>
//           </ul>
//           <button className="subscribe-button">Subscribe Now</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SubscriptionPage;


// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import './SubscriptionPage.css';

// const SubscriptionPage = () => {
//   const navigate = useNavigate();

//   const handleSubscribe = () => {
//     navigate('/login');
//   };

//   return (
//     <div className="subscription-page">
//       <div className="overlay"></div>
//       <div className="content">
//         <div className="header">
//           <h1>Join Our Premium Plan</h1>
//           <p>Unlock exclusive features and enhance your expense tracking experience.</p>
//         </div>
//         <div className="plans">
//           <div className="plan-card">
//             <h2>Basic Plan</h2>
//             <p>$5/month</p>
//             <ul>
//               <li>Track expenses</li>
//               <li>Monthly reports</li>
//               <li>Email support</li>
//             </ul>
//             <button className="subscribe-button" onClick={handleSubscribe}>Subscribe Now</button>
//           </div>
//           <div className="plan-card">
//             <h2>Pro Plan</h2>
//             <p>$15/month</p>
//             <ul>
//               <li>Track expenses and income</li>
//               <li>Weekly and monthly reports</li>
//               <li>Priority email support</li>
//               <li>Export to CSV/PDF</li>
//             </ul>
//             <button className="subscribe-button" onClick={handleSubscribe}>Subscribe Now</button>
//           </div>
//           <div className="plan-card">
//             <h2>Premium Plan</h2>
//             <p>$30/month</p>
//             <ul>
//               <li>All Pro Plan features</li>
//               <li>Multi-currency support</li>
//               <li>Customizable alerts</li>
//               <li>Integration with bank accounts</li>
//             </ul>
//             <button className="subscribe-button" onClick={handleSubscribe}>Subscribe Now</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SubscriptionPage;


import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SubscriptionPage.css';

const SubscriptionPage = () => {
  const navigate = useNavigate();

  const handleSubscribe = (plan) => {
    // Pass the selected plan to the login or payment page if necessary
    navigate('/login');
  };

  return (
    <div className="subscription-page">
      <div className="overlay"></div>
      <div className="content">
        <div className="header">
          <h1>Choose Your Plan</h1>
          <p>Select the plan that best suits your needs and start managing your expenses today.</p>
        </div>
        <div className="plans">
          <div className="plan-card">
            <h2>Free Plan</h2>
            <p>$0/month</p>
            <ul>
              <li>Track basic expenses</li>
              <li>Access to expense categories</li>
              <li>Email support</li>
            </ul>
            <button className="subscribe-button" onClick={() => handleSubscribe('Free')}>Get Started</button>
          </div>
          <div className="plan-card">
            <h2>Basic Plan</h2>
            <p>$10/month</p>
            <ul>
              <li>Track expenses and income</li>
              <li>Weekly and monthly reports</li>
              <li>Priority email support</li>
              {/* <li>Export to CSV</li> */}
            </ul>
            <button className="subscribe-button" onClick={() => handleSubscribe('Basic')}>Subscribe Now</button>
          </div>
          <div className="plan-card">
            <h2>Premium Plan</h2>
            <p>$20/month</p>
            <ul>
              <li>All Basic Plan features</li>
              <li>Multi-currency support</li>
              <li>Customizable alerts</li>
              <li>Export to CSV/Export to PDF</li>
              {/* <li>Personalized financial insights</li> */}
            </ul>
            <button className="subscribe-button" onClick={() => handleSubscribe('Premium')}>Subscribe Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPage;
