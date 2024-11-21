import React from 'react';
import BackupRestore from '../components/Settings/BackupRestore';
import PrintSection from '../components/Settings/PrintSection';
import styles from './Settings.module.css';

function Settings() {
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
      </div>
    </div>
  );
}

export default Settings; 