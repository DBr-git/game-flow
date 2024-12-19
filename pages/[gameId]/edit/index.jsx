import GameForm from "@/components/GameForm";

export default function EditGame({
  handleEditGame,
  selectedGame,
  formMode,
  setFormMode,
}) {
  setFormMode("edit");

  return (
    <GameForm
      onSubmit={handleEditGame}
      selectedGame={selectedGame}
      formMode={formMode}
    />
  );
}
