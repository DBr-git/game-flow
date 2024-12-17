import GameList from "@/components/GameList";

export default function HomePage() {
  return (
    <main>
      <h2>GAME LIST</h2>
      <section>
        <h3>In progress</h3>
        <GameList progress={"In Progress"} />
      </section>
    </main>
  );
}
