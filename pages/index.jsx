import GameList from "@/components/GameList";
import MenuButton from "@/components/buttons/MenuButton";
import { useEffect } from "react";
import MenuOption from "@/components/MenuOption";
import Header from "@/components/Header";
import SortingSelector from "@/components/SortingSelector";
import { useRouter } from "next/router";
import styled from "styled-components";

export default function HomePage({
  games,
  menuMode,
  setMenuMode,
  handleChangeSortingOrder,
  sortingOrder,
  setScrollPosition,
  scrollPosition,
}) {
  const statusSections = ["In Progress", "Planned", "Completed"];
  const router = useRouter();

  useEffect(() => {
    if (scrollPosition) {
      window.scrollTo({
        top: scrollPosition,
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
      <Header />
      <StyledMain>
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
      </StyledMain>
    </>
  );
}

const StyledMain = styled.main`
  max-width: 1144px;
  @media screen and (min-width: 1024px) {
    margin: 1em auto;
    display: flex;
    flex-direction: column;

    h1 {
      display: none;
    }
  }
`;
