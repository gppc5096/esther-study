import React from 'react';
import { SUBJECT_CATEGORIES } from '../../types/learning';
import styles from './LearningChart.module.css';

function LearningChart({ learningData }) {
  // 카테고리별 정답률 계산
  const calculateCategoryAccuracy = () => {
    const categoryStats = {};
    
    Object.values(learningData.solvedProblems).forEach(problem => {
      if (!categoryStats[problem.category]) {
        categoryStats[problem.category] = { total: 0, correct: 0 };
      }
      categoryStats[problem.category].total++;
      if (problem.correct) {
        categoryStats[problem.category].correct++;
      }
    });

    return Object.entries(categoryStats).map(([category, stats]) => ({
      category,
      accuracy: stats.total > 0 ? Math.round((stats.correct / stats.total) * 100) : 0
    }));
  };

  const categoryAccuracy = calculateCategoryAccuracy();

  // 카테고리별 색상 매핑
  const categoryColors = {
    [SUBJECT_CATEGORIES.ARITHMETIC]: '#FF6B6B',  // 빨간색 계열
    [SUBJECT_CATEGORIES.FRACTION]: '#FFA94D',    // 주황색 계열
    [SUBJECT_CATEGORIES.DECIMAL]: '#FFD93D',     // 노란색 계열
    [SUBJECT_CATEGORIES.GEOMETRY]: '#9775FA',    // 보라색 계열
    [SUBJECT_CATEGORIES.MEASUREMENT]: '#FF8787',  // 분홍색 계열
    [SUBJECT_CATEGORIES.STATISTICS]: '#748FFC'    // 파란색 계열
  };

  // 카테고리 한글 이름 매핑
  const categoryNames = {
    [SUBJECT_CATEGORIES.ARITHMETIC]: '사칙연산',
    [SUBJECT_CATEGORIES.FRACTION]: '분수',
    [SUBJECT_CATEGORIES.DECIMAL]: '소수',
    [SUBJECT_CATEGORIES.GEOMETRY]: '도형',
    [SUBJECT_CATEGORIES.MEASUREMENT]: '측정',
    [SUBJECT_CATEGORIES.STATISTICS]: '통계'
  };

  return (
    <div className={styles.chartContainer}>
      <h3>카테고리별 정답률</h3>
      <div className={styles.chart}>
        {categoryAccuracy.map(({ category, accuracy }) => (
          <div key={category} className={styles.barContainer}>
            <div className={styles.barLabel}>
              {categoryNames[category]}
            </div>
            <div className={styles.barWrapper}>
              <div 
                className={styles.bar}
                style={{ 
                  width: `${accuracy}%`,
                  backgroundColor: categoryColors[category]
                }}
              >
                <span className={styles.barValue}>{accuracy}%</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.legend}>
        {Object.entries(categoryNames).map(([category, name]) => (
          <div key={category} className={styles.legendItem}>
            <span 
              className={styles.legendColor} 
              style={{ backgroundColor: categoryColors[category] }}
            />
            <span className={styles.legendLabel}>{name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LearningChart; 