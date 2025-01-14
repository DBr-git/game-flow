import styled from "styled-components";
import PlusButton from "./buttons/PlusButton";
import BackSvg from "./BackSvg";
import LibraryButton from "./buttons/LibraryButton";

export default function MenuOption({ setMenuMode }) {
  return (
    <StyledMenuOptionContainer>
      <LibraryButton />
      <PlusButton aria-label="add game" />
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
  right: 15px;
  bottom: 25px;
  padding: 1rem;
  border: 2px solid var(--menuColor);
  border-radius: var(--borderRadius);
  box-shadow: var(--boxShadow);
  display: flex;
  gap: 1em;
`;

const StyledCloseMenuButton = styled.button`
  display: flex;
  align-self: flex-end;
  background-color: var(--backgroundSubSection);
  color: var(--menuColor);
  box-shadow: var(--boxShadow);
  border-radius: var(--borderRadius);
  border: none;
  width: 50px;
  height: 50px;
  cursor: pointer;
`;
