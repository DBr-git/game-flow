import GameForm from "@/components/GameForm";
import Header from "@/components/Header";

export default function AddGame({ onAddGame }) {
  return (
    <>
      <Header />
      <GameForm onSubmit={onAddGame} formMode={"add"} />
    </>
  );
}
