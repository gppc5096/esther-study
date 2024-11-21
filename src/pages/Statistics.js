import React from 'react';
import { SUBJECT_CATEGORIES } from '../types/learning';
import useLearningProgress from '../hooks/useLearningProgress';
import styles from './Statistics.module.css';

function Statistics() {
  const { learningData } = useLearningProgress();

  const calculateStats = () => {
    const stats = {
      totalProblems: 0,
      correctProblems: 0,
      subjectStats: Object.keys(SUBJECT_CATEGORIES).reduce((acc, subject) => {
        acc[subject] = { total: 0, correct: 0 };
        return acc;
      }, {})
    };

    Object.entries(learningData.solvedProblems).forEach(([_, problem]) => {
      stats.totalProblems++;
      if (problem.correct) {
        stats.correctProblems++;
      }
    });

    return stats;
  };

  const stats = calculateStats();
  const accuracy = stats.totalProblems > 0 
    ? ((stats.correctProblems / stats.totalProblems) * 100).toFixed(1) 
    : 0;

  return (
    <div className={styles.statistics}>
      <h1>학습 통계</h1>

      <div className={styles.summary}>
        <div className={styles.statCard}>
          <h3>총 학습 점수</h3>
          <p className={styles.value}>{learningData.totalScore}점</p>
        </div>

        <div className={styles.statCard}>
          <h3>연속 학습</h3>
          <p className={styles.value}>{learningData.streakDays}일</p>
        </div>

        <div className={styles.statCard}>
          <h3>정답률</h3>
          <p className={styles.value}>{accuracy}%</p>
        </div>

        <div className={styles.statCard}>
          <h3>푼 문제 수</h3>
          <p className={styles.value}>{stats.totalProblems}개</p>
        </div>
      </div>

      <div className={styles.recentActivity}>
        <h2>최근 학습 활동</h2>
        <div className={styles.timeline}>
          {Object.entries(learningData.solvedProblems)
            .sort((a, b) => new Date(b[1].timestamp) - new Date(a[1].timestamp))
            .slice(0, 5)
            .map(([problemId, problem]) => (
              <div 
                key={problemId} 
                className={`${styles.activityItem} ${problem.correct ? styles.correct : styles.incorrect}`}
              >
                <div className={styles.activityTime}>
                  {new Date(problem.timestamp).toLocaleDateString()}
                </div>
                <div className={styles.activityStatus}>
                  {problem.correct ? '✅ 정답' : '❌ 오답'}
                </div>
              </div>
            ))}
        </div>
      </div>

      <div className={styles.encouragement}>
        <h2>할아버지의 응원 메시지</h2>
        <div className={styles.message}>
          {learningData.streakDays > 0 ? (
            <>
              <p>서현아, {learningData.streakDays}일 연속으로 열심히 공부하고 있구나!</p>
              <p>할아버지가 정말 자랑스럽다 ❤️</p>
            </>
          ) : (
            <p>서현아, 오늘도 열심히 공부해보자!</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Statistics; 