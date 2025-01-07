import GameList from "@/components/GameList";
import styled from "styled-components";
import AddIcon from "@/components/AddIcon";

export default function HomePage({ games }) {
  const progressSections = ["In Progress", "Planned", "Completed"];

  function isSectionEmpty(progress) {
    return games.some((game) => game.progress === progress);
  }

  return (
    <>
      <StyledMain>
        <StyledPageHeadline>Game List</StyledPageHeadline>

        {progressSections.map((progress) => {
          return (
            <section key={progress}>
              <StyledListLabel>{progress}</StyledListLabel>
              <GameList progressLabel={progress} games={games} />
              {!isSectionEmpty(progress) && (
                <p>No games at the moment, please add one!</p>
              )}
            </section>
          );
        })}
      </StyledMain>
      <AddIcon />
    </>
  );
}

const StyledMain = styled.main``;

const StyledPageHeadline = styled.h1``;

const StyledListLabel = styled.h2``;
