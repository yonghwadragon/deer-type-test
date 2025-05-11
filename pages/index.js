// pages/index.js
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>게임형 설문 웹앱</title>
        <meta name="description" content="게임형 설문을 통해 건강 제품을 추천합니다" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon_antlers_pair.ico" />
      </Head>

      <main style={{ padding: "40px", textAlign: "center", fontFamily: "sans-serif" }}>
        <h1>게임형 설문 웹앱</h1>
        <p>설문 게임을 시작하려면 아래 버튼을 클릭하세요.</p>
        <Link href="/game">
          <button style={{
            marginTop: '20px',
            padding: '10px 30px',
            fontSize: '1.2rem',
            backgroundColor: '#4caf50',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}>
            게임 시작하기
          </button>
        </Link>
      </main>
    </>
  );
}
