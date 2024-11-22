import React from 'react';
import { SUBJECT_CATEGORIES } from '../../types/learning';
import styles from './LearningAnalytics.module.css';

function LearningAnalytics({ learningData }) {
  // 주간 학습 통계 계산
  const calculateWeeklyStats = () => {
    const now = new Date();
    const oneWeekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
    
    return Object.values(learningData.solvedProblems)
      .filter(problem => new Date(problem.timestamp) > oneWeekAgo)
      .reduce((acc, problem) => {
        acc.total++;
        if (problem.correct) acc.correct++;
        acc.points += problem.points || 0;
        return acc;
      }, { total: 0, correct: 0, points: 0 });
  };

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
      accuracy: stats.total > 0 ? Math.round((stats.correct / stats.total) * 100) : 0,
      total: stats.total,
      correct: stats.correct
    }));
  };

  const weeklyStats = calculateWeeklyStats();
  const categoryStats = calculateCategoryAccuracy();
  const weeklyAccuracy = weeklyStats.total > 0 
    ? Math.round((weeklyStats.correct / weeklyStats.total) * 100) 
    : 0;

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
    <div className={styles.analytics}>
      <h2 className={styles.title}>학습 진행 현황</h2>
      
      <div className={styles.container}>
        {/* 주간 학습 현황 섹션 */}
        <section className={styles.weeklySection}>
          <h3>이번 주 학습 요약</h3>
          <div className={styles.weeklyStats}>
            <div className={styles.statItem}>
              <span className={styles.label}>푼 문제</span>
              <span className={styles.value}>{weeklyStats.total}문제</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.label}>정답률</span>
              <span className={styles.value}>{weeklyAccuracy}%</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.label}>획득 점수</span>
              <span className={styles.value}>{weeklyStats.points}점</span>
            </div>
          </div>
        </section>

        {/* 카테고리별 학습 현황 섹션 */}
        <section className={styles.categorySection}>
          <h3>주제별 학습 현황</h3>
          <div className={styles.categoryStats}>
            {categoryStats.map(({ category, accuracy, total, correct }) => (
              <div key={category} className={styles.categoryItem}>
                <div className={styles.categoryHeader}>
                  <span className={styles.categoryName}>{categoryNames[category]}</span>
                  <span className={styles.accuracy}>{accuracy}%</span>
                </div>
                <div className={styles.progressBar}>
                  <div 
                    className={styles.progressFill}
                    style={{ width: `${accuracy}%` }}
                  />
                </div>
                <div className={styles.detailStats}>
                  <span>총 {total}문제 중 {correct}문제 정답</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default LearningAnalytics; 