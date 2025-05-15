// src/components/Result/ResultScreen.js
import React from 'react';
import { useGame } from '@/context/GameContext';
import { results } from '@/data/questions';

const ResultScreen = () => {
  const { resultType, restartGame } = useGame();
  const resultData = results[resultType];

  if (!resultData) {
    return (
      <div style={{ padding: '40px', textAlign: 'center' }}>
        <h2>결과를 불러올 수 없어 😥</h2>
        <button onClick={restartGame}>처음부터 다시 해볼래!</button>
      </div>
    );
  }

  return (
    <div style={{ padding: '40px', maxWidth: '600px', margin: '0 auto' }}>
      <h1>✨ {resultData.title}</h1>
      <p>{resultData.description}</p>

      <hr style={{ margin: '20px 0' }} />

      <h2>🦌 추천 제품: {resultData.recommendedProduct.name}</h2>
      <p>{resultData.recommendedProduct.description}</p>

      <h3>📦 주요 성분</h3>
      <ul>
        {resultData.recommendedProduct.ingredients.map((item, idx) => (
          <li key={idx}>- {item}</li>
        ))}
      </ul>

      <h3>🌟 기대 효과</h3>
      <ul>
        {resultData.recommendedProduct.benefits.map((item, idx) => (
          <li key={idx}>✔ {item}</li>
        ))}
      </ul>

      <button
        style={{
          marginTop: '30px',
          padding: '10px 20px',
          fontSize: '1rem',
          backgroundColor: '#4caf50',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
        onClick={restartGame}
      >
        🔁 다시 하기
      </button>
    </div>
  );
};

export default ResultScreen;
