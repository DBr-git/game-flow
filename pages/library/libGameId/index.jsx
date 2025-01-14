import { useRouter } from "next/router";
import styled from "styled-components";
import BackButton from "@/components/buttons/BackButton";

export default function LibraryGameDetails() {
  const router = useRouter();
  return (
    <>
      <StyledDiv>
        <BackButton href="/" />
        <h1>Name of the Game</h1>
      </StyledDiv>
      <StyledArticle>
        <StyledDescription>{"sdsdsdad"}</StyledDescription>
      </StyledArticle>
    </>
  );
}

const StyledDiv = styled.div`
  height: 150px;
  margin: -0.5em -1.75em 0 -1.75em;
  display: flex;
  flex-direction: column;
  padding: 0.5em 1.75em;
  background-image: url("/the-witcher-artwork.jpg");
  background-size: cover;
  background-position: center;
`;

const StyledDescription = styled.p`
  flex-basis: 100%;
  margin-bottom: 1em;
`;

const StyledArticle = styled.article`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 1rem;
  padding: var(--mainContentPadding);
  overflow-wrap: anywhere;
  color: var(--headingColor);
  p {
    background-color: var(--backgroundSubSection);
    padding: 0.5em 1em;
    border-radius: var(--borderRadius);
    box-shadow: var(--boxShadow);
  }
`;
