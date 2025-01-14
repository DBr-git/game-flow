import GameList from "@/components/GameList";
import MenuButton from "@/components/buttons/MenuButton";
import { useState } from "react";
import MenuOption from "@/components/MenuOption";

export default function HomePage({ games }) {
  const statusSections = ["In Progress", "Planned", "Completed"];
  const [menuMode, setMenuMode] = useState("closed");

  function isSectionEmpty(status) {
    return games.some((game) => game.status === status);
  }

  return (
    <>
      <main>
        <h1>Game List</h1>

        {statusSections.map((status) => {
          return (
            <section key={status}>
              <h2>{status}</h2>
              <GameList statusLabel={status} games={games} />
              {!isSectionEmpty(status) && (
                <p>No games at the moment, please add one!</p>
              )}
            </section>
          );
        })}
        <MenuButton setMenuMode={setMenuMode} />
        {menuMode === "opened" && <MenuOption setMenuMode={setMenuMode} />}
      </main>
    </>
  );
}
