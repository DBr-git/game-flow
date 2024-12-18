import GameList from "@/components/GameList";
import styled from "styled-components";
import Link from "next/link";

export default function HomePage({ games }) {
  return (
    <>
      <StyledMain>
        <h1>Game Flow</h1>
        <StyledPageHeadline>Game List</StyledPageHeadline>
        <section>
          <StyledListLabel>In progress</StyledListLabel>
          <GameList progressLabel={"In Progress"} games={games} />
        </section>
        <section>
          <StyledListLabel>Planned</StyledListLabel>
          <GameList progressLabel={"Planned"} games={games} />
        </section>
        <section>
          <StyledListLabel>Completed</StyledListLabel>
          <GameList progressLabel={"Completed"} games={games} />
        </section>
      </StyledMain>
      <StyledAddLink href="/add-game/">+</StyledAddLink>
    </>
  );
}

const StyledAddLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;

  border-radius: 50%;
  font-size: 40px;
  width: 40px;
  height: 40px;
  position: fixed;
  left: 50%;
  background-color: black;
  color: white;

  transform: translateX(-50%);
  bottom: 25px;
`;

const StyledMain = styled.main`
  padding: 10px;
`;

const StyledPageHeadline = styled.h2`
  margin: 10px 0;
`;

const StyledListLabel = styled.h3`
  margin: 8px 0;
`;
