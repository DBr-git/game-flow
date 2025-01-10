import MenuIconSvg from "@/public/menu-button.svg";
import styled from "styled-components";

export default function MenuButton({ setMenuMode }) {
  return (
    <StyledMenuButton
      aria-label="menu"
      type="button"
      onClick={() => setMenuMode("opened")}
    >
      <MenuIconSvg />
    </StyledMenuButton>
  );
}

const StyledMenuButton = styled.button`
  display: flex;
  position: fixed;
  right: 15px;
  bottom: 25px;
  border: 2px solid var(--menuColor);
  background-color: var(--primaryBackground2);
  color: var(--menuColor);
  border-radius: var(--borderRadius);
  box-shadow: var(--boxShadow);
  cursor: pointer;
`;
