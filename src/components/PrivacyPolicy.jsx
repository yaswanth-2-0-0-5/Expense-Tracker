import React from 'react';
import styles from './PrivacyPolicy.module.css';

const PrivacyPolicy = () => {
  return (
    <div className={styles.privacyPolicy}>
      <div className={styles.backgroundOverlay}></div>
      <div className={styles.content}>
        <h1 className={`${styles.title} ${styles.fadeInDown}`}>Privacy Policy</h1>

        <section className={`${styles.section} ${styles.slideInLeft}`}>
          <h2 className={styles.sectionTitle}>1. Introduction</h2>
          <p className={styles.text}>
            Welcome to our expense tracker application. We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, and safeguard your data.
          </p>
        </section>

        <section className={`${styles.section} ${styles.slideInRight}`}>
          <h2 className={styles.sectionTitle}>2. Information We Collect</h2>
          <p className={styles.text}>
            We may collect personal information such as your name, email address, and financial data when you use our Service. This information is necessary to provide you with a better experience and to improve our services.
          </p>
        </section>

        <section className={`${styles.section} ${styles.slideInLeft}`}>
          <h2 className={styles.sectionTitle}>3. How We Use Your Information</h2>
          <p className={styles.text}>
            Your information is used to personalize your experience, communicate with you, and analyze usage patterns to improve our Service. We may also use your data to send you updates and promotional materials, but you can opt-out at any time.
          </p>
        </section>

        <section className={`${styles.section} ${styles.slideInRight}`}>
          <h2 className={styles.sectionTitle}>4. Data Security</h2>
          <p className={styles.text}>
            We take reasonable measures to protect your data from unauthorized access, disclosure, or misuse. However, no method of transmission over the internet or electronic storage is completely secure, so we cannot guarantee absolute security.
          </p>
        </section>

        <section className={`${styles.section} ${styles.slideInLeft}`}>
          <h2 className={styles.sectionTitle}>5. Your Rights</h2>
          <p className={styles.text}>
            You have the right to access, correct, or delete your personal information. You may also have the right to restrict or object to the processing of your data. If you have any concerns, please contact us to exercise these rights.
          </p>
        </section>

        <section className={`${styles.section} ${styles.slideInRight}`}>
          <h2 className={styles.sectionTitle}>6. Changes to This Privacy Policy</h2>
          <p className={styles.text}>
            We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this Policy periodically for any updates.
          </p>
        </section>

        <section className={`${styles.section} ${styles.slideInLeft}`}>
          <h2 className={styles.sectionTitle}>7. Contact Us</h2>
          <p className={styles.text}>
            If you have any questions about this Privacy Policy or our data practices, please contact us at [your email address].
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
