export const BADGE_TYPES = {
  BEGINNER: {
    id: 'beginner',
    name: '수학 여행 시작!',
    icon: '🌱',
    description: '첫 문제를 해결했어요',
    condition: '첫 번째 문제 해결'
  },
  EXPLORER: {
    id: 'explorer',
    name: '열심히 공부하는 중',
    icon: '🚀',
    description: '50문제 해결 달성',
    condition: '50문제 해결'
  },
  MASTER: {
    id: 'master',
    name: '수학 마스터',
    icon: '👑',
    description: '100문제 해결 달성',
    condition: '100문제 해결'
  },
  PERSISTENT_3: {
    id: 'persistent_3',
    name: '3일 연속 학습',
    icon: '🔥',
    description: '3일 연속으로 학습했어요',
    condition: '3일 연속 학습'
  },
  PERSISTENT_7: {
    id: 'persistent_7',
    name: '일주일 연속 학습',
    icon: '🌟',
    description: '7일 연속으로 학습했어요',
    condition: '7일 연속 학습'
  },
  ACCURACY_80: {
    id: 'accuracy_80',
    name: '정확한 계산왕',
    icon: '🎯',
    description: '정답률 80% 달성',
    condition: '정답률 80% 이상'
  },
  PERFECT_SOLVE: {
    id: 'perfect_solve',
    name: '완벽한 해결사',
    icon: '💫',
    description: '연속 5문제 만점 달성',
    condition: '연속 5문제 만점'
  },
  ARITHMETIC_MASTER: {
    id: 'arithmetic_master',
    name: '사칙연산의 달인',
    icon: '🧮',
    description: '사칙연산 문제 30개 해결',
    condition: '사칙연산 30문제 해결'
  },
  FRACTION_MASTER: {
    id: 'fraction_master',
    name: '분수의 달인',
    icon: '📊',
    description: '분수 문제 30개 해결',
    condition: '분수 30문제 해결'
  }
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