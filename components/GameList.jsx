import GameCard from "./GameCard";
import initialGames from "@/public/initialGames";
import styled from "styled-components";

export default function GameList({ progress }) {
  const filteredGames = initialGames.filter(
    (initialGame) => initialGame.progress === progress
  );

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
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: space-between;
`;

const StyledListItem = styled.li`
  flex: 1 1 calc(50% - 0.5rem);
`;
