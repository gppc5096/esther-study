import React, { useState, useCallback } from 'react';
import CategorySelector from '../components/Learning/CategorySelector';
import Problem from '../components/Learning/Problem';
import Progress from '../components/Common/Progress';
import Badge from '../components/Common/Badge';
import { sampleProblems } from '../data/sampleProblems';
import useLearningProgress from '../hooks/useLearningProgress';
import useRewards from '../hooks/useRewards';
import useSound from '../hooks/useSound';
import styles from './Learning.module.css';

const getBadge = (level) => {
  switch (level) {
    case 1:
      return '🌱 초보';
    case 2:
      return '🌿 중급';
    case 3:
      return '🌳 고급';
    default:
      return '🌱 초보';
  }
};

function Learning() {
  const [selectedGrade, setSelectedGrade] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [newBadges, setNewBadges] = useState([]);
  const { learningData, updateProgress } = useLearningProgress();
  const { rewards, checkBadges, updatePerfectStreak, calculateLevel } = useRewards();
  const { playSound } = useSound();

  const currentLevel = calculateLevel(learningData.totalScore);

  const handleAnswer = useCallback((problemId, isCorrect, points) => {
    updateProgress(problemId, isCorrect, points);
    updatePerfectStreak(isCorrect);
    
    const earnedBadges = checkBadges(learningData);
    if (earnedBadges.length > 0) {
      setNewBadges(earnedBadges);
      playSound('BADGE_EARNED');
      setTimeout(() => setNewBadges([]), 3000);
    }

    const prevLevel = calculateLevel(learningData.totalScore);
    const newLevel = calculateLevel(learningData.totalScore + (isCorrect ? points : 0));
    
    if (newLevel.level > prevLevel.level) {
      playSound('LEVEL_UP');
    }
  }, [learningData, updateProgress, updatePerfectStreak, checkBadges, calculateLevel, playSound]);

  const getCurrentProblems = useCallback(() => {
    if (!selectedGrade || !selectedCategory) return [];
    return sampleProblems[selectedGrade]?.[selectedCategory] || [];
  }, [selectedGrade, selectedCategory]);

  const calculateProgress = useCallback(() => {
    const problems = getCurrentProblems();
    if (!problems.length) return { solved: 0, correct: 0, total: 0 };

    const solved = problems.filter(p => learningData.solvedProblems[p.id]).length;
    const correct = problems.filter(p => learningData.solvedProblems[p.id]?.correct).length;

    return {
      solved,
      correct,
      total: problems.length
    };
  }, [getCurrentProblems, learningData.solvedProblems]);

  const progress = calculateProgress();

  return (
    <div className={styles.learning}>
      <h1>학습하기</h1>
      
      <div className={styles.levelInfo}>
        <div className={styles.levelIcon}>{currentLevel.icon}</div>
        <div className={styles.levelDetails}>
          <h3>{currentLevel.name}</h3>
          <p>레벨 {currentLevel.level}</p>
        </div>
      </div>

      {newBadges.length > 0 && (
        <div className={styles.badgeAlert}>
          {newBadges.map(badgeId => (
            <Badge
              key={badgeId}
              badge={getBadge(badgeId)}
              size="small"
              className={styles.newBadge}
            />
          ))}
        </div>
      )}
      
      <div className={styles.progressInfo}>
        <div className={styles.score}>
          총 점수: {learningData.totalScore}점
        </div>
        <div className={styles.streak}>
          {learningData.streakDays > 0 && (
            <span>🔥 {learningData.streakDays}일 연속 학습 중!</span>
          )}
        </div>
      </div>
      
      <CategorySelector
        selectedGrade={selectedGrade}
        selectedCategory={selectedCategory}
        onGradeChange={setSelectedGrade}
        onCategoryChange={setSelectedCategory}
      />
      
      {selectedGrade && selectedCategory && (
        <>
          <div className={styles.progressSection}>
            <Progress
              value={progress.solved}
              total={progress.total}
              label="학습 진행도"
              color="#4299e1"
            />
            <Progress
              value={progress.correct}
              total={progress.total}
              label="정답률"
              color="#48bb78"
            />
          </div>

          <div className={styles.problemsContainer}>
            {getCurrentProblems().map(problem => (
              <Problem
                key={problem.id}
                problem={problem}
                onAnswer={(isCorrect, points) => handleAnswer(problem.id, isCorrect, points)}
                progress={learningData.solvedProblems[problem.id]}
              />
            ))}
          </div>
        </>
      )}

      <div className={styles.rewardsSection}>
        <h2>획득한 배지</h2>
        <div className={styles.badgeGrid}>
          {rewards.badges.map(badgeId => (
            <Badge
              key={badgeId}
              badge={getBadge(badgeId)}
              size="medium"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Learning; 