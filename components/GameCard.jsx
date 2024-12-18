import styled from "styled-components";
import Link from "next/link";

export default function GameCard({ game }) {
  return (
    <StyledLink href={game.id} game={game}>
      <h4>{game.title}</h4>
      <p>Rating: {game.rating}</p>
    </StyledLink>
  );
}

const StyledLink = styled(Link)`
  border: solid 0.2rem black;
  border-radius: 5px;
  height: 10rem;
  padding: 0.5rem;
  min-width: 100px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  text-decoration: none;
`;
