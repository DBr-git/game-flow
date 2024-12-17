export default function GameCard({ game }) {
  return (
    <div>
      <h4>{game.title}</h4>
      <p>{game.rating}</p>
    </div>
  );
}
