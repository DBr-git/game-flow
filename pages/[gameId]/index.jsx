import { useRouter } from "next/router";
import GameDetailsView from "@/components/GameDetailsView";

export default function GameDetailsPage({ games, onDeleteGame, onEditGame }) {
  const router = useRouter();
  const { gameId } = router.query;
  let selectedGame = games?.find((game) => game.id === Number(gameId));

  if (selectedGame) {
    return (
      <GameDetailsView
        selectedGame={selectedGame}
        onEditGame={onEditGame}
        onDeleteGame={onDeleteGame}
      />
    );
  }
}
