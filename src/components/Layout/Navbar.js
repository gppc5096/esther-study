import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBook, faEnvelope, faChartBar, faCog } from '@fortawesome/free-solid-svg-icons';
import styles from './Navbar.module.css';

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link to="/">서현이의 수학나라</Link>
      </div>
      <ul className={styles.navLinks}>
        <li>
          <Link to="/">
            <FontAwesomeIcon icon={faHome} /> 홈
          </Link>
        </li>
        <li>
          <Link to="/learning">
            <FontAwesomeIcon icon={faBook} /> 학습하기
          </Link>
        </li>
        <li>
          <Link to="/statistics">
            <FontAwesomeIcon icon={faChartBar} /> 통계
          </Link>
        </li>
        <li>
          <Link to="/messages">
            <FontAwesomeIcon icon={faEnvelope} /> 메시지
          </Link>
        </li>
        <li>
          <Link to="/settings">
            <FontAwesomeIcon icon={faCog} /> 설정
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar; 