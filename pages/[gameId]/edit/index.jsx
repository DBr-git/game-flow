import GameForm from "@/components/GameForm";
import { useRouter } from "next/router";

export default function EditGame({ handleEditGame, games }) {
  const router = useRouter();
  const { gameId } = router.query;

  const selectedGame = games.find((game) => game.id === gameId);

  if (!selectedGame) {
    return <div>Loading...</div>;
  }

  return (
    <GameForm
      onSubmit={handleEditGame}
      selectedGame={selectedGame}
      formMode={"edit"}
    />
  );
}
