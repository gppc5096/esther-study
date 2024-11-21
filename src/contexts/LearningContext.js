import React, { createContext, useContext, useCallback } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const LearningContext = createContext();

export function LearningProvider({ children }) {
  const [learningData, setLearningData] = useLocalStorage('learning_progress', {
    totalScore: 0,
    solvedProblems: {},
    lastAccessed: null,
    streakDays: 0
  });

  const updateProgress = useCallback((problemId, isCorrect, points) => {
    setLearningData(prev => {
      const now = new Date();
      const lastDate = prev.lastAccessed ? new Date(prev.lastAccessed) : null;
      
      // 연속 학습일 계산
      let newStreakDays = prev.streakDays;
      if (lastDate) {
        const isNextDay = 
          now.getDate() - lastDate.getDate() === 1 &&
          now.getMonth() === lastDate.getMonth() &&
          now.getFullYear() === lastDate.getFullYear();
        
        if (isNextDay) {
          newStreakDays += 1;
        } else if (now.getDate() !== lastDate.getDate()) {
          newStreakDays = 1;
        }
      } else {
        newStreakDays = 1;
      }

      return {
        totalScore: isCorrect ? prev.totalScore + points : prev.totalScore,
        solvedProblems: {
          ...prev.solvedProblems,
          [problemId]: {
            solved: true,
            correct: isCorrect,
            timestamp: now.toISOString()
          }
        },
        lastAccessed: now.toISOString(),
        streakDays: newStreakDays
      };
    });
  }, [setLearningData]);

  const resetProgress = useCallback(() => {
    setLearningData({
      totalScore: 0,
      solvedProblems: {},
      lastAccessed: null,
      streakDays: 0
    });
  }, [setLearningData]);

  const value = {
    learningData,
    updateProgress,
    resetProgress
  };

  return (
    <LearningContext.Provider value={value}>
      {children}
    </LearningContext.Provider>
  );
}

export function useLearning() {
  const context = useContext(LearningContext);
  if (!context) {
    throw new Error('useLearning must be used within a LearningProvider');
  }
  return context;
} 