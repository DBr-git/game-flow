import GameCard from "./GameCard";
import styled from "styled-components";
import {
  sortedGamesByAlphabet,
  sortedGamesByRating,
} from "@/utils/sortingGames";

export default function GameList({ statusLabel, games, sortingOrder }) {
  const filteredGames = games.filter((game) => game.status === statusLabel);

  let sortedGames = filteredGames;

  switch (sortingOrder) {
    case "alphabetically-A-to-Z":
      sortedGames = sortedGamesByAlphabet(filteredGames, "ascending");
      break;
    case "alphabetically-Z-to-A":
      sortedGames = sortedGamesByAlphabet(filteredGames, "descending");
      break;
    case "byRating-1-to-10":
      sortedGames = sortedGamesByRating(filteredGames, "ascending");
      break;
    case "byRating-10-to-1":
      sortedGames = sortedGamesByRating(filteredGames, "descending");
      break;
    default:
      "alphabetically-A-to-Z";
      break;
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
