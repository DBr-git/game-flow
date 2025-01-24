import styled from "styled-components";
import PlusButton from "./buttons/PlusButton";
import BackSvg from "./BackSvg";
import LibraryButton from "./buttons/LibraryButton";
import PersonalListButton from "./buttons/PersonalListButton";

export default function MenuOption({ setMenuMode, setScrollPosition }) {
  return (
    <StyledMenuOptionContainer>
      <LibraryButton onSetScrollPosition={setScrollPosition} />
      <PlusButton onSetScrollPosition={setScrollPosition} />
      <PersonalListButton onSetScrollPosition={setScrollPosition} />
      <StyledCloseMenuButton
        type="button"
        aria-label="close menu"
        onClick={() => setMenuMode("closed")}
      >
        <BackSvg />
      </StyledCloseMenuButton>
    </StyledMenuOptionContainer>
  );
}

const StyledMenuOptionContainer = styled.div`
  background-color: var(--primaryBackground2);
  position: fixed;
  z-index: 1000;
  right: 15px;
  bottom: 25px;
  padding: 1rem;
  border: 2px solid var(--menuColor);
  border-radius: var(--borderRadius);
  box-shadow: var(--boxShadow);
  display: flex;
  gap: 1em;

  @media screen and (min-width: 1024px) {
    display: none;
  }
`;

const StyledCloseMenuButton = styled.button`
  display: flex;
  align-self: flex-end;
  background-color: var(--backgroundSubSection);
  color: var(--menuColor);
  box-shadow: var(--boxShadow);
  border-radius: var(--borderRadius);
  border: none;
  width: 32px;
  height: 32px;
  cursor: pointer;
`;
