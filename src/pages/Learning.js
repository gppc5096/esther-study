import React, { useState, useEffect, useCallback } from 'react';
import CategorySelector from '../components/Learning/CategorySelector';
import Problem from '../components/Learning/Problem';
import Progress from '../components/Common/Progress';
import { generateNewProblem } from '../utils/problemGenerator';
import { DIFFICULTY_LEVELS } from '../types/problems';
import { useLearning } from '../contexts/LearningContext';
import useRewards from '../hooks/useRewards';
import useSound from '../hooks/useSound';
import styles from './Learning.module.css';

function Learning() {
  const [selectedGrade, setSelectedGrade] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [currentProblem, setCurrentProblem] = useState(null);
  const [isStarted, setIsStarted] = useState(false);
  const [currentProblemIndex, setCurrentProblemIndex] = useState(0);
  const [currentProblems, setCurrentProblems] = useState([]);
  
  const { learningData, updateProgress } = useLearning();
  const { checkBadges, updatePerfectStreak } = useRewards();
  const { playSound } = useSound();

  // 난이도별로 5문제씩 생성하는 함수
  const generateProblemsSet = useCallback(() => {
    if (!selectedCategory) return [];

    const problems = [];
    const difficulties = [
      ...Array(5).fill(DIFFICULTY_LEVELS.EASY),
      ...Array(5).fill(DIFFICULTY_LEVELS.MEDIUM),
      ...Array(5).fill(DIFFICULTY_LEVELS.HARD)
    ];

    difficulties.forEach(difficulty => {
      const problem = generateNewProblem(selectedCategory, difficulty);
      if (problem) problems.push(problem);
    });

    return problems;
  }, [selectedCategory]);

  // 카테고리 선택 시 문제 세트 생성
  useEffect(() => {
    if (selectedCategory && isStarted) {
      const newProblems = generateProblemsSet();
      setCurrentProblems(newProblems);
      setCurrentProblemIndex(0);
      if (newProblems.length > 0) {
        setCurrentProblem(newProblems[0]);
      }
    }
  }, [selectedCategory, isStarted, generateProblemsSet]);

  const handleStart = () => {
    setIsStarted(true);
    playSound('BUTTON_CLICK');
  };

  const handleAnswer = (isCorrect, points) => {
    if (!currentProblem) return;

    // 현재 문제의 결과 저장
    updateProgress(currentProblem.id, isCorrect, points);
    updatePerfectStreak(isCorrect);
    
    playSound(isCorrect ? 'CORRECT' : 'INCORRECT');
    
    const earnedBadges = checkBadges(learningData);
    if (earnedBadges.length > 0) {
      playSound('BADGE_EARNED');
    }

    // 1.5초 후 다음 문제로 이동
    setTimeout(() => {
      const nextIndex = currentProblemIndex + 1;
      if (nextIndex < currentProblems.length) {
        setCurrentProblemIndex(nextIndex);
        setCurrentProblem(currentProblems[nextIndex]);
      } else {
        // 모든 문제를 다 풀었을 때
        alert('축하합니다! 모든 문제를 완료했습니다.');
        // 새로운 문제 세트 생성
        const newProblems = generateProblemsSet();
        setCurrentProblems(newProblems);
        setCurrentProblemIndex(0);
        setCurrentProblem(newProblems[0]);
      }
    }, 1500);
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

      {selectedGrade && selectedCategory && currentProblem && (
        <>
          <div className={styles.progressSection}>
            <Progress
              value={currentProblemIndex + 1}
              total={currentProblems.length}
              label={`진행도 (${currentProblemIndex + 1}/${currentProblems.length})`}
            />
          </div>

          <div className={styles.problemsContainer}>
            <Problem
              key={currentProblem.id}
              problem={currentProblem}
              onAnswer={handleAnswer}
              progress={learningData.solvedProblems[currentProblem.id]}
            />
          </div>
        </>
      )}
    </div>
  );
}

export default Learning; 