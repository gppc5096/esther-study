import { DIFFICULTY_LEVELS, PROBLEM_TYPES } from '../types/problems';
import { SUBJECT_CATEGORIES } from '../types/learning';

// 사칙연산 문제 생성 함수
const generateArithmeticProblem = (difficulty) => {
  switch (difficulty) {
    case DIFFICULTY_LEVELS.EASY:
      const operations = ['+', '-'];
      const op = operations[Math.floor(Math.random() * operations.length)];
      const num1 = Math.floor(Math.random() * 50) + 1;
      const num2 = Math.floor(Math.random() * 50) + 1;
      const answer = op === '+' ? num1 + num2 : num1 - num2;

      return {
        type: PROBLEM_TYPES.MULTIPLE_CHOICE,
        question: `${num1} ${op} ${num2} = ?`,
        options: [
          answer,
          answer + 1,
          answer - 1,
          answer + 2
        ].sort(() => Math.random() - 0.5).map(String),
        correctAnswer: String(answer),
        explanation: `${num1}${op}${num2}=${answer}입니다.`,
        points: 10,
        category: SUBJECT_CATEGORIES.ARITHMETIC
      };

    case DIFFICULTY_LEVELS.MEDIUM:
      const num3 = Math.floor(Math.random() * 100) + 50;
      const num4 = Math.floor(Math.random() * 20) + 1;
      const multiplyAnswer = num3 * num4;

      return {
        type: PROBLEM_TYPES.MULTIPLE_CHOICE,
        question: `${num3} × ${num4} = ?`,
        options: [
          multiplyAnswer,
          multiplyAnswer + num4,
          multiplyAnswer - num4,
          multiplyAnswer + (num4 * 2)
        ].sort(() => Math.random() - 0.5).map(String),
        correctAnswer: String(multiplyAnswer),
        explanation: `${num3}와 ${num4}를 곱하면 ${multiplyAnswer}입니다.`,
        points: 15,
        category: SUBJECT_CATEGORIES.ARITHMETIC
      };

    case DIFFICULTY_LEVELS.HARD:
      const num5 = Math.floor(Math.random() * 1000) + 100;
      const num6 = Math.floor(Math.random() * 10) + 2;
      const divideAnswer = Math.floor(num5 / num6);

      return {
        type: PROBLEM_TYPES.MULTIPLE_CHOICE,
        question: `${num5} ÷ ${num6} = ?`,
        options: [
          divideAnswer,
          divideAnswer + 1,
          divideAnswer - 1,
          divideAnswer + 2
        ].sort(() => Math.random() - 0.5).map(String),
        correctAnswer: String(divideAnswer),
        explanation: `${num5}를 ${num6}로 나누면 ${divideAnswer}입니다.`,
        points: 20,
        category: SUBJECT_CATEGORIES.ARITHMETIC
      };

    default:
      return null;
  }
};

// 분수 문제 생성 함수
const generateFractionProblem = (difficulty) => {
  switch (difficulty) {
    case DIFFICULTY_LEVELS.EASY:
      const denom1 = Math.floor(Math.random() * 5) + 2; // 2~6
      const num1 = Math.floor(Math.random() * (denom1 - 1)) + 1;
      const num2 = Math.floor(Math.random() * (denom1 - 1)) + 1;
      const sum = num1 + num2;

      return {
        type: PROBLEM_TYPES.MULTIPLE_CHOICE,
        question: `${num1}/${denom1} + ${num2}/${denom1} = ?`,
        options: [
          `${sum}/${denom1}`,
          `${sum + 1}/${denom1}`,
          `${sum - 1}/${denom1}`,
          `${sum}/${denom1 + 1}`
        ].sort(() => Math.random() - 0.5),
        correctAnswer: `${sum}/${denom1}`,
        explanation: `같은 분모의 분수는 분자끼리 더합니다. ${num1}/${denom1} + ${num2}/${denom1} = ${sum}/${denom1}`,
        points: 10
      };

    case DIFFICULTY_LEVELS.MEDIUM:
      const denom2 = Math.floor(Math.random() * 5) + 2;
      const whole = Math.floor(Math.random() * 3) + 1;
      const num3 = Math.floor(Math.random() * (denom2 - 1)) + 1;

      return {
        type: PROBLEM_TYPES.MULTIPLE_CHOICE,
        question: `${whole} + ${num3}/${denom2} = ?`,
        options: [
          `${whole * denom2 + num3}/${denom2}`,
          `${whole * denom2 + num3 + 1}/${denom2}`,
          `${whole * denom2 + num3 - 1}/${denom2}`,
          `${whole * denom2 + num3 + 2}/${denom2}`
        ].sort(() => Math.random() - 0.5),
        correctAnswer: `${whole * denom2 + num3}/${denom2}`,
        explanation: `자연수 ${whole}를 분수로 바꾸면 ${whole * denom2}/${denom2}입니다. 따라서 ${whole * denom2}/${denom2} + ${num3}/${denom2} = ${whole * denom2 + num3}/${denom2}`,
        points: 15
      };

    case DIFFICULTY_LEVELS.HARD:
      // 약분이 필요한 분수 문제
      const factors = [2, 3, 4, 5];
      const factor = factors[Math.floor(Math.random() * factors.length)];
      const simplifiedNum = Math.floor(Math.random() * 5) + 1;
      const simplifiedDenom = Math.floor(Math.random() * 5) + simplifiedNum + 1;
      const num4 = simplifiedNum * factor;
      const denom3 = simplifiedDenom * factor;

      return {
        type: PROBLEM_TYPES.MULTIPLE_CHOICE,
        question: `${num4}/${denom3}를 약분하면?`,
        options: [
          `${simplifiedNum}/${simplifiedDenom}`,
          `${simplifiedNum + 1}/${simplifiedDenom}`,
          `${simplifiedNum}/${simplifiedDenom + 1}`,
          `${simplifiedNum - 1}/${simplifiedDenom}`
        ].sort(() => Math.random() - 0.5),
        correctAnswer: `${simplifiedNum}/${simplifiedDenom}`,
        explanation: `${num4}와 ${denom3}의 최대공약수는 ${factor}입니다. 분자와 분모를 ${factor}로 나누면 ${simplifiedNum}/${simplifiedDenom}이 됩니다.`,
        points: 20
      };

    default:
      return null;
  }
};

// 소수 문제 생성 함수 확장
const generateDecimalProblem = (difficulty) => {
  switch (difficulty) {
    case DIFFICULTY_LEVELS.EASY:
      const decimal1 = Math.floor(Math.random() * 10) / 10;
      const decimal2 = Math.floor(Math.random() * 10) / 10;
      const decimalSum = +(decimal1 + decimal2).toFixed(1);

      return {
        type: PROBLEM_TYPES.MULTIPLE_CHOICE,
        question: `${decimal1} + ${decimal2} = ?`,
        options: [
          decimalSum,
          +(decimalSum + 0.1).toFixed(1),
          +(decimalSum - 0.1).toFixed(1),
          +(decimalSum + 0.2).toFixed(1)
        ].sort(() => Math.random() - 0.5).map(String),
        correctAnswer: String(decimalSum),
        explanation: `${decimal1} + ${decimal2} = ${decimalSum}입니다.`,
        points: 10
      };

    case DIFFICULTY_LEVELS.MEDIUM:
      const decimal3 = +(Math.random() * 5).toFixed(2);
      const decimal4 = +(Math.random() * 2).toFixed(2);
      const product = +(decimal3 * decimal4).toFixed(2);

      return {
        type: PROBLEM_TYPES.MULTIPLE_CHOICE,
        question: `${decimal3} × ${decimal4} = ?`,
        options: [
          product,
          +(product + 0.1).toFixed(2),
          +(product - 0.1).toFixed(2),
          +(product + 0.2).toFixed(2)
        ].sort(() => Math.random() - 0.5).map(String),
        correctAnswer: String(product),
        explanation: `${decimal3} × ${decimal4} = ${product}입니다.`,
        points: 15
      };

    case DIFFICULTY_LEVELS.HARD:
      const decimal5 = +(Math.random() * 10 + 1).toFixed(2);
      const decimal6 = +(Math.random() * 2 + 0.5).toFixed(2);
      const quotient = +(decimal5 / decimal6).toFixed(2);

      return {
        type: PROBLEM_TYPES.MULTIPLE_CHOICE,
        question: `${decimal5} ÷ ${decimal6} = ?`,
        options: [
          quotient,
          +(quotient + 0.1).toFixed(2),
          +(quotient - 0.1).toFixed(2),
          +(quotient + 0.2).toFixed(2)
        ].sort(() => Math.random() - 0.5).map(String),
        correctAnswer: String(quotient),
        explanation: `${decimal5} ÷ ${decimal6} = ${quotient}입니다.`,
        points: 20
      };

    default:
      return null;
  }
};

// 도형 문제 생성 함수 확장
const generateGeometryProblem = (difficulty) => {
  switch (difficulty) {
    case DIFFICULTY_LEVELS.EASY:
      const width = Math.floor(Math.random() * 10) + 1;
      const height = Math.floor(Math.random() * 10) + 1;
      const area = width * height;

      return {
        type: PROBLEM_TYPES.MULTIPLE_CHOICE,
        question: `가로 ${width}cm, 세로 ${height}cm인 직사각형의 넓이는?`,
        options: [
          `${area}cm²`,
          `${area + 1}cm²`,
          `${area - 1}cm²`,
          `${area + 2}cm²`
        ].sort(() => Math.random() - 0.5),
        correctAnswer: `${area}cm²`,
        explanation: `직사각형의 넓이는 가로 × 세로입니다. ${width} × ${height} = ${area}`,
        points: 10
      };

    case DIFFICULTY_LEVELS.MEDIUM:
      const side = Math.floor(Math.random() * 10) + 5;
      const squareArea = side * side;
      const perimeter = side * 4;

      return {
        type: PROBLEM_TYPES.MULTIPLE_CHOICE,
        question: `한 변의 길이가 ${side}cm인 정사각형의 둘레와 넓이를 구하세요.`,
        options: [
          `둘레: ${perimeter}cm, 넓이: ${squareArea}cm²`,
          `둘레: ${perimeter + 4}cm, 넓이: ${squareArea}cm²`,
          `둘레: ${perimeter}cm, 넓이: ${squareArea + 4}cm²`,
          `둘레: ${perimeter - 4}cm, 넓이: ${squareArea}cm²`
        ],
        correctAnswer: `둘레: ${perimeter}cm, 넓이: ${squareArea}cm²`,
        explanation: `정사각형의 둘레는 한 변의 길이 × 4, 넓이는 한 변의 길이 × 한 변의 길이입니다.`,
        points: 15
      };

    case DIFFICULTY_LEVELS.HARD:
      const radius = Math.floor(Math.random() * 5) + 3;
      const circleArea = Math.round(Math.PI * radius * radius);
      const circumference = Math.round(2 * Math.PI * radius);

      return {
        type: PROBLEM_TYPES.MULTIPLE_CHOICE,
        question: `반지름이 ${radius}cm인 원의 둘레와 넓이를 구하세요. (π = 3.14로 계산)`,
        options: [
          `둘레: ${circumference}cm, 넓이: ${circleArea}cm²`,
          `둘레: ${circumference + 2}cm, 넓이: ${circleArea}cm²`,
          `둘레: ${circumference}cm, 넓이: ${circleArea + 2}cm²`,
          `둘레: ${circumference - 2}cm, 넓이: ${circleArea}cm²`
        ],
        correctAnswer: `둘레: ${circumference}cm, 넓이: ${circleArea}cm²`,
        explanation: `원의 둘레는 2 × π × 반지름, 넓이는 π × 반지름 × 반지름입니다.`,
        points: 20
      };

    default:
      return null;
  }
};

// 측정 문제 생성 함수
const generateMeasurementProblem = (difficulty) => {
  switch (difficulty) {
    case DIFFICULTY_LEVELS.EASY:
      const meters = Math.floor(Math.random() * 10) + 1;
      const centimeters = meters * 100;

      return {
        type: PROBLEM_TYPES.MULTIPLE_CHOICE,
        question: `${meters}m는 몇 cm인가요?`,
        options: [
          `${centimeters}cm`,
          `${centimeters + 10}cm`,
          `${centimeters - 10}cm`,
          `${centimeters + 20}cm`
        ].sort(() => Math.random() - 0.5),
        correctAnswer: `${centimeters}cm`,
        explanation: `1m = 100cm이므로, ${meters}m = ${centimeters}cm입니다.`,
        points: 10
      };

    case DIFFICULTY_LEVELS.MEDIUM:
      const kilograms = Math.floor(Math.random() * 5) + 1;
      const grams = Math.floor(Math.random() * 900) + 100;
      const totalGrams = kilograms * 1000 + grams;

      return {
        type: PROBLEM_TYPES.MULTIPLE_CHOICE,
        question: `${kilograms}kg ${grams}g은 모두 몇 g인가요?`,
        options: [
          `${totalGrams}g`,
          `${totalGrams + 100}g`,
          `${totalGrams - 100}g`,
          `${totalGrams + 200}g`
        ].sort(() => Math.random() - 0.5),
        correctAnswer: `${totalGrams}g`,
        explanation: `1kg = 1000g이므로, ${kilograms}kg = ${kilograms * 1000}g입니다. 여기에 ${grams}g을 더하면 ${totalGrams}g이 됩니다.`,
        points: 15
      };

    case DIFFICULTY_LEVELS.HARD:
      const hours = Math.floor(Math.random() * 12) + 1;
      const minutes = Math.floor(Math.random() * 60);
      const totalMinutes = hours * 60 + minutes;

      return {
        type: PROBLEM_TYPES.MULTIPLE_CHOICE,
        question: `${hours}시간 ${minutes}분은 모두 몇 분인가요?`,
        options: [
          `${totalMinutes}분`,
          `${totalMinutes + 10}분`,
          `${totalMinutes - 10}분`,
          `${totalMinutes + 20}분`
        ].sort(() => Math.random() - 0.5),
        correctAnswer: `${totalMinutes}분`,
        explanation: `1시간 = 60분이므로, ${hours}시간 = ${hours * 60}분입니다. 여기에 ${minutes}분을 더하면 ${totalMinutes}분이 됩니다.`,
        points: 20
      };

    default:
      return null;
  }
};

// 통계 문제 생성 함수
const generateStatisticsProblem = (difficulty) => {
  switch (difficulty) {
    case DIFFICULTY_LEVELS.EASY:
      const numbers = Array.from({ length: 5 }, () => Math.floor(Math.random() * 10) + 1);
      const sum = numbers.reduce((a, b) => a + b, 0);
      const average = sum / numbers.length;

      return {
        type: PROBLEM_TYPES.MULTIPLE_CHOICE,
        question: `다음 숫자들의 평균을 구하세요: ${numbers.join(', ')}`,
        options: [
          average,
          average + 1,
          average - 1,
          average + 2
        ].sort(() => Math.random() - 0.5).map(String),
        correctAnswer: String(average),
        explanation: `모든 수를 더한 후 개수로 나누면 됩니다. (${numbers.join(' + ')}) ÷ ${numbers.length} = ${average}`,
        points: 10
      };

    case DIFFICULTY_LEVELS.MEDIUM:
      const data = Array.from({ length: 6 }, () => Math.floor(Math.random() * 10) + 1).sort((a, b) => a - b);
      const median = data.length % 2 === 0 
        ? (data[data.length/2 - 1] + data[data.length/2]) / 2
        : data[Math.floor(data.length/2)];

      return {
        type: PROBLEM_TYPES.MULTIPLE_CHOICE,
        question: `다음 숫자들의 중앙값을 구하세요: ${data.join(', ')}`,
        options: [
          median,
          median + 1,
          median - 1,
          median + 2
        ].sort(() => Math.random() - 0.5).map(String),
        correctAnswer: String(median),
        explanation: `숫자들을 순서대로 나열한 후 가운데 있는 값을 찾습니다.`,
        points: 15
      };

    case DIFFICULTY_LEVELS.HARD:
      const frequencies = {
        A: Math.floor(Math.random() * 5) + 1,
        B: Math.floor(Math.random() * 5) + 1,
        C: Math.floor(Math.random() * 5) + 1
      };
      const mode = Object.entries(frequencies)
        .sort((a, b) => b[1] - a[1])[0][0];

      return {
        type: PROBLEM_TYPES.MULTIPLE_CHOICE,
        question: `A가 ${frequencies.A}번, B가 ${frequencies.B}번, C가 ${frequencies.C}번 나왔을 때, 가장 많이 나온 것은?`,
        options: ['A', 'B', 'C', '모두 같다'].sort(() => Math.random() - 0.5),
        correctAnswer: mode,
        explanation: `A는 ${frequencies.A}번, B는 ${frequencies.B}번, C는 ${frequencies.C}번 나왔으므로, ${mode}가 가장 많이 나왔습니다.`,
        points: 20
      };

    default:
      return null;
  }
};

// 주제별 문제 생성기 매핑
const problemGenerators = {
  [SUBJECT_CATEGORIES.ARITHMETIC]: generateArithmeticProblem,
  [SUBJECT_CATEGORIES.FRACTION]: generateFractionProblem,
  [SUBJECT_CATEGORIES.DECIMAL]: generateDecimalProblem,
  [SUBJECT_CATEGORIES.GEOMETRY]: generateGeometryProblem,
  [SUBJECT_CATEGORIES.MEASUREMENT]: generateMeasurementProblem,
  [SUBJECT_CATEGORIES.STATISTICS]: generateStatisticsProblem,
  // ... 나머지 주제들도 매핑
};

// 새로운 문제 생성 함수
export const generateNewProblem = (category, difficulty) => {
  const generator = problemGenerators[category];
  if (!generator) return null;

  const problem = generator(difficulty);
  if (!problem) return null;

  return {
    ...problem,
    id: `prob_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    category: category,
    difficulty
  };
};

// 문제 풀이 이력에 따라 다음 문제의 난이도 결정
export const getNextDifficulty = (solvedProblems) => {
  const recentProblems = Object.values(solvedProblems).slice(-5);
  const correctCount = recentProblems.filter(p => p.correct).length;
  
  if (correctCount >= 4) {
    return DIFFICULTY_LEVELS.HARD;
  } else if (correctCount >= 2) {
    return DIFFICULTY_LEVELS.MEDIUM;
  } else {
    return DIFFICULTY_LEVELS.EASY;
  }
}; 