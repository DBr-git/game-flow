import styled from "styled-components";
import Link from "next/link";

export default function GameCard({ game }) {
  return (
    <StyledLink href={game.id} color={game.color}>
      <h3>{game.title}</h3>
      <p>Rating: {game.rating}</p>
    </StyledLink>
  );
}

const StyledLink = styled(Link)`
  height: 10rem;
  min-width: 100px;
  background-color: ${(props) => props.color};
  box-shadow: 1px 1px 0.2em 0.1px black;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: space-around;
  color: var(--subHeadingColor);
  border-radius: var(--borderRadius);
  padding: 1em;
  h3 {
    overflow-wrap: anywhere;
    overflow: auto;
    margin-bottom: 1em;
  }
  &:hover {
    color: var(--alertColor);
  }
`;
