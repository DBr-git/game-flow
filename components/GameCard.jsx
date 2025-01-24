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
              // <StyledRatingBg>
              <StyledProgressDiv>
                <p>Rating: {game.rating}</p>
                <StyledProgressFill $progress={game.progress}>
                  <ProgressText>Progress: {game.progress}%</ProgressText>
                </StyledProgressFill>
              </StyledProgressDiv>
              // </StyledRatingBg>
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
            {/* <p>Rating: {game.rating}</p> */}
            <StyledProgressDiv>
              <p>Rating: {game.rating}</p>
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
  background-color: #808080de;
  border-radius: var(--borderRadius);
  position: absolute;
  padding-top: 0.3em;
  width: 132px;
  height: 50px;
  bottom: 0;
  left: 0;
  p {
    padding-left: 0.4em;
    font-size: 0.8rem;
    color: var(--subHeadingColor);
    font-family: var(--titleFont);
    font-weight: 300;
    text-align: left;
  }
`;

const StyledProgressFill = styled.div`
  display: flex;
  position: absolute;
  bottom: 0;
  width: ${({ $progress }) => `${$progress}%`};
  height: 24px;
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
  font-family: var(--titleFont);
  font-weight: 300;
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

const StyledRatingBg = styled.div`
  position: absolute;
  bottom: 0;
  background-color: gray;
  border: 3px solid red;
`;
