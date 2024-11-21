import React, { memo } from 'react';
import styles from './Badge.module.css';

const Badge = memo(function Badge({ badge, size = 'medium' }) {
  return (
    <div className={`${styles.badge} ${styles[size]}`} title={badge.description}>
      <div className={styles.icon}>{badge.icon}</div>
      <div className={styles.info}>
        <div className={styles.name}>{badge.name}</div>
        <div className={styles.description}>{badge.description}</div>
      </div>
    </div>
  );
});

export default Badge; 