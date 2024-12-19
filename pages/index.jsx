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
        <h1>Game Flow</h1>
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

const StyledMain = styled.main`
  padding: 10px;
`;

const StyledPageHeadline = styled.h2`
  margin: 10px 0;
`;

const StyledListLabel = styled.h3`
  margin: 8px 0;
`;
