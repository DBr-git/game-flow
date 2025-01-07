import GameCard from "./GameCard";
import styled from "styled-components";

export default function GameList({ progressLabel, games }) {
  const filteredGames = games.filter((game) => game.progress === progressLabel);

  return (
    <StyledList>
      {filteredGames.map((game) => (
        <StyledListItem key={game.id}>
          <GameCard game={game} />
        </StyledListItem>
      ))}
    </StyledList>
  );
}

const StyledList = styled.ul`
  padding: 0.75em;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: space-between;
`;

const StyledListItem = styled.li`
  flex: 1 1 calc(50% - 0.5rem);
`;
