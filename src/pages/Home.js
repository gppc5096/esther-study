import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faEnvelope, faTrophy, faFire, faChartBar, faHeart, faStar } from '@fortawesome/free-solid-svg-icons';
import useMessages from '../hooks/useMessages';
import { useLearning } from '../contexts/LearningContext';
import styles from './Home.module.css';

function Home() {
  const { messages } = useMessages();
  const { learningData } = useLearning();
  const recentMessages = messages.slice(0, 3);

  return (
    <div className={styles.home}>
      <section className={styles.welcome}>
        <div className={styles.titleContainer}>
          <FontAwesomeIcon icon={faHeart} className={`${styles.titleIcon} ${styles.leftIcon}`} />
          <span className={styles.mainTitle}>수학 나라에 온 서현이를 환영해요!</span>
          <FontAwesomeIcon icon={faStar} className={`${styles.titleIcon} ${styles.rightIcon}`} />
        </div>
        <p>할아버지와 함께하는 즐거운 수학 공부</p>
      </section>

      <div className={styles.dashboard}>
        <section className={styles.stats}>
          <div className={styles.statCard}>
            <FontAwesomeIcon icon={faTrophy} className={styles.icon} />
            <div className={styles.statInfo}>
              <h3>총 점수</h3>
              <p>{learningData.totalScore}점</p>
            </div>
          </div>
          
          <div className={styles.statCard}>
            <FontAwesomeIcon icon={faFire} className={styles.icon} />
            <div className={styles.statInfo}>
              <h3>연속 학습</h3>
              <p>{learningData.streakDays}일</p>
            </div>
          </div>
        </section>

        <section className={styles.quickActions}>
          <Link to="/learning" className={styles.actionCard}>
            <FontAwesomeIcon icon={faBook} className={styles.icon} />
            <h3>학습하기</h3>
            <p>오늘의 수학 문제를 풀어보세요!</p>
          </Link>

          <Link to="/statistics" className={styles.actionCard}>
            <FontAwesomeIcon icon={faChartBar} className={styles.icon} />
            <h3>학습 통계</h3>
            <p>나의 학습 현황을 확인해보세요!</p>
          </Link>

          <Link to="/messages" className={styles.actionCard}>
            <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
            <h3>메시지</h3>
            <p>할아버지에게 메시지를 보내보세요!</p>
          </Link>
        </section>

        <section className={styles.recentMessages}>
          <h2>최근 메시지</h2>
          <div className={styles.messagesList}>
            {recentMessages.length > 0 ? (
              recentMessages.map(message => (
                <div key={message.id} className={styles.messagePreview}>
                  <div className={styles.messageHeader}>
                    <span className={styles.sender}>
                      {message.type === 'STUDENT' ? '서현이' : '할아버지'}
                    </span>
                    <span className={styles.timestamp}>
                      {new Date(message.timestamp).toLocaleDateString()}
                    </span>
                  </div>
                  <p className={styles.messageContent}>{message.content}</p>
                </div>
              ))
            ) : (
              <p className={styles.noMessages}>아직 메시지가 없습니다.</p>
            )}
          </div>
          <Link to="/messages" className={styles.viewAll}>
            모든 메시지 보기
          </Link>
        </section>
      </div>
    </div>
  );
}

export default Home; 