import GameList from "@/components/GameList";
import styled from "styled-components";
import AddIcon from "@/components/AddIcon";

export default function HomePage({ games }) {
  function isSectionEmpty(progress) {
    return games.some((game) => game.progress === progress);
  }

  return (
    <>
      <StyledMain>
        <h1>Game Flow</h1>
        <StyledPageHeadline>Game List</StyledPageHeadline>
        <section>
          <StyledListLabel>In progress</StyledListLabel>
          <GameList progressLabel={"In Progress"} games={games} />
          {!isSectionEmpty("In Progress") && <p>There are no games here...</p>}
        </section>
        <section>
          <StyledListLabel>Planned</StyledListLabel>
          <GameList progressLabel={"Planned"} games={games} />
          {!isSectionEmpty("Planned") && <p>There are no games here...</p>}
        </section>
        <section>
          <StyledListLabel>Completed</StyledListLabel>
          <GameList progressLabel={"Completed"} games={games} />
          {!isSectionEmpty("Completed") && <p>There are no games here...</p>}
        </section>
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
