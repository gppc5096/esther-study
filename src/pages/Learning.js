import React, { useState } from 'react';
import CategorySelector from '../components/Learning/CategorySelector';
import Problem from '../components/Learning/Problem';
import Progress from '../components/Common/Progress';
import { sampleProblems } from '../data/sampleProblems';
import { useLearning } from '../contexts/LearningContext';
import useRewards from '../hooks/useRewards';
import useSound from '../hooks/useSound';
import styles from './Learning.module.css';

function Learning() {
  const [selectedGrade, setSelectedGrade] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isStarted, setIsStarted] = useState(false);
  const { learningData, updateProgress } = useLearning();
  const { checkBadges, updatePerfectStreak } = useRewards();
  const { playSound } = useSound();

  const handleStart = () => {
    setIsStarted(true);
    playSound('BUTTON_CLICK');
  };

  const handleAnswer = (problemId, isCorrect, points) => {
    updateProgress(problemId, isCorrect, points);
    updatePerfectStreak(isCorrect);
    
    // 정답/오답 사운드 재생
    playSound(isCorrect ? 'CORRECT' : 'INCORRECT');
    
    // 새로운 배지 확인
    const earnedBadges = checkBadges(learningData);
    if (earnedBadges.length > 0) {
      playSound('BADGE_EARNED');
    }
  };

  const getCurrentProblems = () => {
    if (!selectedGrade || !selectedCategory) return [];
    return sampleProblems[selectedGrade]?.[selectedCategory] || [];
  };

  const calculateProgress = () => {
    const problems = getCurrentProblems();
    if (!problems.length) return { solved: 0, total: 0 };

    const solved = problems.filter(p => learningData.solvedProblems[p.id]).length;
    return { solved, total: problems.length };
  };

  if (!isStarted) {
    return (
      <div className={styles.container}>
        <h1 className={styles.header}>서현이의 수학 학습</h1>
        <div className={styles.startContent}>
          <p>오늘도 재미있게 수학을 공부해볼까요?</p>
          <button onClick={handleStart} className={styles.startButton}>
            시작하기
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>학습하기</h1>
      
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
              value={calculateProgress().solved}
              total={calculateProgress().total}
              label="학습 진행도"
            />
          </div>

          <div className={styles.problemsContainer}>
            {getCurrentProblems().map(problem => (
              <Problem
                key={problem.id}
                problem={problem}
                onAnswer={(isCorrect) => handleAnswer(problem.id, isCorrect, problem.points)}
                progress={learningData.solvedProblems[problem.id]}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Learning; 