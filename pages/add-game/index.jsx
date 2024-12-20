import GameForm from "@/components/GameForm";

export default function AddGame({ onAdd }) {
  return <GameForm onSubmit={onAdd} formMode={"add"} />;
}
