import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

export default function GameCard({ game }) {
  const router = useRouter();
  return (
    <>
      {game.cover ? (
        <StyledApiLink
          href={
            router.pathname === "/" ? game.id.toString() : `/library/${game.id}`
          }
          $progress={game.progress}
        >
          <StyledImage
            alt={`cover of ${game.name}`}
            src={`http://images.igdb.com/igdb/image/upload/t_cover_big/${game.cover.image_id}.jpg`}
            width={game.cover.width}
            height={game.cover.height}
            $progress={game.progress}
          ></StyledImage>
          <StyledProgressDiv>
            <StyledProgressFill $progress={game.progress}>
              <ProgressText>Progress: {game.progress}%</ProgressText>
            </StyledProgressFill>
          </StyledProgressDiv>
        </StyledApiLink>
      ) : (
        <StyledLink
          href={game.id.toString()}
          $color={game.color}
          $progress={game.progress}
        >
          <h3>{game.name}</h3>
          <p>Rating: {game.rating}</p>
          <StyledProgressDiv>
            <StyledProgressFill $progress={game.progress}>
              <ProgressText>Progress: {game.progress}%</ProgressText>
            </StyledProgressFill>
          </StyledProgressDiv>
        </StyledLink>
      )}
    </>
  );
}

const StyledLink = styled(Link)`
  position: relative;
  height: 189.33px;
  width: 139px;
  background-color: ${(props) => props.$color};
  box-shadow: 1px 1px 0.2em 0.1px black;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: space-around;
  color: var(--subHeadingColor);
  border-radius: var(--borderRadius);
  padding: 1em;
  border: ${(props) => (props.$progress === 100 ? "3px solid gold" : "none")};
  box-shadow: ${(props) =>
    props.$progress === 100
      ? "inset 0 -3em 3em gold, 0 0 0.6em 0.2em gold"
      : "none"};
  h3 {
    overflow-wrap: anywhere;
    overflow: auto;
    margin-bottom: 1em;
  }
  &:hover {
    color: var(--alertColor);
  }

  @media screen and (min-width: 1024px) {
    height: 230.66px;
    width: 170px;
  }
`;

const StyledImage = styled(Image)`
  object-fit: cover;
  height: 100%;
  width: 139px;
  box-shadow: 1px 1px 0.2em 0.1px black;
  border-radius: var(--borderRadius);
  border: ${(props) => (props.$progress === 100 ? "3px solid gold" : "none")};
  box-shadow: ${(props) =>
    props.$progress === 100
      ? "inset 0 -3em 3em gold, 0 0 0.6em 0.2em gold"
      : "none"};
  @media screen and (min-width: 1024px) {
    width: 170px;
  }
`;

const StyledApiLink = styled(Link)`
  position: relative;
  z-index: 20;
  color: var(--subHeadingColor);

  &:hover {
    color: var(--alertColor);
  }
`;

const StyledProgressDiv = styled.div`
  position: absolute;
  width: 100%;
  height: 1.5em;
  bottom: 0.25em;
  left: 0;
`;

const StyledProgressFill = styled.div`
  display: flex;
  width: ${({ $progress }) => `${$progress}%`};
  height: 100%;
  border-bottom-left-radius: var(--borderRadius);
  border-bottom-right-radius: ${(props) =>
    props.$progress === 100 && "var(--borderRadius)"};
  background-color: #4caf50;
`;

const ProgressText = styled.span`
  white-space: nowrap;
  padding: 0.5em 0 0 0.5em;
  font-size: 0.8rem;
  color: var(--subHeadingColor);
`;
