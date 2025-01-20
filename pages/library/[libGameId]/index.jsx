import styled from "styled-components";
import BackButton from "@/components/buttons/BackButton";
import { useRouter } from "next/router";
import useSWR from "swr";
import Image from "next/image";
import { StyledButton } from "@/components/buttons/DefaultButtons";

const fetcher = (...args) => fetch(...args).then((response) => response.json());

export default function LibraryGameDetails({ setGames, games }) {
  const router = useRouter();

  const { data, error, isLoading } = useSWR(
    `/api/details/${router.query.libGameId}`,
    fetcher
  );

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>Error: {error.message}</div>;
  console.log(data);

  function handleAddGameFromLib(newGame) {
    setGames([
      ...games,
      {
        id: newGame[0].id,
        artworks: newGame[0].artworks[0],
        name: newGame[0].name,
        summary: newGame[0].summary,
        status: "Planned",
        rating: "-",
        progress: 0,
      },
    ]);
  }

  return (
    <>
      <StyledImageContainer>
        <StyledBackgroundImage
          src={`https://images.igdb.com/igdb/image/upload/t_screenshot_med/${data[0].artworks[0].image_id}.jpg`}
          width={data[0].artworks[0].width}
          height={data[0].artworks[0].height}
          alt={`artwork of ${data[0].name}`}
        />
        <StyledContent>
          <BackButton href="/library" />
          <h1>{data[0].name}</h1>
        </StyledContent>
      </StyledImageContainer>

      <StyledContainer>
        <StyledArticle>
          <StyledDescription>{data[0].summary}</StyledDescription>
        </StyledArticle>
        <StyledButton onClick={() => handleAddGameFromLib(data)}>
          Add game to personal list
        </StyledButton>
      </StyledContainer>
    </>
  );
}

const StyledDescription = styled.p`
  flex-basis: 100%;
  margin-bottom: 1em;
  background-color: var(--backgroundSubSection);
  padding: 0.5em 1em;
  border-radius: var(--borderRadius);
  box-shadow: var(--boxShadow);
  z-index: 1;
`;

const StyledArticle = styled.article`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: var(--headingColor);
`;

const StyledImageContainer = styled.div`
  position: relative;
  height: 150px;
  margin: -0.5em -1.75em 0 -1.75em;
  padding: 0.5em 1.75em;
`;

const StyledBackgroundImage = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: none;
  object-fit: cover;
  height: 100%;
  width: 100%;
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

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: var(--mainContentPadding);
`;
