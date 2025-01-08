import MenuIconSvg from "@/public/menu-button.svg";
import styled from "styled-components";

export default function MenuButton() {
  return (
    <StyledMenuButton type="button">
      <MenuIconSvg />
    </StyledMenuButton>
  );
}

const StyledMenuButton = styled.button`
  display: flex;
  position: fixed;
  right: 15px;
  bottom: 25px;
  border: 2px solid var(--accentColor3);
  background-color: var(--primaryColor3);
  color: var(--accentColor3);
  border-radius: var(--borderRadius);
  box-shadow: var(--boxShadow);
`;
