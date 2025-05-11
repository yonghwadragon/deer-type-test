// context/GameContext.js
import { createContext, useContext, useState } from 'react';
import { useRouter } from 'next/router';
import { questions, calculateResult } from '../data/questions';

const GameContext = createContext();

export function GameProvider({ children }) {
  const router = useRouter();

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [gameState, setGameState] = useState('idle');
  const [characterPosition, setCharacterPosition] = useState('center');
  const [resultType, setResultType] = useState('');

  const startGame = () => {
    setGameState('playing');
    setCurrentQuestionIndex(0);
    setAnswers({});
    setCharacterPosition('center');
    setResultType('');
    console.log('게임 시작: 설문 게임이 시작되었습니다.');
  };

  const answerQuestion = (questionId, answerId, direction) => {
    const currentQuestion = questions[currentQuestionIndex];
    const newAnswers = { ...answers, [questionId]: answerId };
    setAnswers(newAnswers);
    setCharacterPosition(direction);
    console.log(`질문 ${questionId} 응답: ${answerId} (${direction} 방향)`);

    setTimeout(() => {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setCharacterPosition('center');
      } else {
        completeGame(newAnswers);
      }
    }, 1000);
  };

  const completeGame = (finalAnswers) => {
    const result = calculateResult(finalAnswers);
    setResultType(result);
    setGameState('complete');
    console.log(`게임 완료: 결과 유형 - ${result}`);
    saveGameData(finalAnswers, result);
    router.push('/result');
  };

  const saveGameData = (answers, result) => {
    try {
      const gameData = {
        timestamp: new Date().toISOString(),
        answers,
        result,
      };
      const savedGames = JSON.parse(localStorage.getItem('surveyGames') || '[]');
      savedGames.push(gameData);
      localStorage.setItem('surveyGames', JSON.stringify(savedGames));
      console.log('게임 데이터 저장 완료');
    } catch (error) {
      console.error('게임 데이터 저장 오류:', error);
    }
  };

  const restartGame = () => {
    startGame();
  };

  const value = {
    currentQuestionIndex,
    currentQuestion: questions[currentQuestionIndex],
    answers,
    gameState,
    characterPosition,
    resultType,
    startGame,
    answerQuestion,
    completeGame,
    restartGame,
    questions,
  };

  return (
    <GameContext.Provider value={value}>
      {children}
    </GameContext.Provider>
  );
}

export function useGame() {
  const context = useContext(GameContext);
  if (context === undefined) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
}
