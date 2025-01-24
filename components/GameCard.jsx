import styled from "styled-components";
import Image from "next/image";
import { useRouter } from "next/router";

export default function GameCard({ game, setScrollPosition }) {
  const router = useRouter();
  return (
    <>
      {game.cover ? (
        <StyledShadowDiv $progress={game.progress}>
          <StyledApiButton
            onClick={() => {
              setScrollPosition(window.scrollY);
              router.push(
                router.pathname === "/"
                  ? game.id.toString()
                  : `/library/${game.id}`
              );
            }}
            $progress={game.progress}
          >
            <StyledImage
              alt={`cover of ${game.name}`}
              src={`http://images.igdb.com/igdb/image/upload/t_cover_big/${game.cover.image_id}.jpg`}
              width={game.cover.width}
              height={game.cover.height}
              $progress={game.progress}
            ></StyledImage>
            {router.pathname !== "/library" && (
              <StyledProgressDiv>
                <StyledProgressFill $progress={game.progress}>
                  <ProgressText>Progress: {game.progress}%</ProgressText>
                </StyledProgressFill>
              </StyledProgressDiv>
            )}
          </StyledApiButton>
        </StyledShadowDiv>
      ) : (
        <StyledShadowDiv $progress={game.progress}>
          <StyledButton
            $color={game.color}
            onClick={() => {
              setScrollPosition(window.scrollY);
              router.push(
                router.pathname === "/"
                  ? game.id.toString()
                  : `/library/${game.id}`
              );
            }}
          >
            <h3>{game.name}</h3>
            <p>Rating: {game.rating}</p>
            <StyledProgressDiv>
              <StyledProgressFill $progress={game.progress}>
                <ProgressText>Progress: {game.progress}%</ProgressText>
              </StyledProgressFill>
            </StyledProgressDiv>
          </StyledButton>
        </StyledShadowDiv>
      )}
    </>
  );
}

const StyledButton = styled.button`
  border: none;
  position: relative;
  height: 189.33px;
  width: 132px;
  background-color: ${(props) => props.$color};
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

  @media screen and (min-width: 1024px) {
    height: 230.66px;
    width: 170px;
  }
`;

const StyledImage = styled(Image)`
  object-fit: cover;
  height: 189.33px;
  width: 132px;
  border-radius: var(--borderRadius);
  @media screen and (min-width: 1024px) {
    width: 170px;
  }
`;

const StyledApiButton = styled.button`
  all: unset;
  position: relative;
  z-index: 20;
  color: var(--subHeadingColor);
  height: 189.33px;
  width: 132px;
  &:hover {
    color: var(--alertColor);
  }
`;

const StyledProgressDiv = styled.div`
  position: absolute;
  width: 132px;
  height: 24px;
  bottom: 0;
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

const StyledShadowDiv = styled.div`
  box-sizing: content-box;
  border: ${(props) => (props.$progress === 100 ? "3px solid gold" : "none")};
  box-shadow: ${(props) =>
    props.$progress === 100
      ? " 0 0 0.6em 0.2em gold"
      : "1px 1px 0.2em 0.1px black"};
  border-radius: var(--borderRadius);
  border-radius: 8px;
  height: 189.33px;
  &:hover {
    cursor: pointer;
  }
`;
