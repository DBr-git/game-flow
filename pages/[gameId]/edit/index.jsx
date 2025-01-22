import GameForm from "@/components/GameForm";
import { useRouter } from "next/router";

export default function EditGame({ onEditGame, games }) {
  const router = useRouter();
  const { gameId } = router.query;

  const selectedGame = games.find((game) => game.id === Number(gameId));

  if (!selectedGame) {
    return <div>Game not found!</div>;
  }

  return (
    <GameForm
      onSubmit={(updatedGame) => {
        onEditGame({ ...selectedGame, ...updatedGame });
        router.push(`/${selectedGame.id}`);
      }}
      selectedGame={selectedGame}
      formMode="edit"
    />
  );
}
