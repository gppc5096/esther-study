import React from 'react';
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <p>서현이와 할아버지의 수학 여행 ❤️</p>
        <p className={styles.copyright}>© 2024 서현이의 수학나라. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer; 