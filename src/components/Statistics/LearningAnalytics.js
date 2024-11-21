import React from 'react';
import styles from './LearningAnalytics.module.css';

function LearningAnalytics({ learningData }) {
  // 주간 학습 시간 계산
  const calculateWeeklyStudy = () => {
    const now = new Date();
    const oneWeekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
    
    return Object.values(learningData.solvedProblems).filter(problem => 
      new Date(problem.timestamp) > oneWeekAgo
    ).length;
  };

  // 과목별 정답률 계산
  const calculateSubjectAccuracy = () => {
    const subjects = {};
    
    Object.values(learningData.solvedProblems).forEach(problem => {
      const subject = problem.category || '기타';
      if (!subjects[subject]) {
        subjects[subject] = { total: 0, correct: 0 };
      }
      subjects[subject].total++;
      if (problem.correct) subjects[subject].correct++;
    });

    return Object.entries(subjects).map(([subject, data]) => ({
      subject,
      accuracy: Math.round((data.correct / data.total) * 100)
    }));
  };

  const weeklyProblems = calculateWeeklyStudy();
  const subjectAccuracy = calculateSubjectAccuracy();

  return (
    <div className={styles.analytics}>
      <div className={styles.weeklyStats}>
        <h3>주간 학습 현황</h3>
        <div className={styles.stat}>
          <span className={styles.label}>이번 주 푼 문제</span>
          <span className={styles.value}>{weeklyProblems}문제</span>
        </div>
        <div className={styles.stat}>
          <span className={styles.label}>연속 학습</span>
          <span className={styles.value}>{learningData.streakDays}일</span>
        </div>
      </div>

      <div className={styles.subjectStats}>
        <h3>과목별 정답률</h3>
        {subjectAccuracy.map(({ subject, accuracy }) => (
          <div key={subject} className={styles.subjectBar}>
            <span className={styles.subjectName}>{subject}</span>
            <div className={styles.progressBar}>
              <div 
                className={styles.progressFill}
                style={{ width: `${accuracy}%` }}
              >
                {accuracy}%
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LearningAnalytics; 