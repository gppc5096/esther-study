import React from 'react';
import { GRADE_LEVELS, SUBJECT_CATEGORIES } from '../../types/learning';
import styles from './CategorySelector.module.css';

function CategorySelector({ selectedGrade, selectedCategory, onGradeChange, onCategoryChange }) {
  return (
    <div className={styles.selector}>
      <div className={styles.gradeSelector}>
        <h3>학년 선택</h3>
        <div className={styles.buttons}>
          {Object.entries(GRADE_LEVELS).map(([key, value]) => (
            <button
              key={key}
              className={`${styles.button} ${selectedGrade === key ? styles.active : ''}`}
              onClick={() => onGradeChange(key)}
            >
              {value}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.categorySelector}>
        <h3>학습 주제 선택</h3>
        <div className={styles.buttons}>
          {Object.entries(SUBJECT_CATEGORIES).map(([key, value]) => (
            <button
              key={key}
              className={`${styles.button} ${selectedCategory === key ? styles.active : ''}`}
              onClick={() => onCategoryChange(key)}
            >
              {value}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CategorySelector; 