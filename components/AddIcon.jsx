import AddIconSvg from "@/public/circle-plus.svg";
import styled from "styled-components";
import Link from "next/link";
export default function AddIcon() {
  return (
    <StyledAddLink href="/add-game">
      {" "}
      <AddIconSvg />
    </StyledAddLink>
  );
}

const StyledAddLink = styled(Link)`
  text-decoration: none;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  bottom: 25px;
  &:hover {
    cursor: pointer;
  }
`;
