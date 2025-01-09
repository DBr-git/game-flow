import styled from "styled-components";
import Link from "next/link";

export default function GameCard({ game }) {
  return (
    <StyledLink href={game.id}>
      <h3>{game.title}</h3>
      <p>Rating: {game.rating}</p>
    </StyledLink>
  );
}

const StyledLink = styled(Link)`
  height: 10rem;
  min-width: 100px;
  background-color: var(--backgroundSubSection);
  box-shadow: 1px 1px 0.2em 0.1px black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  color: var(--subHeadingColor);
  border-radius: var(--borderRadius);
  &:hover {
    color: var(--alertColor);
  }
`;
