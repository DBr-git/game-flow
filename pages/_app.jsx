import GlobalStyle from "../styles";
import initialGames from "@/public/initialGames.js";
import { useState } from "react";
import { useRouter } from "next/router";
import { uid } from "uid";
import { randomColor } from "@/utils/randomColor.js";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [games, setGames] = useState(initialGames);

  function handleCreateGame(newGame) {
    const id = uid();
    setGames([
      ...games,
      { id: id, progress: "Planned", color: randomColor(), ...newGame },
    ]);
    router.push(`/${id}/`);
  }

  function handleDeleteGame(gameToRemove) {
    setGames(games.filter((game) => game !== gameToRemove));
  }

  function handleEditGame(gameToEdit) {
    setGames(
      games.map((game) => {
        if (game.id === gameToEdit.id) return gameToEdit;
        return game;
      })
    );
    router.push(`/${gameToEdit.id}`);
  }

  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        games={games}
        onAddGame={handleCreateGame}
        onDeleteGame={handleDeleteGame}
        onEditGame={handleEditGame}
      />
    </>
  );
}
