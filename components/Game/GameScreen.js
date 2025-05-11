// GameScreen.js (설문형 게임 UI용)
import React, { useEffect } from 'react';
import { useGame } from '@/context/GameContext';
import Character from '@/components/Character/Character';
import styles from './GameScreen.module.css';
import { speakText, stopSpeaking } from '@/utils/tts';

const GameScreen = () => {
  const {
    currentQuestion,
    answerQuestion,
    gameState,
    startGame,
    currentQuestionIndex,
    questions
  } = useGame();

  useEffect(() => {
    if (gameState === 'idle') startGame();
  }, [gameState, startGame]);

  useEffect(() => {
    if (currentQuestion && gameState === 'playing') {
      stopSpeaking();
      const timer = setTimeout(() => speakText(currentQuestion.voiceText), 500);
      return () => {
        clearTimeout(timer);
        stopSpeaking();
      };
    }
  }, [currentQuestion, gameState]);

  useEffect(() => () => stopSpeaking(), []);

  const handleOptionSelect = (questionId, answerId, direction) => {
    answerQuestion(questionId, answerId, direction);
  };

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
      <div className={styles.progressBar}>
        <div 
          className={styles.progress}
          style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
        ></div>
      </div>

      <div className={styles.questionContainer}>
        <h2 className={styles.questionText}>{currentQuestion.text}</h2>
      </div>

      <Character />

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
