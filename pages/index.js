import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import styles from "@/styles/HomePage.module.css"; // ✅ 모듈 스타일 import

export default function Home() {
  const fullText = "나랑 테스트 시작하자!\n테스트 시작 버튼을 눌러!";
  const [loading, setLoading] = useState(true);
  const [displayed, setDisplayed] = useState("");
  const [ready, setReady] = useState(false);
  const introAudio = useRef(null);
  const clickAudio = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      introAudio.current?.play?.();

      // 타이핑 애니메이션
      let idx = 0;
      setDisplayed("");
      const typeInterval = setInterval(() => {
        if (idx >= fullText.length) {
          clearInterval(typeInterval);
          setReady(true);
          return;
        }
        const nextChar = fullText.charAt(idx);
        setDisplayed(prev => prev + nextChar);
        idx++;
      }, 70);
    }, 1500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const handleStart = () => {
    clickAudio.current?.play?.();
  };

  return (
    <>
      <Head>
        <title>지친유형테스트</title>
        <meta name="description" content="게임형 설문을 통해 건강 제품을 추천합니다" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* 녹음된 사운드 파일 */}
      <audio ref={introAudio} src="/audio/intro.mp3" preload="auto" />
      <audio ref={clickAudio} src="/audio/click.mp3" preload="auto" />

      <main className={styles.container}>
        {loading ? (
          <p className={styles.loadingText}>🦌 사슴이 준비 중...</p>
        ) : (
          <>
            <div className={styles.charBubbleWrapper}>
              <Image
                src="/images/사슴이.png"
                alt="사슴이"
                width={160}
                height={160}
              />
              <div className={styles.bubble}>
                {displayed}
                <div className={styles.tail} />
              </div>
            </div>

            <h1 className={styles.title}>🦌 지친 나를 위한 테스트 !! 🦌</h1>
            <p className={styles.subtitle}>
              간단한 테스트를 통해<br />나에게 맞는 건강 솔루션을 찾아봐!
            </p>

            <Link href={ready ? "/game" : "#"} onClick={handleStart}>
              <button className={styles.startButton} disabled={!ready}>
                🚀 테스트 시작 !!
              </button>
            </Link>
          </>
        )}
      </main>
    </>
  );
}
