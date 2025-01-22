import GameList from "@/components/GameList";
import MenuButton from "@/components/buttons/MenuButton";
import { useEffect } from "react";
import MenuOption from "@/components/MenuOption";
import Header from "@/components/Header";
import SortingSelector from "@/components/SortingSelector";

export default function HomePage({
  games,
  menuMode,
  setMenuMode,
  handleChangeSortingOrder,
  sortingOrder,
}) {
  const statusSections = ["In Progress", "Planned", "Completed"];

  useEffect(() => {
    setMenuMode("closed");
  }, [setMenuMode]);

  function isSectionEmpty(status) {
    return games?.some((game) => game.status === status);
  }

  return (
    <>
      <Header />
      <main>
        <h1>Game List</h1>
        <SortingSelector
          onChangeSortingOrder={handleChangeSortingOrder}
          sortingOrder={sortingOrder}
        />

        {statusSections.map((status) => {
          return (
            <section key={status}>
              <h2>{status}</h2>
              <GameList
                statusLabel={status}
                games={games}
                sortingOrder={sortingOrder}
              />
              {!isSectionEmpty(status) && (
                <p>No games at the moment, please add one!</p>
              )}
            </section>
          );
        })}
        <MenuButton setMenuMode={setMenuMode} />
        {menuMode === "opened" && <MenuOption setMenuMode={setMenuMode} />}
      </main>
    </>
  );
}
