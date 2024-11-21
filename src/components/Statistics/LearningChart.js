import React from 'react';
import { Line, Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import styles from './LearningChart.module.css';

// Chart.js 등록
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function LearningChart({ learningData }) {
  // 일일 학습 데이터 가공
  const dailyProgress = Object.entries(learningData.solvedProblems)
    .reduce((acc, [_, problem]) => {
      const date = new Date(problem.timestamp).toLocaleDateString();
      acc[date] = (acc[date] || 0) + 1;
      return acc;
    }, {});

  // 카테고리별 정답률 데이터 가공
  const categoryProgress = Object.entries(learningData.solvedProblems)
    .reduce((acc, [_, problem]) => {
      const category = problem.category || '기타';
      if (!acc[category]) {
        acc[category] = { total: 0, correct: 0 };
      }
      acc[category].total++;
      if (problem.correct) acc[category].correct++;
      return acc;
    }, {});

  const lineChartData = {
    labels: Object.keys(dailyProgress),
    datasets: [
      {
        label: '일일 학습량',
        data: Object.values(dailyProgress),
        borderColor: '#4299e1',
        backgroundColor: 'rgba(66, 153, 225, 0.2)',
        tension: 0.4
      }
    ]
  };

  const barChartData = {
    labels: Object.keys(categoryProgress),
    datasets: [
      {
        label: '정답률 (%)',
        data: Object.values(categoryProgress).map(
          ({ total, correct }) => (correct / total) * 100
        ),
        backgroundColor: '#48bb78',
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: '학습 통계'
      }
    },
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };

  return (
    <div className={styles.chartContainer}>
      <div className={styles.chart}>
        <h3>일일 학습 현황</h3>
        <Line data={lineChartData} options={chartOptions} />
      </div>
      
      <div className={styles.chart}>
        <h3>카테고리별 정답률</h3>
        <Bar data={barChartData} options={chartOptions} />
      </div>
    </div>
  );
}

export default LearningChart; 