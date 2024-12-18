import GlobalStyle from "../styles";
import initialGames from "@/public/initialGames.js";
import { useState } from "react";
import { useRouter } from "next/router";
import { uid } from "uid";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [games, setGames] = useState(initialGames);

  function handleCreateGame(newGame) {
    setGames([...games, { id: uid(), progress: "Planned", ...newGame }]);
    router.push("/");
  }
  console.log(games);
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} games={games} onSubmit={handleCreateGame} />
    </>
  );
}
