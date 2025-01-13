import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";

export default function GameCard({ game, source }) {
  return (
    <>
      {source === "api" ? (
        <StyledLink href={game.id.toString()}>
          <Image
            alt={game.name}
            src={`http://images.igdb.com/igdb/image/upload/t_cover_big/${game.cover.image_id}.jpg`}
            width={250}
            height={350}
          ></Image>
        </StyledLink>
      ) : (
        <StyledLink href={game.id.toString()} $color={game.color}>
          <h3>{game.name}</h3>
          <p>Rating: {game.rating}</p>
        </StyledLink>
      )}
    </>
  );
}

const StyledLink = styled(Link)`
  height: 10rem;
  min-width: 100px;
  background-color: ${(props) => props.$color};
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
