import React, { useState, useCallback } from 'react';
import { MESSAGE_TYPES } from '../types/messages';
import useMessages from '../hooks/useMessages';
import styles from './Messages.module.css';

function Messages() {
  const [newMessage, setNewMessage] = useState('');
  const { messages, addMessage } = useMessages();

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    if (newMessage.trim()) {
      addMessage(newMessage, MESSAGE_TYPES.STUDENT);
      setNewMessage('');
    }
  }, [newMessage, addMessage]);

  const handleChange = useCallback((e) => {
    setNewMessage(e.target.value);
  }, []);

  return (
    <div className={styles.messages}>
      <h1>메시지</h1>
      
      <div className={styles.messageForm}>
        <h2>할아버지에게 메시지 보내기</h2>
        <form onSubmit={handleSubmit}>
          <textarea
            value={newMessage}
            onChange={handleChange}
            placeholder="할아버지에게 하고 싶은 말을 적어보세요..."
            className={styles.messageInput}
          />
          <button type="submit" className={styles.sendButton}>
            메시지 보내기
          </button>
        </form>
      </div>

      <div className={styles.messageList}>
        <h2>메시지 목록</h2>
        {messages.length === 0 ? (
          <p className={styles.noMessages}>아직 메시지가 없습니다.</p>
        ) : (
          messages.map(message => (
            <div
              key={message.id}
              className={`${styles.messageItem} ${
                message.type === MESSAGE_TYPES.STUDENT ? styles.studentMessage : styles.grandfatherMessage
              }`}
            >
              <div className={styles.messageHeader}>
                <span className={styles.sender}>
                  {message.type === MESSAGE_TYPES.STUDENT ? '서현이' : '할아버지'}
                </span>
                <span className={styles.timestamp}>
                  {new Date(message.timestamp).toLocaleString()}
                </span>
              </div>
              <p className={styles.messageContent}>{message.content}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Messages; 