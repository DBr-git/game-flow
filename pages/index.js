import GameList from "@/components/GameList";
import styled from "styled-components";

export default function HomePage() {
  return (
    <StyledMain>
      <StyledH2>Game List</StyledH2>
      <section>
        <StyledH3>In progress</StyledH3>
        <GameList progress={"In Progress"} />
      </section>
      <section>
        <StyledH3>Planned</StyledH3>
        <GameList progress={"Planned"} />
      </section>
      <section>
        <StyledH3>Completed</StyledH3>
        <GameList progress={"Completed"} />
      </section>
    </StyledMain>
  );
}

const StyledMain = styled.main`
  padding: 10px;
`;

const StyledH2 = styled.h2`
  margin: 10px 0;
`;

const StyledH3 = styled.h3`
  margin: 8px 0;
`;
