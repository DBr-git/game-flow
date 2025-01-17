import GameCard from "./GameCard";
import styled from "styled-components";
import {
  sortedGamesByAlphabet,
  sortedGamesByRating,
} from "@/utils/sortingGames";

export default function GameList({ statusLabel, games, sortingOrder }) {
  const filteredGames = games.filter((game) => game.status === statusLabel);

  let sortedGames = sortedGamesByAlphabet(filteredGames);

  if (sortingOrder === "alphabetically") {
    sortedGames = sortedGamesByAlphabet(filteredGames);
  } else if (sortingOrder === "byRating") {
    sortedGames = sortedGamesByRating(filteredGames);
  }

  return (
    <StyledList>
      {sortedGames.map((game) => (
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
