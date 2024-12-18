import GameList from "@/components/GameList";
import styled from "styled-components";

export default function HomePage({ initialGames }) {
  return (
    <StyledMain>
      <h1>Game Flow</h1>
      <StyledPageHeadline>Game List</StyledPageHeadline>
      <section>
        <StyledListLabel>In progress</StyledListLabel>
        <GameList progressLabel={"In Progress"} initialGames={initialGames} />
      </section>
      <section>
        <StyledListLabel>Planned</StyledListLabel>
        <GameList progressLabel={"Planned"} initialGames={initialGames} />
      </section>
      <section>
        <StyledListLabel>Completed</StyledListLabel>
        <GameList progressLabel={"Completed"} initialGames={initialGames} />
      </section>
    </StyledMain>
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
