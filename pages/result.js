// pages/result.js
import dynamic from "next/dynamic";

const ResultScreen = dynamic(
  () => import("../components/Game/Result/ResultScreen"),
  { ssr: false }
);

export default function ResultPage() {
  return <ResultScreen />;
}
