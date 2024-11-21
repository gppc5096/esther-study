export const BADGE_TYPES = {
  STREAK: 'STREAK',
  SCORE: 'SCORE',
  PERFECT: 'PERFECT',
  SPEED: 'SPEED'
};

export const BADGES = {
  [BADGE_TYPES.STREAK]: [
    {
      id: 'streak_3',
      name: '3일 연속 학습',
      description: '3일 연속으로 학습했어요!',
      condition: (data) => data.streakDays >= 3,
      icon: '🔥'
    },
    {
      id: 'streak_7',
      name: '7일 연속 학습',
      description: '일주일 동안 꾸준히 학습했어요!',
      condition: (data) => data.streakDays >= 7,
      icon: '🌟'
    }
  ],
  [BADGE_TYPES.SCORE]: [
    {
      id: 'score_100',
      name: '100점 달성',
      description: '총점 100점을 달성했어요!',
      condition: (data) => data.totalScore >= 100,
      icon: '🏆'
    },
    {
      id: 'score_500',
      name: '500점 달성',
      description: '총점 500점을 달성했어요!',
      condition: (data) => data.totalScore >= 500,
      icon: '👑'
    }
  ],
  [BADGE_TYPES.PERFECT]: [
    {
      id: 'perfect_5',
      name: '완벽한 학습',
      description: '5문제를 연속으로 맞혔어요!',
      condition: (data) => data.perfectStreak >= 5,
      icon: '⭐'
    }
  ]
};

export const LEVELS = [
  { level: 1, name: '수학 새싹', minScore: 0, icon: '🌱' },
  { level: 2, name: '수학 꽃봉오리', minScore: 100, icon: '🌿' },
  { level: 3, name: '수학 나무', minScore: 300, icon: '🌳' },
  { level: 4, name: '수학 달인', minScore: 600, icon: '🎓' },
  { level: 5, name: '수학 천재', minScore: 1000, icon: '🧠' }
];

export const calculateLevel = (score) => {
  for (let i = LEVELS.length - 1; i >= 0; i--) {
    if (score >= LEVELS[i].minScore) {
      return LEVELS[i];
    }
  }
  return LEVELS[0];
}; 