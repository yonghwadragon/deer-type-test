// pages/_app.js
import { GameProvider } from "@/context/GameContext";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <GameProvider>
      <Component {...pageProps} />
    </GameProvider>
  );
}
