import styled from "styled-components";
import BackButton from "@/components/buttons/BackButton";
import { useRouter } from "next/router";
import useSWR from "swr";
import Image from "next/image";
<<<<<<< HEAD
import Header from "@/components/Header";
=======
import {
  StyledButton,
  StyledButtonWrapper,
} from "@/components/buttons/DefaultButtons";
import MenuButton from "@/components/buttons/MenuButton";
import { useState, useEffect, useRef } from "react";
import MenuOption from "@/components/MenuOption";
>>>>>>> main

const fetcher = (...args) => fetch(...args).then((response) => response.json());
export default function LibraryGameDetails({
  setGames,
  games,
  setMenuMode,
  menuMode,
}) {
  const router = useRouter();
  const [buttonMode, setButtonMode] = useState("default");
  const dialogRef = useRef(null);

  useEffect(() => {
    if (buttonMode === "add") {
      const timeOutId = setTimeout(() => {
        dialogRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }, 50);

      return () => clearTimeout(timeOutId);
    }
  }, [buttonMode]);

  const { data, error, isLoading } = useSWR(
    `/api/details/${router.query.libGameId}`,
    fetcher
  );

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>Error: {error.message}</div>;

  if (!data) return <div>Could not find game</div>;

  const singleGame = data[0];

  function gameExists() {
    return games?.some((game) => Number(game.id) === singleGame.id);
  }

  function handleAddGameFromLib(singleGame) {
    setGames([
      ...(games || []),
      {
        id: singleGame.id,
        artworks: singleGame.artworks[0],
        cover: singleGame.cover,
        name: singleGame.name,
        summary: singleGame.summary,
        status: "Planned",
        rating: "-",
        progress: 0,
      },
    ]);
    setButtonMode("success");
  }

  return (
    <>
<<<<<<< HEAD
      <Header />
      <StyledContainer>
=======
      <StyledImageContainer>
>>>>>>> main
        <StyledBackgroundImage
          src={`https://images.igdb.com/igdb/image/upload/t_screenshot_med/${singleGame.artworks[0].image_id}.jpg`}
          width={singleGame.artworks[0].width}
          height={singleGame.artworks[0].height}
          alt={`artwork of ${singleGame.name}`}
        />
        <StyledContent>
          <BackButton href="/library" />
          <h1>{singleGame.name}</h1>
        </StyledContent>
      </StyledImageContainer>

      <StyledContainer>
        <StyledArticle>
          <StyledDescription>{singleGame.summary}</StyledDescription>
        </StyledArticle>
        {gameExists() && buttonMode !== "success" && (
          <p>This game already exists in your personal list!</p>
        )}
        {!gameExists() && buttonMode !== "add" && (
          <StyledAddButton onClick={() => setButtonMode("add")}>
            Add game to personal list
          </StyledAddButton>
        )}
        <div ref={dialogRef}>
          {buttonMode === "add" && (
            <>
              <p>Do you really want to add this Game?</p>
              <StyledButtonWrapper>
                <StyledButton onClick={() => setButtonMode("default")}>
                  Cancel
                </StyledButton>
                <StyledButton
                  onClick={() => {
                    handleAddGameFromLib(singleGame);
                  }}
                >
                  Add game
                </StyledButton>
              </StyledButtonWrapper>
            </>
          )}
          {buttonMode === "success" && (
            <p>Successfully added game to personal list!</p>
          )}
        </div>
      </StyledContainer>
      <MenuButton setMenuMode={setMenuMode} />
      {menuMode === "opened" && <MenuOption setMenuMode={setMenuMode} />}
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
`;

const StyledArticle = styled.article`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: var(--headingColor);
  margin: 0 auto;

  @media screen and (min-width: 1024px) {
    max-width: 1144px;
  }
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
  gap: 1rem;
  padding: var(--mainContentPadding);
`;

const StyledAddButton = styled(StyledButton)`
  margin-bottom: 6em;
`;
