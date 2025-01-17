import GameCard from "./GameCard";
import styled from "styled-components";

export default function GameList({ statusLabel, games }) {
  const filteredGames = games.filter((game) => game.status === statusLabel);

  return (
    <StyledList>
      {filteredGames.map((game) => (
        <li key={game.id}>
          <GameCard game={game} source={"personalList"} />
        </li>
      ))}
    </StyledList>
  );
}

const StyledList = styled.ul`
  padding: var(--mainContentPadding);
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1em;
`;
