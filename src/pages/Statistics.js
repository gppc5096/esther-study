import React from 'react';
import LearningAnalytics from '../components/Statistics/LearningAnalytics';
import Badge from '../components/Common/Badge';
import { useLearning } from '../contexts/LearningContext';
import useRewards from '../hooks/useRewards';
import { calculateLevel } from '../utils/levelUtils';
import { BADGE_TYPES } from '../types/rewards';
import styles from './Statistics.module.css';

function Statistics() {
  const { learningData } = useLearning();
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

  // 표시할 뱃지 필터링 (특정 뱃지 제외)
  const filteredBadges = Object.values(BADGE_TYPES).filter(badge => 
    !['beginner', 'arithmetic_master', 'fraction_master'].includes(badge.id)
  );

  // 뱃지 진행 상황 계산 함수
  const calculateBadgeProgress = (badge) => {
    switch (badge.id) {
      case 'explorer':
        return Math.min((totalStats.total / 50) * 100, 100);
      case 'master':
        return Math.min((totalStats.total / 100) * 100, 100);
      case 'persistent_3':
        return Math.floor((learningData.streakDays / 3) * 100);
      case 'persistent_7':
        return Math.floor((learningData.streakDays / 7) * 100);
      case 'accuracy_80':
        return Math.min((accuracy / 80) * 100, 100);
      case 'perfect_solve':
        return Math.min((learningData.perfectStreak / 5) * 100, 100);
      default:
        return 0;
    }
  };

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

      <div className={styles.analysisSection}>
        <LearningAnalytics learningData={learningData} />
      </div>

      <div className={styles.achievements}>
        <h2>🌟 서현이의 특별한 도전 목표 🌟</h2>
        <p className={styles.achievementsDescription}>
          열심히 공부하면서 하나씩 도전해보세요!
        </p>
        <div className={styles.badgeGrid}>
          {filteredBadges.map(badge => {
            const isLocked = !rewards.badges.some(b => b.id === badge.id);
            const progress = calculateBadgeProgress(badge);
            
            return (
              <Badge
                key={badge.id}
                badge={badge}
                isLocked={isLocked}
                progress={progress}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Statistics; 