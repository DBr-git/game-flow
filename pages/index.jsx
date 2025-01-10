import GameList from "@/components/GameList";
import MenuButton from "@/components/buttons/MenuButton";
import { useState } from "react";
import MenuOption from "@/components/MenuOption";

export default function HomePage({ games }) {
  const progressSections = ["In Progress", "Planned", "Completed"];
  const [menuMode, setMenuMode] = useState("closed");

  function isSectionEmpty(progress) {
    return games.some((game) => game.progress === progress);
  }

  return (
    <>
      <main>
        <h1>Game List</h1>

        {progressSections.map((progress) => {
          return (
            <section key={progress}>
              <h2>{progress}</h2>
              <GameList progressLabel={progress} games={games} />
              {!isSectionEmpty(progress) && (
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
