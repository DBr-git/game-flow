import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

export default function GameCard({ game, setScrollPosition }) {
  const router = useRouter();

  return (
    <>
      {game.cover ? (
        <StyledApiLink
          href={
            router.pathname === "/" ? game.id.toString() : `/library/${game.id}`
          }
          onClick={() => setScrollPosition(window.scrollY)}
        >
          <StyledImage
            alt={`cover of ${game.name}`}
            src={`http://images.igdb.com/igdb/image/upload/t_cover_big/${game.cover.image_id}.jpg`}
            width={game.cover.width}
            height={game.cover.height}
          ></StyledImage>
        </StyledApiLink>
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
  height: 100%;
  min-width: 100%;
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

const StyledImage = styled(Image)`
  object-fit: cover;
  height: 100%;
  width: 100%;
  box-shadow: 1px 1px 0.2em 0.1px black;
  border-radius: var(--borderRadius);
`;

const StyledApiLink = styled(Link)`
  overflow: hidden;
  display: box;
  color: var(--subHeadingColor);
  &:hover {
    color: var(--alertColor);
  }
`;
