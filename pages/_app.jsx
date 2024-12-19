import GlobalStyle from "../styles";
import initialGames from "@/public/initialGames.js";
import { useState } from "react";
import { useRouter } from "next/router";
import { uid } from "uid";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [games, setGames] = useState(initialGames);

  function handleCreateGame(newGame) {
    const id = uid();
    setGames([...games, { id: id, progress: "Planned", ...newGame }]);
    router.push(`/${id}/`);
  }

  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} games={games} onSubmit={handleCreateGame} />
    </>
  );
}
