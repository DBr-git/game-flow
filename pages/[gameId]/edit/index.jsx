import GameForm from "@/components/GameForm";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function EditGame({
  handleEditGame,
  formMode,
  setFormMode,
  games,
}) {
  const router = useRouter();
  const { gameId } = router.query;

  useEffect(() => {
    setFormMode("edit");
  }, [setFormMode]);

  const selectedGame = games.find((game) => game.id === gameId);

  if (!selectedGame) {
    return <div>Loading...</div>;
  }

  return (
    <GameForm
      onSubmit={handleEditGame}
      selectedGame={selectedGame}
      formMode={formMode}
      setFormMode={setFormMode}
    />
  );
}
