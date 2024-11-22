import React, { memo } from 'react';
import styles from './Badge.module.css';

const Badge = memo(function Badge({ 
  badge, 
  isLocked = false,
  progress = 0,
  size = 'medium' 
}) {
  return (
    <div className={`${styles.badge} ${styles[size]} ${isLocked ? styles.locked : ''}`}>
      <div className={styles.badgeContent}>
        <div className={styles.iconSection}>
          <div className={styles.icon}>{badge.icon}</div>
          {isLocked && <div className={styles.lockIcon}>🔒</div>}
        </div>
        
        <div className={styles.infoSection}>
          <div className={styles.mainInfo}>
            <h3 className={styles.name}>{badge.name}</h3>
            <p className={styles.description}>{badge.description}</p>
          </div>
          
          <div className={styles.detailsSection}>
            <div className={styles.condition}>
              <span className={styles.label}>획득 조건:</span>
              <span className={styles.value}>{badge.condition}</span>
            </div>
            
            {isLocked && progress > 0 && (
              <div className={styles.progressSection}>
                <div className={styles.progressLabel}>
                  <span>진행 상황: {progress}% 달성</span>
                </div>
                <div className={styles.progressBar}>
                  <div 
                    className={styles.progressFill} 
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <p className={styles.nextStep}>
                  다음 단계까지 {100 - progress}% 남았습니다
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
});

export default Badge; 