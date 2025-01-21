import GlobalStyle from "../styles";
import initialGames from "@/public/initialGames.js";
import { useState } from "react";
import { useRouter } from "next/router";
import { uid } from "uid";
import { randomColor } from "@/utils/randomColor.js";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [games, setGames] = useState(initialGames);
  const [menuMode, setMenuMode] = useState("closed");
  const [sortingOrder, setSortingOrder] = useState("alphabetically-A-to-Z");

  console.log("games", games);
  function handleChangeSortingOrder(order) {
    setSortingOrder(order);
  }

  function handleCreateGame(newGame) {
    const id = uid();
    setGames([
      ...games,
      {
        id: id,
        status: "Planned",
        color: randomColor(),
        progress: 0,
        ...newGame,
      },
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
        menuMode={menuMode}
        setMenuMode={setMenuMode}
        handleChangeSortingOrder={handleChangeSortingOrder}
        sortingOrder={sortingOrder}
        setGames={setGames}
      />
    </>
  );
}
