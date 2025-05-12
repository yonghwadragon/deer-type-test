// pages/index.js
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>지친유형테스트</title>
        <meta name="description" content="게임형 설문을 통해 건강 제품을 추천합니다" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "40px",
          background: "linear-gradient(135deg, #f2f8ff, #e6ffed)",
          fontFamily: "'Noto Sans KR', sans-serif",
        }}
      >
        <h1
          style={{
            fontSize: "2.5rem",
            color: "#333",
            marginBottom: "20px",
            fontFamily: "DNFBitBitv2",
          }}
        >
          🦌 지친 나를 위한 테스트 !! 🦌
        </h1>
        <p style={{ fontSize: "1.1rem", color: "#555", textAlign: "center", maxWidth: "500px" }}>
          간단한 테스트를 통해 나에게 맞는 건강 솔루션을 찾아봐!
        </p>
        <Link href="/game">
          <button
            style={{
              marginTop: "30px",
              padding: "14px 36px",
              fontSize: "1.1rem",
              backgroundColor: "#00b894",
              color: "#fff",
              border: "none",
              borderRadius: "30px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              transition: "background 0.3s ease",
              cursor: "pointer",
              fontFamily: "DNFBitBitv2",
            }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#019875")}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#00b894")}
          >
            🚀 테스트 시작 !!
          </button>
        </Link>
      </main>
    </>
  );
}
