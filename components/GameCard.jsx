export default function GameCard({ game }) {
  return (
    <div>
      <h3>{game.title}</h3>
      <p>{game.rating}</p>
    </div>
  );
}
