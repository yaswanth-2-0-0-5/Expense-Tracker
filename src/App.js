// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import LoginForm from './components/LoginForm';
// import RegisterForm from './components/RegisterForm';
// import HomePage from './components/HomePage';
// import Navbar from './components/Navbar';
// import AboutPage from './components/AboutPage';
// import ContactPage from './components/ContactPage';
// import PrivacyPolicy from './components/PrivacyPolicy';
// import TermsConditions from './components/TermsConditions';
// import VideoPage from './components/VideoPage';
// import SubscriptionPage from './components/SubscriptionPage';
// import ProfilePage from './components/ProfilePage'; // Import ProfilePage



// function App() {
//   return (
//     <Router>
//       <Navbar />
//       <div>
//       <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/login" element={<LoginForm />} />
//           <Route path="/register" element={<RegisterForm />} />
//           <Route path="/about" element={<AboutPage />} />
//           <Route path="/contact" element={<ContactPage />} />
//           <Route path="/privacy-policy" element={<PrivacyPolicy />} />
//           <Route path="/terms-and-conditions" element={<TermsConditions />} />
//           <Route path="*" element={<h1>404 Page Not Found</h1>} />
//           <Route path="/subscribe" element={<SubscriptionPage />} />
//           <Route path="/new" element={<VideoPage/>} />
//           <Route path="/profile" element={<ProfilePage />} /> {/* Add this route */}
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;



import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import HomePage from './components/HomePage';
import Navbar from './components/Navbar';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsConditions from './components/TermsConditions';
import VideoPage from './components/VideoPage';
import SubscriptionPage from './components/SubscriptionPage';
import ProfilePage from './components/ProfilePage'; // Import ProfilePage
import AdminDashboard from './components/AdminDashboard';

// Higher-order component to conditionally render the Navbar
function AppContent() {
  const location = useLocation();
  
  // Define paths where Navbar should not be displayed
  const noNavbarPaths = ['/login', '/register'];

  return (
    <div>
      {!noNavbarPaths.includes(location.pathname) && <Navbar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsConditions />} />
        <Route path="/subscribe" element={<SubscriptionPage />} />
        <Route path="/new" element={<VideoPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="*" element={<h1>404 Page Not Found</h1>} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
