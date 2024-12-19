import GameForm from "@/components/GameForm";

export default function AddGame({ onAdd, formMode, setFormMode }) {
  setFormMode("add");

  return <GameForm onSubmit={onAdd} formMode={formMode} />;
}
