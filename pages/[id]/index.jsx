import { useRouter } from "next/router";
import { Fragment } from "react";
import BackButton from "@/components/BackButton";
import styled from "styled-components";

export default function GameDetails({ initialGames }) {
  const router = useRouter();
  const { id } = router.query;

  const selectedGame = initialGames.find((game) => game.id === id);

  if (!selectedGame) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <BackButton href={"/"}></BackButton>
      <StyledArticle>
        <StyledRowWrapper>
          <StyledTitle>{selectedGame.title}</StyledTitle>
          <StyledRating>Rating: {selectedGame.rating}</StyledRating>
        </StyledRowWrapper>
        <StyledDescription>{selectedGame.description}</StyledDescription>
      </StyledArticle>
    </>
  );
}

const StyledArticle = styled.article`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 0.5rem;
  padding: 10px;
  p {
    border: solid 0.2rem black;
    border-radius: 5px;
    padding: 5px;
  }
`;

const StyledRowWrapper = styled.div`
  display: flex;
  gap: inherit;
  justify-content: space-between;
`;

const StyledTitle = styled.p`
  align-content: center;
`;

const StyledRating = styled.p`
  align-content: center;
`;

const StyledDescription = styled.p`
  flex-basis: 100%;
`;
