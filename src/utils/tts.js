// src/utils/tts.js

// 음성 목록 비동기 로딩
const getVoicesAsync = () =>
  new Promise(resolve => {
    const synth = window.speechSynthesis;
    let voices = synth.getVoices();
    if (voices.length) return resolve(voices);
    synth.onvoiceschanged = () => {
      voices = synth.getVoices();
      resolve(voices);
    };
  });

// 텍스트를 음성으로 재생
export const speakText = async (text, options = {}) => {
  if (!window.speechSynthesis) return false;
  try {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);

    // 기본 옵션
    utterance.lang = options.lang || 'ko-KR';
    utterance.pitch = options.pitch || 1.2;
    utterance.rate  = options.rate  || 1.0;
    utterance.volume= options.volume|| 1.0;

    // 음성 로딩 대기
    const voices = await getVoicesAsync();
    console.log('사용 가능한 음성 목록:', voices);
    const korean = voices.filter(v => v.lang.includes('ko'));
    console.log('한국어 음성 목록:', korean);

    // 여성 음성 우선 선택
    if (korean.length) {
      const female = korean.find(v => /female|여성/i.test(v.name));
      utterance.voice = female || korean[0];
    }

    // 이벤트 콜백
    utterance.onstart = () => options.onStart && options.onStart();
    utterance.onend   = () => options.onEnd   && options.onEnd();
    utterance.onerror = e => {
      console.error('음성 재생 오류:', e);
      options.onError && options.onError(e);
    };

    window.speechSynthesis.speak(utterance);
    return true;
  } catch (e) {
    console.error('음성 재생 중 예외:', e);
    options.onError && options.onError(e);
    return false;
  }
};

export const stopSpeaking   = () => { window.speechSynthesis?.cancel(); return true; };
export const pauseSpeaking  = () => { window.speechSynthesis?.pause();  return true; };
export const resumeSpeaking = () => { window.speechSynthesis?.resume(); return true; };
export const isSpeechSupported = () => !!window.speechSynthesis;
