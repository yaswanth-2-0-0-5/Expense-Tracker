// import React, { useState } from 'react';
// import styles from './ContactPage.module.css';

// const ContactPage = () => {
//   const [notification, setNotification] = useState('');

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     setNotification('Message sent successfully!');

//     setTimeout(() => setNotification(''), 3000);
//   };

//   return (
//     <div className={styles.contactPage}>
//       <div className={styles.header}>
//         <h1>Contact Us</h1>
//       </div>
//       <div className={styles.contactContent}>
//         <div className={styles.contactForm}>
//           <h2>Get in Touch</h2>
//           <form onSubmit={handleSubmit}>
//             <input type="text" placeholder="Your Name" required />
//             <input type="email" placeholder="Your Email" required />
//             <input type="tel" placeholder="Your Phone Number" />
//             <textarea placeholder="Your Message" required></textarea>
//             <button type="submit">Send Message</button>
//           </form>
//         </div>
//         <div className={styles.mapContainer}>
//           <iframe
//             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.040874968479!2d-122.08424908443877!3d37.42199997982521!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fbb234f97df8f%3A0xd8a7e1ae8ed3ff0!2sGoogleplex!5e0!3m2!1sen!2sus!4v1632376656224!5m2!1sen!2sus"
//             title="Google Maps Location"
//             allowFullScreen=""
//             loading="lazy"
//           ></iframe>
//         </div>
//       </div>
//       <div className={styles.contactDetails}>
//         <h3>Our Contact Information</h3>
//         <p>Email: yaswanth2005v@example.com</p>
//         <p>Phone: +91 9489829460</p>
//         <p>Address: 123 Street, Coimbatore, India</p>
//       </div>
//       {notification && <div className={styles.notification}>{notification}</div>}
//     </div>
//   );
// };

// export default ContactPage;


import React, { useState } from 'react';
import styles from './ContactPage.module.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [notification, setNotification] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:8080/api/contact/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
    
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
    
      const result = await response.json();
      setNotification('Message sent successfully!');
    
      setTimeout(() => setNotification(''), 3000);
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      console.error('Fetch error:', error.message);
      setNotification('Failed to send message. Please try again.');
    }
    
    
  };

  return (
    <div className={styles.contactPage}>
      <div className={styles.header}>
        <h1>Contact Us</h1>
      </div>
      <div className={styles.contactContent}>
        <div className={styles.contactForm}>
          <h2>Get in Touch</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone Number"
              value={formData.phone}
              onChange={handleChange}
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
        <div className={styles.mapContainer}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.040874968479!2d-122.08424908443877!3d37.42199997982521!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fbb234f97df8f%3A0xd8a7e1ae8ed3ff0!2sGoogleplex!5e0!3m2!1sen!2sus!4v1632376656224!5m2!1sen!2sus"
            title="Google Maps Location"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <div className={styles.contactDetails}>
        <h3>Our Contact Information</h3>
        <p>Email: yaswanth2005v@example.com</p>
        <p>Phone: +91 9489829460</p>
        <p>Address: 123 Street, Coimbatore, India</p>
      </div>
      {notification && <div className={styles.notification}>{notification}</div>}
    </div>
  );
};

export default ContactPage;
