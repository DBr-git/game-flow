import GameCard from "./gameCard";
import initialGames from "@/public/initialGames";

export default function GameList({ progress }) {
  const filteredGames = initialGames.filter(
    (initialGame) => initialGame.progress === progress
  );
  return (
    <ul>
      {filteredGames.map((game) => {
        <li key={game.id}>
          <GameCard game={game}></GameCard>
        </li>;
      })}
    </ul>
  );
}
