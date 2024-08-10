import React from 'react';
import { Link } from 'react-router-dom';
import styles from './TermsConditions.module.css';

const TermsAndConditions = () => {
  return (
    <div className={styles.container}>
      <div className={styles.backgroundOverlay}></div>
      <div className={styles.content}>
        <h1 className={`${styles.title} ${styles.fadeInDown}`}>Terms and Conditions</h1>

        <section className={`${styles.section} ${styles.zoomIn}`}>
          <h2>1. Introduction</h2>
          <p>Welcome to [Expense Tracker]. These terms and conditions outline the rules and regulations for the use of [Expense Tracker]'s Website and services, located at [Your Website URL]. By accessing or using our services, you agree to these terms and conditions in full.</p>
        </section>

        <section className={`${styles.section} ${styles.zoomIn}`}>
          <h2>2. Acceptance of Terms</h2>
          <p>By accessing our services, you accept these terms and conditions. If you do not agree to these terms, please refrain from using our services.</p>
        </section>

        <section className={`${styles.section} ${styles.zoomIn}`}>
          <h2>3. User Responsibilities</h2>
          <p>As a user, you agree to:</p>
          <ul>
            <li>Provide accurate and complete information for your account and transactions.</li>
            <li>Use the service in compliance with all applicable laws and regulations.</li>
            <li>Keep your login credentials secure and not share them with others.</li>
            <li>Refrain from using the service for any unlawful or fraudulent activities.</li>
          </ul>
        </section>

        <section className={`${styles.section} ${styles.zoomIn}`}>
          <h2>4. Data Security and Privacy</h2>
          <p>We prioritize your privacy and data security. Our <Link to="/privacy-policy" className={styles.link}>Privacy Policy</Link> details how we collect, use, and protect your personal information. However, we cannot guarantee absolute security and are not responsible for unauthorized access to your data due to circumstances beyond our control.</p>
        </section>

        <section className={`${styles.section} ${styles.zoomIn}`}>
          <h2>5. Accuracy of Information</h2>
          <p>We strive to provide accurate financial tracking and analysis. However, the accuracy of the information displayed on our platform depends on the data you provide. We are not responsible for any inaccuracies or errors resulting from incorrect or incomplete information entered by you.</p>
        </section>

        <section className={`${styles.section} ${styles.zoomIn}`}>
          <h2>6. Third-Party Services</h2>
          <p>Our service may include links to third-party websites or services. We do not endorse or take responsibility for these third-party services, their content, or their practices. Any transactions or interactions with third-party services are solely between you and the third party.</p>
        </section>

        <section className={`${styles.section} ${styles.zoomIn}`}>
          <h2>7. Limitation of Liability</h2>
          <p>To the maximum extent permitted by law, [Expense Tracker] shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, resulting from your use or inability to use the service.</p>
        </section>

        <section className={`${styles.section} ${styles.zoomIn}`}>
          <h2>8. Indemnification</h2>
          <p>You agree to indemnify and hold harmless [Expense Tracker], its affiliates, and their respective officers, directors, employees, and agents from any claims, liabilities, damages, losses, and expenses, including reasonable attorney's fees, arising out of or in any way connected with your use of the service or violation of these terms.</p>
        </section>

        <section className={`${styles.section} ${styles.zoomIn}`}>
          <h2>9. Modifications to Terms</h2>
          <p>We may update these terms from time to time to reflect changes in our services or applicable laws. You are encouraged to review these terms periodically. Continued use of our services after any changes indicates your acceptance of the new terms.</p>
        </section>

        <section className={`${styles.section} ${styles.zoomIn}`}>
          <h2>10. Governing Law</h2>
          <p>These terms and conditions are governed by and construed in accordance with the laws of [Your Jurisdiction]. Any disputes arising from or relating to these terms or the use of our services shall be resolved in the courts of [Your Jurisdiction].</p>
        </section>

        <section className={`${styles.section} ${styles.zoomIn}`}>
          <h2>11. Contact Information</h2>
          <p>If you have any questions or concerns about these terms, please contact us at [Your Contact Information].</p>
        </section>
      </div>
    </div>
  );
};

export default TermsAndConditions;
