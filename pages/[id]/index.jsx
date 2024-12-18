import { useRouter } from "next/router";
import { Fragment } from "react";

export default function GameDetails({ initialGames }) {
  const router = useRouter();
  const { id } = router.query;

  const selectedGame = initialGames.find((game) => game.id === id);

  return (
    <Fragment>
      <button>back</button>
      <p>{selectedGame.title}</p>
      <p>{selectedGame.rating}</p>
      <p>{selectedGame.description}</p>
    </Fragment>
  );
}
