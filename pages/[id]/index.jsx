import { useRouter } from "next/router";
import { Fragment } from "react";
import BackButton from "@/components/BackButton";

export default function GameDetails({ initialGames }) {
  const router = useRouter();
  const { id } = router.query;

  const selectedGame = initialGames.find((game) => game.id === id);

  return (
    <Fragment>
      <BackButton href={"/"}></BackButton>
      <p>{selectedGame.title}</p>
      <p>{selectedGame.rating}</p>
      <p>{selectedGame.description}</p>
    </Fragment>
  );
}
