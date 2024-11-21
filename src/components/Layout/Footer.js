import React from 'react';
import styles from './Footer.module.css'; // 스타일 파일이 있다면 임포트

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>© 2024 서현이와 함께 떠나는 수학나라 여행</p>
    </footer>
  );
};

export default Footer;