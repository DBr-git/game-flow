import styled from "styled-components";
import PlusButton from "./buttons/PlusButton";
import BackSvg from "./BackSvg";

export default function MenuOption({ setMenuMode }) {
  return (
    <StyledMenuOptionContainer>
      <PlusButton />
      <StyledCloseMenuButton
        type="button"
        onClick={() => setMenuMode("closed")}
      >
        <BackSvg />
      </StyledCloseMenuButton>
    </StyledMenuOptionContainer>
  );
}

const StyledMenuOptionContainer = styled.div`
  background-color: var(--primaryColor3);
  position: fixed;
  right: 15px;
  bottom: 25px;
  padding: 1rem;
  border: 2px solid var(--accentColor3);
  border-radius: var(--borderRadius);
  box-shadow: var(--boxShadow);
  display: flex;
  gap: 1em;
`;

const StyledCloseMenuButton = styled.button`
  display: flex;
  align-self: flex-end;
  background-color: var(--primaryColor2);
  color: var(--accentColor3);
  box-shadow: var(--boxShadow);
  border-radius: var(--borderRadius);
  border: none;
  width: 50px;
  height: 50px;
`;
