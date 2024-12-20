import GameForm from "@/components/GameForm";

export default function AddGame({ onAddGame }) {
  return <GameForm onSubmit={onAddGame} formMode={"add"} />;
}
