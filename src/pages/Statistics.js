import React from 'react';
import LearningChart from '../components/Statistics/LearningChart';
import useLearningProgress from '../hooks/useLearningProgress';
import useRewards from '../hooks/useRewards';
import styles from './Statistics.module.css';
import { calculateLevel } from '../utils/levelUtils';

function Statistics() {
  const { learningData } = useLearningProgress();
  const { rewards } = useRewards();
  const currentLevel = calculateLevel(learningData.totalScore);

  // 전체 통계 계산
  const totalStats = Object.values(learningData.solvedProblems).reduce(
    (acc, problem) => {
      acc.total++;
      if (problem.correct) acc.correct++;
      return acc;
    },
    { total: 0, correct: 0 }
  );

  const accuracy = totalStats.total > 0 
    ? Math.round((totalStats.correct / totalStats.total) * 100) 
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
          <h3>현재 레벨</h3>
          <p className={styles.value}>
            {currentLevel.icon} {currentLevel.name}
          </p>
        </div>

        <div className={styles.statCard}>
          <h3>연속 학습</h3>
          <p className={styles.value}>{learningData.streakDays}일</p>
        </div>

        <div className={styles.statCard}>
          <h3>전체 정답률</h3>
          <p className={styles.value}>{accuracy}%</p>
        </div>
      </div>

      <LearningChart learningData={learningData} />

      <div className={styles.achievements}>
        <h2>획득한 배지</h2>
        <div className={styles.badgeGrid}>
          {rewards.badges.map(badge => (
            <div key={badge.id} className={styles.badge}>
              <span className={styles.badgeIcon}>{badge.icon}</span>
              <div className={styles.badgeInfo}>
                <h4>{badge.name}</h4>
                <p>{badge.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Statistics; 