// src/components/Game/GameScreen.js
import React, { useEffect } from 'react';
import { useGame } from '../../context/GameContext';
import Character from '../Character/Character';
import styles from './GameScreen.module.css';

const GameScreen = () => {
  const {
    currentQuestion,
    answerQuestion,
    gameState,
    startGame,
    currentQuestionIndex
  } = useGame();

  // 컴포넌트가 마운트되면 게임 시작
  useEffect(() => {
    if (gameState === 'idle') {
      startGame();
    }
  }, [gameState, startGame]);

  // 사용자가 선택지를 고를 때 처리하는 함수
  const handleOptionSelect = (questionId, answerId, direction) => {
    // 선택 효과음 재생 (구현 필요)

    // 게임 컨텍스트의 응답 처리 함수 호출
    answerQuestion(questionId, answerId, direction);
  };

  // 게임이 시작되지 않았거나 질문이 없는 경우 로딩 화면 표시
  if (gameState !== 'playing' || !currentQuestion) {
    return (
      <div className={styles.loadingScreen}>
        <div className={styles.loadingSpinner}></div>
        <p>게임 준비 중...</p>
      </div>
    );
  }

  return (
    <div className={styles.gameScreen}>
      {/* 진행 상태 표시 */}
      <div className={styles.progressBar}>
        <div
          className={styles.progress}
          style={{ width: `${((currentQuestionIndex + 1) / 5) * 100}%` }}
        ></div>
      </div>

      {/* 질문 텍스트 */}
      <div className={styles.questionContainer}>
        <h2 className={styles.questionText}>{currentQuestion.text}</h2>
      </div>

      {/* 캐릭터 렌더링 */}
      <Character key={currentQuestion.id} /> {/* + 캐릭터가 질문마다 초기화되도록 key 추가 */}

      {/* 선택지 */}
      <div className={styles.optionsContainer}>
        {currentQuestion.options.map((option) => (
          <div
            key={option.id}
            className={`${styles.option} ${styles[option.direction]}`}
            onClick={() => handleOptionSelect(currentQuestion.id, option.id, option.direction)}
          >
            <div className={styles.optionContent}>
              <span>{option.text}</span>
              <div className={styles.directionIndicator}></div>
            </div>
          </div>
        ))}
      </div>

      {/* 좌우 선택 안내 */}
      <div className={styles.directionGuide}>
        <div className={styles.direction}>
          <span className={styles.arrow}>←</span>
          <span>{currentQuestion.options[0].text}</span>
        </div>
        <div className={styles.direction}>
          <span>{currentQuestion.options[1].text}</span>
          <span className={styles.arrow}>→</span>
        </div>
      </div>
    </div>
  );
};

export default GameScreen;