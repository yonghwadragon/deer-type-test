// TTS(Text-to-Speech) 유틸리티 함수

// 사용 가능한 음성 확인
const getSupportedVoices = () => {
  // 브라우저에서 지원하는 음성 목록 가져오기
  const voices = window.speechSynthesis?.getVoices() || [];
  
  // 한국어 음성 필터링 (귀여운 느낌의 여성 음성 선호)
  const koreanVoices = voices.filter(voice => 
    voice.lang.includes('ko') || voice.lang.includes('ko-KR')
  );
  
  console.log('사용 가능한 음성 목록:', voices);
  console.log('한국어 음성 목록:', koreanVoices);
  
  return {
    allVoices: voices,
    koreanVoices
  };
};

// 텍스트를 음성으로 변환하는 함수
export const speakText = (text, options = {}) => {
  // 브라우저가 음성 합성을 지원하는지 확인
  if (!window.speechSynthesis) {
    console.error('이 브라우저는 Speech Synthesis API를 지원하지 않습니다.');
    return false;
  }
  
  try {
    // 이전 음성 취소
    window.speechSynthesis.cancel();
    
    // 음성 인스턴스 생성
    const utterance = new SpeechSynthesisUtterance(text);
    
    // 기본 옵션 설정
    utterance.lang = options.lang || 'ko-KR'; // 기본 언어 설정
    utterance.pitch = options.pitch || 1.2;  // 목소리 높낮이 (귀여운 느낌)
    utterance.rate = options.rate || 1.0;    // 말하는 속도
    utterance.volume = options.volume || 1.0; // 볼륨
    
    // 음성 선택 (한국어 여성 음성 선호)
    const { koreanVoices } = getSupportedVoices();
    
    if (koreanVoices.length > 0) {
      // 여성 음성 찾기 시도
      const femaleVoice = koreanVoices.find(voice => 
        voice.name.includes('Female') || 
        voice.name.includes('여성') ||
        !voice.name.includes('Male')
      );
      
      if (femaleVoice) {
        utterance.voice = femaleVoice;
      } else {
        utterance.voice = koreanVoices[0]; // 첫 번째 한국어 음성 사용
      }
    }
    
    // 이벤트 핸들러 설정
    utterance.onstart = () => {
      console.log('음성 재생 시작:', text.substring(0, 20) + '...');
    };
    
    utterance.onend = () => {
      console.log('음성 재생 완료');
      if (options.onEnd) {
        options.onEnd();
      }
    };
    
    utterance.onerror = (error) => {
      console.error('음성 재생 오류:', error);
      if (options.onError) {
        options.onError(error);
      }
    };
    
    // 음성 재생
    window.speechSynthesis.speak(utterance);
    return true;
  } catch (error) {
    console.error('음성 재생 중 오류 발생:', error);
    return false;
  }
};

// 음성 재생 중지
export const stopSpeaking = () => {
  if (window.speechSynthesis) {
    window.speechSynthesis.cancel();
    console.log('음성 재생 중지됨');
    return true;
  }
  return false;
};

// 음성 일시정지
export const pauseSpeaking = () => {
  if (window.speechSynthesis) {
    window.speechSynthesis.pause();
    console.log('음성 재생 일시정지됨');
    return true;
  }
  return false;
};

// 음성 재개
export const resumeSpeaking = () => {
  if (window.speechSynthesis) {
    window.speechSynthesis.resume();
    console.log('음성 재생 재개됨');
    return true;
  }
  return false;
};

// 음성 합성 가능 여부 확인
export const isSpeechSupported = () => {
  return !!window.speechSynthesis;
};

// 기본 내보내기
export default {
  speakText,
  stopSpeaking,
  pauseSpeaking,
  resumeSpeaking,
  isSpeechSupported,
  getSupportedVoices
};
