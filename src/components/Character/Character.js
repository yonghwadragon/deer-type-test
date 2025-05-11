import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useGame } from '../../context/GameContext';
import styles from './Character.module.css';

// 캐릭터 컴포넌트
const Character = () => {
  const { characterPosition } = useGame();
  const [animationClass, setAnimationClass] = useState('');
  
  // 캐릭터 이미지 경로 (기본 이미지, 실제 이미지로 교체 필요)
  const characterImage = '/images/deer_character.png';
  
  // 캐릭터 위치에 따른 애니메이션 클래스 설정
  useEffect(() => {
    // 이전 애니메이션 클래스 제거를 위해 빈 클래스로 설정
    setAnimationClass('');
    
    // 약간의 지연 후 애니메이션 클래스 설정 (DOM 업데이트 보장)
    const timer = setTimeout(() => {
      switch (characterPosition) {
        case 'left':
          setAnimationClass(styles.moveLeft);
          break;
        case 'right':
          setAnimationClass(styles.moveRight);
          break;
        case 'center':
        default:
          setAnimationClass(styles.moveCenter);
          break;
      }
    }, 50);
    
    return () => clearTimeout(timer);
  }, [characterPosition]);
  
  return (
    <div className={styles.characterContainer}>
      <div className={`${styles.character} ${animationClass}`}>
        {/* 실제 이미지가 준비되면 아래 주석을 해제하고 사용하세요 */}
        {/* <Image 
          src={characterImage}
          alt="귀여운 사슴 캐릭터"
          width={150}
          height={150}
          priority
        /> */}
        
        {/* 임시 캐릭터 표현 (이미지가 준비될 때까지) */}
        <div className={styles.deerPlaceholder}>
          <div className={styles.deerHead}>
            <div className={styles.deerEar}></div>
            <div className={styles.deerEar}></div>
            <div className={styles.deerFace}>
              <div className={styles.deerEye}></div>
              <div className={styles.deerEye}></div>
              <div className={styles.deerNose}></div>
            </div>
          </div>
          <div className={styles.deerBody}></div>
        </div>
      </div>
      
      {/* 캐릭터 그림자 */}
      <div className={styles.shadow}></div>
      
      {/* 위치 표시기 */}
      <div className={styles.positionIndicator}>
        <div className={`${styles.position} ${characterPosition === 'left' ? styles.active : ''}`}></div>
        <div className={`${styles.position} ${characterPosition === 'center' ? styles.active : ''}`}></div>
        <div className={`${styles.position} ${characterPosition === 'right' ? styles.active : ''}`}></div>
      </div>
    </div>
  );
};

export default Character;