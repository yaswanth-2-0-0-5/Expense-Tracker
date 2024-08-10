import React from 'react';
import styles from './AboutPage.module.css';

const AboutPage = () => {
  return (
    <div className={styles.aboutPage}>
      <header className={styles.header}>
        <h1 className={styles.slideInDown}>About Us</h1>
      </header>
      <main className={styles.main}>
        <div className={styles.introMissionContainer}>
          <section className={`${styles.introSection} ${styles.zoomIn}`}>
            <h2 className={styles.fadeInLeft}>Welcome to Our Journey</h2>
            <p>We are passionate about helping you manage your expenses effectively and efficiently. Our story is one of innovation and dedication to financial well-being.</p>
          </section>
          <section className={`${styles.missionSection} ${styles.zoomIn}`}>
            <h2 className={styles.fadeInRight}>Our Mission</h2>
            <p>Our mission is to simplify your financial management with user-friendly tools and insightful data analysis. We strive to make tracking your expenses an easy and rewarding experience.</p>
          </section>
        </div>
        <section className={`${styles.valuesSection} ${styles.fadeInUp}`}>
          <h2 className={styles.scaleIn}>Our Values</h2>
          <div className={styles.valuesContent}>
            <div className={`${styles.valueCard} ${styles.flipCard}`}>
              <div className={`${styles.front} ${styles.cardFace}`}>
                <h3>Transparency</h3>
              </div>
              {/* <br></br><br></br><br></br> */}
              <div className={`${styles.back} ${styles.cardFace}`}>
                <p>We believe in clear, honest, and open communication with our users.</p>
              </div>
            </div>
            <br></br>
            <div className={`${styles.valueCard} ${styles.flipCard}`}>
              <div className={`${styles.front} ${styles.cardFace}`}>
                <h3>Innovation</h3>
              </div>
              <div className={`${styles.back} ${styles.cardFace}`}>
                <p>Our team is committed to continuous improvement and creative solutions.</p>
              </div>
            </div>
            <br></br>
            <div className={`${styles.valueCard} ${styles.flipCard}`}>
              <div className={`${styles.front} ${styles.cardFace}`}>
                <h3>Customer Focus</h3>
              </div>
              <div className={`${styles.back} ${styles.cardFace}`}>
                <p>Your satisfaction and success are our top priorities.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AboutPage;

