import GameForm from "@/components/GameForm";
import { useEffect } from "react";

export default function AddGame({ onAdd, formMode, setFormMode }) {
  useEffect(() => {
    setFormMode("add");
  }, [setFormMode]);
  return <GameForm onSubmit={onAdd} formMode={formMode} />;
}
