import styled from "styled-components";
import BackButton from "@/components/buttons/BackButton";
import { useRouter } from "next/router";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((response) => response.json());

export default function LibraryGameDetails({ libGames }) {
  const router = useRouter();
  // const { gameId } = router.query.libGameId;
  // console.log(typeof libGames[0].id);

  // let selectedGame = libGames.find(
  //   (game) => game.id === Number(router.query.libGameId)
  // );
  // console.log(libGames);

  // if (!selectedGame) {
  //   return <div>Game not found!</div>;
  // }

  const { data, error, isLoading } = useSWR(
    `/api/details/${router.query.libGameId}`,
    fetcher
  );

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>Error: {error.message}</div>;
  console.log(data);

  return (
    <>
      <StyledContainer>
        <StyledBackground></StyledBackground>
        <StyledContent>
          <BackButton href="/library" />
          <h1>{data[0].name}</h1>
        </StyledContent>
      </StyledContainer>

      <StyledArticle>
        <StyledDescription>{data[0].summary}</StyledDescription>
      </StyledArticle>
    </>
  );
}

const StyledDescription = styled.p`
  flex-basis: 100%;
  margin-bottom: 1em;
`;

const StyledArticle = styled.article`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: var(--mainContentPadding);
  color: var(--headingColor);
  p {
    background-color: var(--backgroundSubSection);
    padding: 0.5em 1em;
    border-radius: var(--borderRadius);
    box-shadow: var(--boxShadow);
    z-index: 1;
  }
`;

const StyledContainer = styled.div`
  position: relative;
  height: 150px;
  margin: -0.5em -1.75em 0 -1.75em;
  padding: 0.5em 1.75em;
`;

const StyledBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url("/the-witcher-artwork.jpg");
  background-size: cover;
  background-position: center;
  mask: linear-gradient(
    330deg,
    var(--primaryBackground),
    20%,
    rgba(255, 255, 255, 0)
  );
  z-index: 1;
`;

const StyledContent = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  z-index: 2;
`;
