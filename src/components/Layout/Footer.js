import React from 'react';
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        서현이와 함께하는 수학나라 &copy; {new Date().getFullYear()}
      </p>
      <p>
        Made with ❤️ by Grandfather
      </p>
    </footer>
  );
}

export default Footer; 