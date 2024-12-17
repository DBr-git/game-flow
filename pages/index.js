import GameList from "@/components/GameList";
import styled from "styled-components";

export default function HomePage() {
  return (
    <StyledMain>
      <StyledPageHeadline>Game List</StyledPageHeadline>
      <section>
        <StyledListLabel>In progress</StyledListLabel>
        <GameList progress={"In Progress"} />
      </section>
      <section>
        <StyledListLabel>Planned</StyledListLabel>
        <GameList progress={"Planned"} />
      </section>
      <section>
        <StyledListLabel>Completed</StyledListLabel>
        <GameList progress={"Completed"} />
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
