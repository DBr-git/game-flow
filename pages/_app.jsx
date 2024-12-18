import GlobalStyle from "../styles";
import initialGames from "@/public/initialGames.js";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [games, setGames] = useState(initialGames);

  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} games={games} />
    </>
  );
}
