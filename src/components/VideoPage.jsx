// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import './VideoPage.css';

// const VideoPage = () => {
//   const navigate = useNavigate();

//   const handleExploreNow = () => {
//     navigate('/');
//   };

//   return (
//     <div className="video-page">
//       <video className="background-video" autoPlay muted loop>
//         <source src="./vid.mp4" type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>
//       <div className="overlay">
//         <div className="content-container">
//           <h1 className="title">Welcome to Expense Tracker</h1>
//           <p className="description">Manage your expenses efficiently with our powerful tracking tools.</p>
//           <button className="explore-button" onClick={handleExploreNow}>Explore Now</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VideoPage;


// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import './VideoPage.css';

// const VideoPage = () => {
//   const navigate = useNavigate();

//   const handleExploreNow = () => {
//     navigate('/');
//   };

//   const handleAdminAccess = () => {
//     navigate('/admin');
//   };

//   return (
//     <div className="video-page">
//       <video className="background-video" autoPlay muted loop>
//         <source src="./vid.mp4" type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>
//       <div className="overlay">
//         <div className="content-container">
//           <h1 className="title">Welcome to Expense Tracker</h1>
//           <p className="description">Manage your expenses efficiently with our powerful tracking tools.</p>
//           <button className="explore-button" onClick={handleExploreNow}>Explore Now</button>
//           {/* <button className="admin-button" onClick={handleAdminAccess}>Admin Access</button> */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VideoPage;



import React from 'react';
import { useNavigate } from 'react-router-dom';
import './VideoPage.css';

const VideoPage = () => {
  const navigate = useNavigate();

  const handleExploreNow = () => {
    navigate('/home'); // Navigate to the HomePage after clicking "Explore Now"
  };

  return (
    <div className="video-page">
      <video className="background-video" autoPlay muted loop>
        <source src="./vid.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="overlay">
        <div className="content-container">
          <h1 className="title">Welcome to Expense Tracker</h1>
          <p className="description">Manage your expenses efficiently with our powerful tracking tools.</p>
          <button className="explore-button" onClick={handleExploreNow}>Explore Now</button>
        </div>
      </div>
    </div>
  );
};

export default VideoPage;
