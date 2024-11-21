import { PROBLEM_TYPES, DIFFICULTY_LEVELS } from '../types/problems';
import { GRADE_LEVELS, SUBJECT_CATEGORIES } from '../types/learning';

export const sampleProblems = {
  [GRADE_LEVELS.GRADE_3]: {
    [SUBJECT_CATEGORIES.ARITHMETIC]: [
      {
        id: 'prob_3_arith_001',
        type: PROBLEM_TYPES.MULTIPLE_CHOICE,
        difficulty: DIFFICULTY_LEVELS.EASY,
        question: '다음 중 15 + 27의 답으로 알맞은 것은?',
        options: ['32', '42', '52', '62'],
        correctAnswer: '42',
        explanation: '15와 27을 더하면 42가 됩니다.',
        points: 10
      },
      {
        id: 'prob_3_arith_002',
        type: PROBLEM_TYPES.SHORT_ANSWER,
        difficulty: DIFFICULTY_LEVELS.MEDIUM,
        question: '84 ÷ 4 = ?',
        correctAnswer: '21',
        explanation: '84를 4로 나누면 21이 됩니다.',
        points: 15
      },
      {
        id: 'prob_3_arith_003',
        type: PROBLEM_TYPES.MULTIPLE_CHOICE,
        difficulty: DIFFICULTY_LEVELS.MEDIUM,
        question: '72 - 35 = ?',
        options: ['27', '37', '47', '57'],
        correctAnswer: '37',
        explanation: '72에서 35를 빼면 37이 됩니다.',
        points: 15
      }
    ],
    [SUBJECT_CATEGORIES.FRACTION]: [
      {
        id: 'prob_3_frac_001',
        type: PROBLEM_TYPES.MULTIPLE_CHOICE,
        difficulty: DIFFICULTY_LEVELS.EASY,
        question: '1/4 + 2/4 = ?',
        options: ['1/4', '2/4', '3/4', '4/4'],
        correctAnswer: '3/4',
        explanation: '같은 분모를 가진 분수의 덧셈은 분자만 더하면 됩니다.',
        points: 10
      },
      {
        id: 'prob_3_frac_002',
        type: PROBLEM_TYPES.MULTIPLE_CHOICE,
        difficulty: DIFFICULTY_LEVELS.MEDIUM,
        question: '다음 중 1/2와 같은 분수는?',
        options: ['2/3', '2/4', '3/6', '2/5'],
        correctAnswer: '2/4',
        explanation: '1/2 = 2/4 입니다. (분자와 분모에 같은 수를 곱하면 같은 크기의 분수가 됩니다)',
        points: 15
      }
    ],
    [SUBJECT_CATEGORIES.MEASUREMENT]: [
      {
        id: 'prob_3_meas_001',
        type: PROBLEM_TYPES.MULTIPLE_CHOICE,
        difficulty: DIFFICULTY_LEVELS.EASY,
        question: '1m는 몇 cm인가요?',
        options: ['10cm', '100cm', '1000cm', '10000cm'],
        correctAnswer: '100cm',
        explanation: '1m = 100cm입니다.',
        points: 10
      },
      {
        id: 'prob_3_meas_002',
        type: PROBLEM_TYPES.MULTIPLE_CHOICE,
        difficulty: DIFFICULTY_LEVELS.MEDIUM,
        question: '2kg 300g은 몇 g인가요?',
        options: ['230g', '2030g', '2300g', '23000g'],
        correctAnswer: '2300g',
        explanation: '1kg = 1000g이므로, 2kg = 2000g입니다. 2000g + 300g = 2300g',
        points: 15
      }
    ],
    [SUBJECT_CATEGORIES.STATISTICS]: [
      {
        id: 'prob_3_stat_001',
        type: PROBLEM_TYPES.MULTIPLE_CHOICE,
        difficulty: DIFFICULTY_LEVELS.EASY,
        question: '다음 수들의 평균을 구하세요: 2, 4, 6, 8',
        options: ['3', '4', '5', '6'],
        correctAnswer: '5',
        explanation: '(2 + 4 + 6 + 8) ÷ 4 = 20 ÷ 4 = 5',
        points: 10
      }
    ]
  },
  [GRADE_LEVELS.GRADE_4]: {
    [SUBJECT_CATEGORIES.DECIMAL]: [
      {
        id: 'prob_4_dec_001',
        type: PROBLEM_TYPES.MULTIPLE_CHOICE,
        difficulty: DIFFICULTY_LEVELS.EASY,
        question: '0.3 + 0.4 = ?',
        options: ['0.5', '0.6', '0.7', '0.8'],
        correctAnswer: '0.7',
        explanation: '0.3과 0.4를 더하면 0.7이 됩니다.',
        points: 10
      },
      {
        id: 'prob_4_dec_002',
        type: PROBLEM_TYPES.SHORT_ANSWER,
        difficulty: DIFFICULTY_LEVELS.MEDIUM,
        question: '1.5 × 2 = ?',
        correctAnswer: '3.0',
        explanation: '1.5의 2배는 3.0입니다.',
        points: 15
      }
    ],
    [SUBJECT_CATEGORIES.GEOMETRY]: [
      {
        id: 'prob_4_geo_001',
        type: PROBLEM_TYPES.MULTIPLE_CHOICE,
        difficulty: DIFFICULTY_LEVELS.MEDIUM,
        question: '정사각형의 한 변의 길이가 5cm일 때, 넓이는?',
        options: ['15cm²', '20cm²', '25cm²', '30cm²'],
        correctAnswer: '25cm²',
        explanation: '정사각형의 넓이는 한 변의 길이의 제곱입니다. 5 × 5 = 25',
        points: 15
      },
      {
        id: 'prob_4_geo_002',
        type: PROBLEM_TYPES.MULTIPLE_CHOICE,
        difficulty: DIFFICULTY_LEVELS.HARD,
        question: '직사각형의 가로가 6cm, 세로가 4cm일 때 둘레의 길이는?',
        options: ['10cm', '16cm', '20cm', '24cm'],
        correctAnswer: '20cm',
        explanation: '직사각형의 둘레는 (가로 + 세로) × 2입니다. (6 + 4) × 2 = 20',
        points: 20
      }
    ],
    [SUBJECT_CATEGORIES.MEASUREMENT]: [
      {
        id: 'prob_4_meas_001',
        type: PROBLEM_TYPES.MULTIPLE_CHOICE,
        difficulty: DIFFICULTY_LEVELS.MEDIUM,
        question: '3.5km는 몇 m인가요?',
        options: ['350m', '3500m', '35000m', '350000m'],
        correctAnswer: '3500m',
        explanation: '1km = 1000m이므로, 3.5km = 3500m입니다.',
        points: 15
      },
      {
        id: 'prob_4_meas_002',
        type: PROBLEM_TYPES.SHORT_ANSWER,
        difficulty: DIFFICULTY_LEVELS.HARD,
        question: '직사각형 모양의 운동장의 가로가 25m, 세로가 40m일 때, 운동장의 둘레를 구하세요. (단위: m)',
        correctAnswer: '130',
        explanation: '직사각형의 둘레 = (가로 + 세로) × 2 = (25 + 40) × 2 = 65 × 2 = 130m',
        points: 20
      }
    ],
    [SUBJECT_CATEGORIES.STATISTICS]: [
      {
        id: 'prob_4_stat_001',
        type: PROBLEM_TYPES.MULTIPLE_CHOICE,
        difficulty: DIFFICULTY_LEVELS.MEDIUM,
        question: '다음 수들의 중앙값을 구하세요: 3, 7, 8, 12, 15',
        options: ['7', '8', '9', '10'],
        correctAnswer: '8',
        explanation: '숫자들을 순서대로 나열했을 때 가운데 있는 수가 중앙값입니다.',
        points: 15
      },
      {
        id: 'prob_4_stat_002',
        type: PROBLEM_TYPES.MULTIPLE_CHOICE,
        difficulty: DIFFICULTY_LEVELS.HARD,
        question: '한 반 학생들의 키를 조사했더니 다음과 같습니다: 130cm가 2명, 135cm가 4명, 140cm가 3명일 때, 가장 많은 학생들의 키는?',
        options: ['130cm', '135cm', '140cm', '145cm'],
        correctAnswer: '135cm',
        explanation: '135cm인 학생이 4명으로 가장 많습니다. 이것을 최빈값이라고 합니다.',
        points: 20
      }
    ]
  }
}; 