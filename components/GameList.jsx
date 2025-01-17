import GameCard from "./GameCard";
import styled from "styled-components";
import sortGames from "@/utils/sortingGames";

export default function GameList({ statusLabel, games }) {
  const filteredGames = games.filter((game) => game.status === statusLabel);

  // const firstItem = "a";
  // const secondItem = "b";
  // const sortedGames = sortGames(filteredGames, firstItem, secondItem);

  const sortedGames = filteredGames.toSorted((a, b) =>
    b.name.localeCompare(b.name)
  );
  console.log("sortedGames", sortedGames);

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
