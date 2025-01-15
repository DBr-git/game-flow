import { useRouter } from "next/router";
import GameDetailsView from "@/components/GameDetailsView";

export default function GameDetailsWrapper({
  games,
  onDeleteGame,
  onEditGame,
}) {
  const router = useRouter();
  const { gameId } = router.query;

  let selectedGame = games.find((game) => game.id === gameId);
  if (selectedGame) {
    return (
      <GameDetailsView
        selectedGame={selectedGame}
        onEditGame={onEditGame}
        onDeleteGame={onDeleteGame}
        gameId={gameId}
      />
    );
  }
}
