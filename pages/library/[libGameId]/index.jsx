import styled from "styled-components";
import BackButton from "@/components/buttons/BackButton";
import { useRouter } from "next/router";
import useSWR from "swr";
import Image from "next/image";
import Header from "@/components/Header";

const fetcher = (...args) => fetch(...args).then((response) => response.json());

export default function LibraryGameDetails() {
  const router = useRouter();

  const { data, error, isLoading } = useSWR(
    `/api/details/${router.query.libGameId}`,
    fetcher
  );

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <Header />
      <StyledContainer>
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
  padding: var(--mainContentPadding);
  color: var(--headingColor);
  margin: 0 auto;

  @media screen and (min-width: 1024px) {
    max-width: 1144px;
  }
`;

const StyledContainer = styled.div`
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
