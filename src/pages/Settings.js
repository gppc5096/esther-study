import React from 'react';
import BackupRestore from '../components/Settings/BackupRestore';
import PrintSection from '../components/Settings/PrintSection';
import styles from './Settings.module.css';

function Settings() {
  const handleReset = () => {
    if (window.confirm('정말로 모든 데이터를 초기화하시겠습니까? 이 작업은 되돌릴 수 없습니다.')) {
      localStorage.clear();
      window.location.reload();
    }
  };

  return (
    <div className={styles.settings}>
      <h1>설정</h1>
      
      <div className={styles.settingsGrid}>
        <section className={styles.section}>
          <BackupRestore />
        </section>
        
        <section className={styles.section}>
          <PrintSection />
        </section>

        <section className={`${styles.section} ${styles.resetSection}`}>
          <h2>데이터 초기화</h2>
          <p>모든 학습 기록, 메시지, 설정을 초기화합니다.</p>
          <div className={styles.resetButtonContainer}>
            <button 
              className={styles.resetButton}
              onClick={handleReset}
            >
              모든 정보 초기화
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Settings; 