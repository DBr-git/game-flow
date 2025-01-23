import GameList from "@/components/GameList";
import MenuButton from "@/components/buttons/MenuButton";
import { useEffect } from "react";
import MenuOption from "@/components/MenuOption";
import SortingSelector from "@/components/SortingSelector";
import { useRouter } from "next/router";

export default function HomePage({
  games,
  menuMode,
  setMenuMode,
  handleChangeSortingOrder,
  sortingOrder,
  setScrollPosition,
  scrollPosition,
  page,
  setPage,
}) {
  const statusSections = ["In Progress", "Planned", "Completed"];
  const router = useRouter();

  useEffect(() => {
    const savedScrollPosition = scrollPosition;
    if (savedScrollPosition) {
      window.scrollTo({
        top: savedScrollPosition,
        behavior: "instant",
      });
    }
    setScrollPosition(0);
  }, [router.asPath]);

  useEffect(() => {
    setMenuMode("closed");
  }, [setMenuMode]);

  function isSectionEmpty(status) {
    return games?.some((game) => game.status === status);
  }

  return (
    <>
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
                setScrollPosition={setScrollPosition}
              />
              {!isSectionEmpty(status) && (
                <p>No games at the moment, please add one!</p>
              )}
            </section>
          );
        })}
        <MenuButton setMenuMode={setMenuMode} />
        {menuMode === "opened" && (
          <MenuOption
            setMenuMode={setMenuMode}
            setScrollPosition={setScrollPosition}
          />
        )}
      </main>
    </>
  );
}
